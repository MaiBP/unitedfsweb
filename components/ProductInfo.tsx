"use client";
import { Product } from "@/app/types";
import { useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa";

interface ProductInfoProps {
  product: Product;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const [isEventPast, setIsEventPast] = useState(false);

  useEffect(() => {
    const checkIfEventPast = () => {
      const currentDate = new Date();
      const endDate = new Date(product.endDate);
      return currentDate > endDate;
    };
    setIsEventPast(checkIfEventPast());
  }, [product.endDate]);

  const handleButtonClick = () => {
    if (!isEventPast) {
      window.open(product.paymentLink, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="p-5 md:w-1/2 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {product.title}
        </p>
      </div>

      <div className="flex gap-2 items-center">
        <span role="img" aria-label="Location">
          📍
        </span>
        <p className="text-base-bold">{product.location}</p>
      </div>
      <div className="flex gap-2 items-center">
        <span role="img" aria-label="Date">
          📅
        </span>
        <p className="text-base-bold">{product.date}</p>
        {isEventPast && (
          <span className="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-500">
            <svg
              className="w-2.5 h-2.5 me-1.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
            </svg>
            Inscriptions ended
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-base-medium text-grey-2"> ⚽ Details:</p>
        <p className="text-small-medium text-gray-700 dark:text-gray-400">
          {product.description}
        </p>
      </div>
      <div className="items-center px-3 py-2 text-center">
        {isEventPast ? (
          <a
            href="https://www.instagram.com/unitedfootballscouting?igsh=MWU2bjJsMmhwbWFlOQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400"
          >
            <FaInstagram className="w-2.5 h-2.5 me-1.5" />
            See our past event
          </a>
        ) : (
          <button
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={handleButtonClick}
          >
            Save my place!
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductInfo;
