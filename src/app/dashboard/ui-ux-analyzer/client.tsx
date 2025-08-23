"use client";

import { useFormState, useFormStatus } from "react-dom";
import { analyzeUiUx } from "./actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Lightbulb, AlertTriangle, AreaChart, Target } from "lucide-react";
import type { FormState } from "./actions";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Analyzing..." : "Get Suggestions"}
    </Button>
  );
}

export function UiUxAnalyzerClient() {
  const initialState: FormState = { message: "" };
  const [state, formAction] = useFormState(analyzeUiUx, initialState);

  return (
    <div className="grid gap-8 md:grid-cols-2">
        <Card>
            <CardHeader>
                <CardTitle>Analysis Input</CardTitle>
                <CardDescription>Provide data about your app's current state. The more detail, the better the suggestions.</CardDescription>
            </CardHeader>
            <CardContent>
                <form action={formAction} className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="currentUiUxDescription">Current UI/UX Description</Label>
                        <Textarea
                            id="currentUiUxDescription"
                            name="currentUiUxDescription"
                            placeholder="Describe the layout, key elements, and user flows of your application. e.g., 'Our dashboard has a sidebar on the left, a main content area, and a header with user settings...'"
                            className="min-h-[150px]"
                        />
                         {state.errors?.currentUiUxDescription && (
                            <p className="text-sm font-medium text-destructive">{state.errors.currentUiUxDescription.join(", ")}</p>
                        )}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="userBehaviorData">User Behavior Data (JSON)</Label>
                        <Textarea
                            id="userBehaviorData"
                            name="userBehaviorData"
                            placeholder='e.g., {"page": "/dashboard", "timeSpent": 120, "clicks": ["#add-project-button"]}'
                            className="min-h-[150px] font-code"
                        />
                         {state.errors?.userBehaviorData && (
                            <p className="text-sm font-medium text-destructive">{state.errors.userBehaviorData.join(", ")}</p>
                        )}
                    </div>
                    <SubmitButton />
                    {state.errors?._form && (
                        <p className="text-sm font-medium text-destructive">{state.errors._form.join(", ")}</p>
                    )}
                </form>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>AI Suggestions</CardTitle>
                <CardDescription>Here are the AI-powered suggestions to improve your UI/UX.</CardDescription>
            </CardHeader>
            <CardContent>
                {state.data?.suggestions ? (
                    <Accordion type="single" collapsible className="w-full">
                        {state.data.suggestions.map((item, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="font-semibold text-left hover:no-underline">
                                  <div className="flex items-center gap-2">
                                    <AreaChart className="h-4 w-4 text-primary" />
                                    {item.area}
                                  </div>
                                </AccordionTrigger>
                                <AccordionContent className="space-y-4 pt-2">
                                    <div className="flex items-start gap-3">
                                        <div className="mt-1 flex-shrink-0"><AlertTriangle className="h-5 w-5 text-destructive" /></div>
                                        <div>
                                            <h4 className="font-semibold">Problem</h4>
                                            <p className="text-muted-foreground">{item.problem}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="mt-1 flex-shrink-0"><Lightbulb className="h-5 w-5 text-yellow-500" /></div>
                                        <div>
                                            <h4 className="font-semibold">Suggestion</h4>
                                            <p className="text-muted-foreground">{item.suggestion}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="mt-1 flex-shrink-0"><Target className="h-5 w-5 text-green-500" /></div>
                                        <div>
                                            <h4 className="font-semibold">Rationale</h4>
                                            <p className="text-muted-foreground">{item.rationale}</p>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                ) : (
                    <div className="flex flex-col items-center justify-center text-center h-full min-h-[300px] text-muted-foreground p-8 border-2 border-dashed rounded-lg">
                        <Bot className="h-12 w-12 mb-4" />
                        <p>Your improvement suggestions will appear here once you run an analysis.</p>
                    </div>
                )}
            </CardContent>
        </Card>
    </div>
  );
}
