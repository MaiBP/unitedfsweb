import ProductCard from "@/components/ProductCard";
// import { getCollectionDetails } from "@/lib/actions/actions";
import Image from "next/image";
import React from "react";

const SectionDetails = () => {

  return (
    <div className="px-10 py-5 flex flex-col items-center gap-8">
      <Image
       src="collection"
        width={1500}
        height={1000}
        alt="collection"
        className="w-full h-[400px] object-cover rounded-xl"
      />
      <p className="text-heading3-bold text-grey-2">
        Titulo
      </p>
      <p className="text-body-normal text-grey-2 text-center max-w-[900px]">
        Descripcion
        </p>
      <div className="flex flex-wrap gap-16 justify-center">
           <ProductCard  />
        {/* {collectionDetails.products.map((product: ProductType) => (
          <ProductCard key={product._id} product={product} />
        ))} */}
      </div>
    </div>
   
  );
};

export default SectionDetails;

{/* export const dynamic = "force-dynamic"; */}
