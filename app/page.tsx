import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard/ProductCard";

export default function Home() {
  return (
    <main className="p-5">
      <h1 className="">Hello World!</h1>
      <ProductCard />
    </main>
  );
}
