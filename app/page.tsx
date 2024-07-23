import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard/ProductCard";
import { Areachart } from "./components/dashboard/areachart";
import { PieChar } from "./components/dashboard/piechart";
import { ThemeProvider } from "@/components/theme-provider";

export default function Home() {
  return (
    <main className="p-5">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <h1 className="">Dashboards</h1>
        <div className="flex p-5 space-x-5">
          <Areachart />
          <PieChar />
        </div>
      </ThemeProvider>
    </main>
  );
}
