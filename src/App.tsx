import { useState } from "react";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import Sidebar from "./components/Sidebar";
import { products } from "./data";

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="mx-auto max-w-5xl pb-10 md:pb-0" role="main">
      <Header openSidebar={() => setIsSidebarOpen(true)} />
      {isSidebarOpen && (
        <Sidebar closeSidebar={() => setIsSidebarOpen(false)} />
      )}
      <main
        className="flex justify-center items-center min-h-screen  md:px-12 md:py-24"
        aria-labelledby="main-content"
      >
        <h1 id="main-content" className="sr-only">
          Product Overview
        </h1>
        <ProductCard products={products} />
      </main>
    </div>
  );
}
