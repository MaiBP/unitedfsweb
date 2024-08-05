"use client";

import EventCategories from "@/components/EventCategories";
import ProductList from "@/components/ProductList";
import ShuffleHero from "@/components/ShuffleHero";

export default function Home() {
  return (
    <>
      <ShuffleHero />
      <EventCategories />
      <div id="product-list">
        <ProductList />
      </div>
    </>
  );
}

export const dynamic = "force-dynamic";

// import EventCategories from "@/components/EventCategories";
// import ProductList from "@/components/ProductList";
// import Image from "next/image";

// export default function Home() {
//   return (
//     <>
//       <div className="relative h-screen text-white overflow-hidden">
//         <div className="absolute inset-0">
//           <Image
//             src="/banner3.png"
//             alt="banner"
//             layout="fill"
//             objectFit="cover"
//             className="object-cover object-center w-full h-full"
//           />
//           <div className="absolute inset-0 bg-black opacity-50"></div>
//         </div>
//         <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
//           <h1 className="text-5xl font-bold leading-tight mb-4">
//             Welcome to United Football Scouting
//           </h1>
//           <p className="text-lg text-gray-300 mb-8">
//             Discover our exciting events and programs that await you.
//           </p>
//           <a
//             href="#product-list"
//             className="bg-gold-500 text-white hover:bg-blue-900 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
//           >
//             Save your place!
//           </a>
//         </div>
//       </div>
//       <EventCategories />
//       <div id="product-list">
//         <ProductList />
//       </div>
//     </>
//   );
// }

// export const dynamic = "force-dynamic";
