import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Users, DollarSign, Activity, Bot } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  const stats = [
    { title: "Total Revenue", value: "$45,231.89", change: "+20.1% from last month", icon: <DollarSign className="h-4 w-4 text-muted-foreground" /> },
    { title: "Subscriptions", value: "+2350", change: "+180.1% from last month", icon: <Users className="h-4 w-4 text-muted-foreground" /> },
    { title: "Active Users", value: "12,234", change: "+19% from last month", icon: <Activity className="h-4 w-4 text-muted-foreground" /> },
    { title: "AI Analyses Ran", value: "573", change: "+201 since last hour", icon: <Bot className="h-4 w-4 text-muted-foreground" /> },
  ];

  return (
    <>
      <div className="flex items-center justify-between space-y-2">
        <h1 className="text-3xl font-bold tracking-tight font-headline">Dashboard</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              {stat.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle className="font-headline">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <p>Placeholder for recent activity feed...</p>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle className="font-headline">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-2">
            <Button asChild>
              <Link href="/dashboard/ui-ux-analyzer">
                Run New UI/UX Analysis
                <ArrowUpRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
            <Button variant="outline">
                <Link href="/dashboard/settings">Manage Subscription</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
