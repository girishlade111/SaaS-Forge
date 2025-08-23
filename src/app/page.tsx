import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight, Star, Bot, BarChart, Settings, Lock } from "lucide-react";
import { Logo } from "@/components/icons";
import Image from "next/image";
import { Copyright } from "./copyright";

export default function Home() {
  const features = [
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Secure Authentication",
      description: "Ready-to-use authentication system with email/password and OAuth providers like Google and GitHub, powered by Supabase.",
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "User Dashboard & Analytics",
      description: "A complete user dashboard for profile management, settings, and subscription overview, with a built-in analytics suite.",
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Subscription Billing",
      description: "Seamlessly integrate Stripe for subscription billing, payment processing, and managing customer plans.",
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "AI-Powered Insights",
      description: "Leverage the built-in UI/UX Analyzer to get AI-driven suggestions and improve user engagement on your application.",
    },
  ];

  const pricingPlans = [
    {
      name: "Hobby",
      price: "$10",
      features: ["1 Project", "Basic Analytics", "Email Support"],
    },
    {
      name: "Pro",
      price: "$49",
      isPopular: true,
      features: ["Unlimited Projects", "Advanced Analytics", "Priority Support", "AI UI/UX Analyzer"],
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: ["All Pro features", "Dedicated Support", "Custom Integrations"],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Logo />
              <span className="font-bold font-headline">SaaS Forge</span>
            </Link>
          </div>
          <nav className="flex items-center gap-4 text-sm font-medium ml-auto">
            <Link href="#features" className="text-muted-foreground transition-colors hover:text-foreground">Features</Link>
            <Link href="#pricing" className="text-muted-foreground transition-colors hover:text-foreground">Pricing</Link>
            <Button variant="ghost" asChild>
              <Link href="/login">Sign In</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Get Started <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="container pt-20 pb-16 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight font-headline md:text-6xl">
            Launch Your SaaS Faster Than Ever
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
            SaaS Forge is the ultimate Next.js starter kit, packed with everything you need to build and scale your application. Authentication, billing, and AI-powered insights, all out of the box.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/signup">Start Forging Today <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#">View on GitHub</Link>
            </Button>
          </div>
        </section>

        <section id="features" className="container py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold font-headline">Everything you need to get started</h2>
            <p className="mt-2 text-muted-foreground">Focus on your product, not the boilerplate.</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.title} className="flex flex-col">
                <CardHeader>
                  <div className="bg-primary/10 text-primary p-3 rounded-md w-fit">{feature.icon}</div>
                  <CardTitle className="mt-4 font-headline">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="pricing" className="container py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold font-headline">Flexible pricing for teams of all sizes</h2>
            <p className="mt-2 text-muted-foreground">Choose the plan that's right for you.</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {pricingPlans.map((plan) => (
              <Card key={plan.name} className={`flex flex-col ${plan.isPopular ? 'border-primary shadow-lg' : ''}`}>
                <CardHeader>
                  {plan.isPopular && <div className="text-sm font-semibold text-primary">Most Popular</div>}
                  <CardTitle className="font-headline text-2xl mt-2">{plan.name}</CardTitle>
                  <CardDescription>
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    {plan.price !== "Custom" && "/ month"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 space-y-4">
                  <ul className="space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant={plan.isPopular ? 'default' : 'outline'}>
                    {plan.name === 'Enterprise' ? 'Contact Us' : 'Get Started'}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
        
        <section className="bg-secondary py-16">
          <div className="container text-center">
             <Image src="https://placehold.co/1200x400.png" alt="SaaS Forge Dashboard" width={1200} height={400} data-ai-hint="dashboard application" className="rounded-lg shadow-2xl mx-auto" />
             <h2 className="text-3xl font-bold font-headline mt-12">Ready to Forge Your Future?</h2>
             <p className="mt-4 text-muted-foreground">Start building your next great idea today. No credit card required.</p>
             <Button size="lg" className="mt-8" asChild>
                <Link href="/signup">Sign Up for Free</Link>
             </Button>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container py-8 flex items-center justify-between">
            <Copyright />
            <nav className="flex gap-4">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms</Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy</Link>
            </nav>
        </div>
      </footer>
    </div>
  );
}
