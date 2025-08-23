"use client"

import { Bar, BarChart, Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const userSignupsData = [
  { date: 'Jan 23', signups: 86 },
  { date: 'Feb 23', signups: 124 },
  { date: 'Mar 23', signups: 253 },
  { date: 'Apr 23', signups: 321 },
  { date: 'May 23', signups: 215 },
  { date: 'Jun 23', signups: 453 },
  { date: 'Jul 23', signups: 512 },
  { date: 'Aug 23', signups: 678 },
  { date: 'Sep 23', signups: 621 },
  { date: 'Oct 23', signups: 734 },
  { date: 'Nov 23', signups: 890 },
  { date: 'Dec 23', signups: 1023 },
];

const subscriptionData = [
  { name: 'Jan', Hobby: 4000, Pro: 2400 },
  { name: 'Feb', Hobby: 3000, Pro: 1398 },
  { name: 'Mar', Hobby: 2000, Pro: 9800 },
  { name: 'Apr', Hobby: 2780, Pro: 3908 },
  { name: 'May', Hobby: 1890, Pro: 4800 },
  { name: 'Jun', Hobby: 2390, Pro: 3800 },
  { name: 'Jul', Hobby: 3490, Pro: 4300 },
];

const chartConfig = {
  signups: {
    label: "Signups",
    color: "hsl(var(--primary))",
  },
  Hobby: {
    label: "Hobby",
    color: "hsl(var(--chart-1))",
  },
  Pro: {
    label: "Pro",
    color: "hsl(var(--chart-2))",
  }
}

export default function AnalyticsPage() {
  return (
    <>
      <div className="flex items-center justify-between space-y-2">
        <h1 className="text-3xl font-bold tracking-tight font-headline">Analytics</h1>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">User Sign-ups Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px] w-full">
              <LineChart data={userSignupsData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="line" />}
                />
                <Legend />
                <Line type="monotone" dataKey="signups" stroke="hsl(var(--primary))" strokeWidth={2} dot={false} />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Subscriptions by Plan</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px] w-full">
              <BarChart data={subscriptionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="dot" />}
                />
                <Legend />
                <Bar dataKey="Hobby" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]} />
                <Bar dataKey="Pro" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
