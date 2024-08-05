"use client";

import Image from "next/image";
import React, { useState } from "react";

const Gallery = ({ productMedia }: { productMedia: string[] }) => {
  const [mainImage, setMainImage] = useState(productMedia[0]);

  return (
    <div className="flex flex-col gap-3 p-5 md:w-1/2">
      <Image
        src={mainImage}
        width={700}
        height={700}
        alt="product"
        className="w-full h-96 rounded-lg shadow-xl object-cover"
      />
      {/* <div className="flex gap-2 overflow-auto tailwind-scrollbar-hide">
        {productMedia.map((image, index) => (
          <Image
            key={index}
            src={image}
            height={200}
            width={200}
            alt="product"
            className={`w-20 h-20 rounded-lg object-cover cursor-pointer ${
              mainImage === image ? "border-2 border-black" : ""
            }`}
            onClick={() => setMainImage(image)}
          />
        ))}
      </div> */}
    </div>
  );
};

export default Gallery;
