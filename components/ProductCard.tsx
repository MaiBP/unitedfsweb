"use client";

import Link from "next/link";
import Image from "next/image";
import { Product } from "@/app/types";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div
      key={product.id}
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-6"
    >
      <Link href={`/products/${product.id}`}>
        <Image
          src={product.imageSrc}
          alt={product.title}
          width={400}
          height={300}
          className="rounded-t-lg object-cover w-full"
        />
      </Link>
      <div className="p-5">
        <Link href={`/products/${product.id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {product.title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          📌 {product.description}
        </p>
        <Link href={`/products/${product.id}`}>
          <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-900 rounded-lg hover:bg-gold-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-800 dark:hover:bg-gold-500 dark:focus:ring-blue-800">
            Details
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
