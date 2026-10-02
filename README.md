# SaaS Forge - The Ultimate Next.js Starter Kit

SaaS Forge is a feature-rich, production-ready Next.js starter kit designed to help you launch your SaaS application faster than ever. It comes pre-configured with a modern tech stack, essential features like authentication, billing, and a user dashboard, plus a unique AI-powered UI/UX analyzer to help you build a better product.

## Key Features

*   **Modern Tech Stack**: Built with Next.js App Router, TypeScript, and Tailwind CSS for a robust and scalable foundation.
*   **Sleek UI Components**: A full suite of beautifully designed and accessible components from `shadcn/ui`.
*   **Secure Authentication**: Placeholder integration for email/password and OAuth (Google, GitHub) logins.
*   **Subscription Billing**: Pre-built UI and logic for integrating with Stripe to manage subscription plans.
*   **User Dashboard**: A complete dashboard for users to manage their profile, settings, and view application analytics.
*   **AI-Powered Insights**: A built-in **UI/UX Analyzer** that uses Generative AI (via Genkit) to provide actionable suggestions for improving your application's design and user flow.
*   **Responsive Design**: The entire application is designed to be fully responsive and accessible on both desktop and mobile devices.
*   **Easy Deployment**: Ready to deploy with Firebase App Hosting.

## Tech Stack

-   **Framework**: [Next.js](https://nextjs.org/) (App Router)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components**: [Shadcn/UI](https://ui.shadcn.com/)
-   **AI Integration**: [Genkit (Firebase Genkit)](https://firebase.google.com/docs/genkit)
-   **Analytics Charts**: [Recharts](https://recharts.org/)
-   **Forms**: [React Hook Form](https://react-hook-form.com/) with [Zod](https://zod.dev/) for validation

## Getting Started

Follow these steps to get your local development environment up and running.

### Prerequisites

-   [Node.js](https://nodejs.org/en) (v20 or later recommended)
-   [npm](https://www.npmjs.com/) or your package manager of choice

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd <your-repository-name>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

The application will be available at `http://localhost:9002`.

## Folder Structure

Here is a high-level overview of the most important files and directories:

```
.
├── src
│   ├── app                 # Main application routes (App Router)
│   │   ├── (auth)          # Route group for auth pages (login, signup)
│   │   ├── dashboard       # Protected dashboard routes
│   │   ├── page.tsx        # Landing page
│   │   └── layout.tsx      # Root layout
│   ├── ai                  # Genkit AI flows and configuration
│   │   ├── flows           # AI flow definitions (e.g., UI/UX Analyzer)
│   │   └── genkit.ts       # Genkit initialization
│   ├── components          # Shared React components
│   │   └── ui              # UI components from shadcn/ui
│   ├── hooks               # Custom React hooks
│   └── lib                 # Utility functions
├── public                  # Static assets
└── tailwind.config.ts      # Tailwind CSS configuration
```

## AI-Powered UI/UX Analyzer

SaaS Forge includes a unique feature that leverages Google's Gemini models via Genkit to analyze your application.

-   **Location**: `src/app/dashboard/ui-ux-analyzer`
-   **How it works**: You provide a description of your current UI/UX and a JSON object representing user behavior data. The AI flow, defined in `src/ai/flows/ui-ux-analyzer.ts`, analyzes this input and provides actionable suggestions to improve user engagement and optimize your design.

This powerful tool demonstrates how you can easily integrate Generative AI into your SaaS to provide value-added features.

## About the Author

**Built by Girish Lade** — [ladestack.in](https://ladestack.in)

## Deploy Notes

- Designed for Firebase App Hosting (`apphosting.yaml` included). Deploy with `firebase apphosting:backends:create` or push the repo and connect via the Firebase console.
- Also deployable to Vercel or Netlify (App Router SSR).
- Requires environment variables for Firebase config (`NEXT_PUBLIC_FIREBASE_*`), Google AI (`GEMINI_API_KEY` / `GOOGLE_GENAI_API_KEY`) for the Genkit UI/UX analyzer flows, and Stripe keys for billing.
