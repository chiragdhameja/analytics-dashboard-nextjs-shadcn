import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard/ProductCard";
import { Areachart } from "./components/dashboard/areachart";
import { PieChar } from "./components/dashboard/piechart";
import { ThemeProvider } from "@/components/theme-provider";
import { BarChartComponent } from "./components/dashboard/barchart";
import { TopPerformersTable } from "./components/dashboard/topperformers";

export default function Home() {
  return (
    <main className="p-5">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <h1 className="ml-8">Dashboards</h1>
        <div className="flex flex-col w-full">
          <div className="flex flex-row p-5 space-x-5">
            <Areachart />
            <PieChar />
          </div>
          <div className="flex flex-row p-5 space-x-5">
            <BarChartComponent />
            <TopPerformersTable />
          </div>
        </div>
      </ThemeProvider>
    </main>
  );
}
