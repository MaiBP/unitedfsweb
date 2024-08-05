
import ProductCard from "./ProductCard";

const ProductList = async () => {
 

  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5">
      <h1 className="flex items-center text-5xl font-extrabold dark:text-white">
        <span className="bg-blue-100 text-blue-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">
          🎟️ Save you place!
        </span>
      </h1>

      {/* <p className="text-heading1-bold">Get your ticket!</p> */}

      <div className="flex flex-wrap justify-center gap-16">
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductList;

