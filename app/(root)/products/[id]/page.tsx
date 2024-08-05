"use client";

import { useParams } from "next/navigation";
import { products } from "@/app/data";
import ProductInfo from "@/components/ProductInfo";
import { Product } from "@/app/types";
import Gallery from "@/components/Gallery";

const ProductDetails = () => {
  const params = useParams();
  const id = params?.id;

  const product: Product | undefined = products.find(
    (product) => product.id === parseInt(id as string)
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="flex justify-center items-start py-10 px-5">
      <div className="max-w-5xl w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col md:flex-row">
        <Gallery productMedia={product.media} />
        <ProductInfo product={product} />
      </div>
    </div>
  );
};

export default ProductDetails;
