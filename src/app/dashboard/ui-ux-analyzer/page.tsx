import { UiUxAnalyzerClient } from "./client";

export default function UiUxAnalyzerPage() {
  return (
    <>
      <div className="flex items-center justify-between space-y-2">
        <div className="space-y-1">
            <h1 className="text-3xl font-bold tracking-tight font-headline">UI/UX Analyzer</h1>
            <p className="text-muted-foreground">Get AI-powered suggestions to improve your application's user experience.</p>
        </div>
      </div>
      <UiUxAnalyzerClient />
    </>
  );
}
