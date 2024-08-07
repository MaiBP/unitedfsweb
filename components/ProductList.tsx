"use client";

import ProductCard from "./ProductCard";
import { products } from "@/app/data"; // Ensure this import is correct

const ProductList = () => {
  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5">
      <h1 className="flex items-center text-5xl font-extrabold dark:text-white">
        <span className="bg-blue-100 text-blue-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">
          🎟️ Save your place!
        </span>
      </h1>

      <div className="flex flex-wrap justify-center gap-16">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
