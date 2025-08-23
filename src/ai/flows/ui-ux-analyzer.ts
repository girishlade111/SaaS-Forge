'use server';

/**
 * @fileOverview Provides AI-driven UI/UX improvement suggestions based on user behavior data.
 *
 * @function getUiUxSuggestions -  Retrieves UI/UX suggestions.
 * @interface UiUxInput - The input type for the getUiUxSuggestions function.
 * @interface UiUxOutput - The return type for the getUiUxSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const UiUxInputSchema = z.object({
  userBehaviorData: z.string().describe('JSON string of user behavior data, including clicks, navigation patterns, and time spent on pages.'),
  currentUiUxDescription: z.string().describe('Description of the current UI/UX of the application, including layout, key elements, and user flows.'),
});
export type UiUxInput = z.infer<typeof UiUxInputSchema>;

const UiUxOutputSchema = z.object({
  suggestions: z.array(
    z.object({
      area: z.string().describe('The specific area of the UI/UX to improve (e.g., landing page, user dashboard, checkout flow).'),
      problem: z.string().describe('The identified problem in the current UI/UX.'),
      suggestion: z.string().describe('A detailed suggestion for improving the UI/UX in the identified area.'),
      rationale: z.string().describe('The rationale behind the suggestion, explaining how it will improve user engagement or optimize the design.'),
    })
  ).describe('Array of UI/UX improvement suggestions.'),
});
export type UiUxOutput = z.infer<typeof UiUxOutputSchema>;

export async function getUiUxSuggestions(input: UiUxInput): Promise<UiUxOutput> {
  return uiUxAnalyzerFlow(input);
}

const prompt = ai.definePrompt({
  name: 'uiUxAnalyzerPrompt',
  input: {schema: UiUxInputSchema},
  output: {schema: UiUxOutputSchema},
  prompt: `You are an expert UI/UX analyst. Analyze the provided user behavior data and current UI/UX description to suggest improvements.

User Behavior Data: {{{userBehaviorData}}}
Current UI/UX Description: {{{currentUiUxDescription}}}

Provide a set of actionable suggestions, each including the area to improve, the identified problem, a detailed suggestion, and the rationale behind the suggestion.

Format your output as a JSON array of suggestions adhering to the specified output schema.`,
});

const uiUxAnalyzerFlow = ai.defineFlow(
  {
    name: 'uiUxAnalyzerFlow',
    inputSchema: UiUxInputSchema,
    outputSchema: UiUxOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
