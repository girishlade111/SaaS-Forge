"use server";

import { getUiUxSuggestions, type UiUxInput, type UiUxOutput } from '@/ai/flows/ui-ux-analyzer';
import { z } from 'zod';

const formSchema = z.object({
  userBehaviorData: z.string().min(10, "Please provide more detailed user behavior data.").refine(val => {
      try {
          JSON.parse(val);
          return true;
      } catch (e) {
          return false;
      }
  }, {message: "User behavior data must be a valid JSON string."}),
  currentUiUxDescription: z.string().min(10, "Please provide a more detailed UI/UX description."),
});

export type FormState = {
  message: string;
  data?: UiUxOutput;
  errors?: {
    userBehaviorData?: string[];
    currentUiUxDescription?: string[];
    _form?: string[];
  };
};

export async function analyzeUiUx(prevState: FormState, formData: FormData): Promise<FormState> {
  const validatedFields = formSchema.safeParse({
    userBehaviorData: formData.get('userBehaviorData'),
    currentUiUxDescription: formData.get('currentUiUxDescription'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Validation failed. Please check the fields.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const result = await getUiUxSuggestions(validatedFields.data as UiUxInput);
    if (!result || !result.suggestions || result.suggestions.length === 0) {
        return {
            message: 'Analysis complete, but no suggestions were generated. Try providing more detailed input.',
        };
    }

    return {
      message: 'Analysis complete.',
      data: result,
    };
  } catch (error) {
    console.error("UI/UX Analysis Error:", error);
    return {
      message: 'An error occurred during analysis.',
      errors: { _form: [error instanceof Error ? error.message : 'An unexpected error occurred. Please try again later.'] },
    };
  }
}
