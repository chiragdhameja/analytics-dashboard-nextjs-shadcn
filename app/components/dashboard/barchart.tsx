"use client";

import React, { useEffect, useState } from "react";
import { TrendingUp } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Rectangle,
  XAxis,
  YAxis,
} from "recharts";
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

type BrowserConfig = {
  label: string;
  color: string;
};

const chartConfig: { [key: string]: BrowserConfig } = {
  chrome: {
    label: "Chrome",
    color: "#eb3449",
  },
  safari: {
    label: "Safari",
    color: "#34e2eb",
  },
  firefox: {
    label: "Firefox",
    color: "#eb5f34",
  },
  edge: {
    label: "Edge",
    color: "#4f34eb",
  },
  other: {
    label: "Other",
    color: "#ebeb34",
  },
};

export function BarChartComponent() {
  const [chartData, setChartData] = useState<
    { browser: string; visitors: number }[]
  >([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/data");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const browserData = await response.json();
        setChartData(browserData);
      } catch (err) {
        if (err instanceof Error) {
          console.error(err.message);
          setError(err.message);
        } else {
          console.error("An unknown error occurred");
          setError("An unknown error occurred");
        }
      }
    };

    fetchData();
  }, []);

  const CustomBar = (props: any) => {
    const { payload } = props;
    const browser = payload.browser as keyof typeof chartConfig;
    const fillColor = chartConfig[browser]?.color || "#000";
    return <Rectangle {...props} fill={fillColor} />;
  };

  return (
    <Card className="w-1/2">
      <CardHeader>
        <CardTitle className="text-lg">Bar Chart - Browser data</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        {error ? (
          <div className="text-red-500">Error: {error}</div>
        ) : (
          <ChartContainer config={chartConfig}>
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="browser"
                tickLine={true}
                tickMargin={10}
                axisLine={true}
                tickFormatter={(value) =>
                  chartConfig[value as keyof typeof chartConfig]?.label
                }
              />
              <YAxis tickLine={true} />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar
                dataKey="visitors"
                strokeWidth={2}
                radius={8}
                shape={<CustomBar />}
                activeIndex={2}
                activeBar={({ ...props }) => (
                  <Rectangle
                    {...props}
                    fillOpacity={0.8}
                    stroke={props.payload.fill}
                    strokeDasharray={4}
                    strokeDashoffset={4}
                  />
                )}
              />
            </BarChart>
          </ChartContainer>
        )}
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 15.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
