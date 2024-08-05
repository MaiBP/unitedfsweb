"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { squareData, Square } from "@/app/data";

const ShuffleHero = () => {
  return (
    <div className="bg-blue-900">
      <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto bg-blue-900">
        <div>
          <span className="block mb-4 text-xs md:text-sm text-gold-500 font-medium">
            #WeLoveFootball
          </span>
          <h1 className="text-4xl md:text-6xl font-semibold text-white ">
            Unlock your potential.
          </h1>
          <p className="text-base md:text-lg text-white my-4 md:my-6">
            Participate in training sessions, showcase your skills, and be a
            part of a global football community.
          </p>
          <Link href="#product-list">
            <button className="bg-gold-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-gold-500 active:scale-95">
              Save my place!
            </button>
          </Link>
        </div>
        <ShuffleGrid />
      </section>
    </div>
  );
};

const shuffle = (array: Square[]): Square[] => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares}
    </div>
  );
};

export default ShuffleHero;
