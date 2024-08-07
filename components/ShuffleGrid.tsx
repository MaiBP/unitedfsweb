// ShuffleGrid.tsx
"use client";

import React, { useRef, useState, RefObject, useEffect } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface CardProps {
  containerRef: RefObject<HTMLDivElement>;
  src: string;
  alt: string;
  top: string;
  left: string;
  rotate: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  containerRef,
  src,
  alt,
  top,
  left,
  rotate,
  className,
}) => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");

    let maxZIndex = -Infinity;

    els.forEach((el) => {
      let zIndex = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index")
      );

      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    setZIndex(maxZIndex + 1);
  };

  return (
    <motion.img
      onMouseDown={updateZIndex}
      style={{
        top,
        left,
        rotate,
        zIndex,
      }}
      className={twMerge(
        "drag-elements absolute w-48 bg-neutral-200 p-1 pb-4",
        className
      )}
      src={src}
      alt={alt}
      drag
      dragConstraints={containerRef}
      dragElastic={0.65}
    />
  );
};

const ShuffleGrid = ({
  aboutus,
}: {
  aboutus: { id: number; imageSrc: string }[];
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="absolute inset-0 z-10" ref={containerRef}>
      {aboutus.map((image) => (
        <Card
          key={image.id}
          containerRef={containerRef}
          src={image.imageSrc}
          alt={`Image ${image.id}`}
          rotate={`${(Math.random() - 0.5) * 20}deg`}
          top={`${Math.random() * 70 + 10}%`}
          left={`${Math.random() * 70 + 10}%`}
          className="w-36 md:w-56"
        />
      ))}
    </div>
  );
};

export default ShuffleGrid;
