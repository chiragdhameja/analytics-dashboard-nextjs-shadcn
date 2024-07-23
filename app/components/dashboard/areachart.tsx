"use client";
import React from "react";
import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { month: "January", instagram: 80, tiktok: 90, facebook: 40 },
  { month: "February", instagram: 90, tiktok: 120, facebook: 60 },
  { month: "March", instagram: 125, tiktok: 90, facebook: 110 },
  { month: "April", instagram: 160, tiktok: 145, facebook: 75 },
  { month: "May", instagram: 170, tiktok: 150, facebook: 80 },
  { month: "June", instagram: 190, tiktok: 180, facebook: 125 },
];

const chartConfig = {
  instagram: {
    label: "Instagram",
    color: "#eb3461",
  },
  tiktok: {
    label: "Tiktok",
    color: "#ebb434",
  },
  facebook: {
    label: "Facebook",
    color: "#34b1eb",
  },
} satisfies ChartConfig;

export function Areachart() {
  return (
    <Card className="w-1/2">
      <CardHeader>
        <CardTitle className="text-lg">Area Chart - Stacked Expanded</CardTitle>
        <CardDescription>
          Showing total visitors for the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={true} />
            <XAxis
              dataKey="month"
              tickLine={true}
              axisLine={true}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={true}
              content={<ChartTooltipContent indicator="dot" />}
            />

            <Area
              dataKey="facebook"
              type="basis"
              fill="#34b1eb"
              fillOpacity={0.4}
              stroke="#34b1eb"
              stackId="a"
            />
            <Area
              dataKey="tiktok"
              type="basis"
              fill="#ebb434"
              fillOpacity={0.4}
              stroke="#ebb434"
              stackId="a"
            />
            <Area
              dataKey="instagram"
              type="basis"
              fill="#eb3461"
              fillOpacity={0.4}
              stroke="#eb3461"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 15.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              January - June 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
