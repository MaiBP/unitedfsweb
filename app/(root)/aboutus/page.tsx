"use client";

import React, { useRef, useState, RefObject } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { aboutus } from "@/app/data";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Page = () => {
  return (
    <section className="relative grid min-h-screen w-full place-content-center overflow-hidden bg-blue-900">
      <div className="absolute inset-0 z-0 flex flex-col items-center md:justify-center">
        <h1 className="text-[15vw] md:text-[12vw] font-black text-gold-500 text-center">
          UNITED FS
        </h1>
        <ShuffleGrid />
      </div>

      <div className="absolute bottom-0 left-0 w-full p-8 bg-white flex flex-col md:flex-row justify-center items-center md:justify-between">
        <div className="w-full md:w-1/2 pr-6 mb-4 md:mb-0">
          <p className="text-gray-700 dark:text-gray-400">
            🌍 Our mission is to unite football players from around the world,
            offering them the opportunity to share their passion for the game,
            learn new skills, and participate in our dynamic football events. At United
            Football Scouting, we are dedicated to motivating players by
            providing them with the unique chance to earn their place in
            training sessions with clubs from different regions.
            <br />
            <br />
            🌟 Our program is designed not only to enhance players' abilities
            but also to broaden their horizons through international
            experiences. Join us and be a part of a global community that
            celebrates football, fosters development, and creates lifelong
            memories.
            <br /> 
            <br />
            ⚽ Together, let's elevate your game to new heights. 🚀
          </p>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <p className="font-medium text-gray-700 mb-2">Follow us!</p>
          <div className="flex gap-4">
            <Link
              href="https://www.instagram.com/unitedfootballscouting/?igsh=MWU2bjJsMmhwbWFlOQ%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                size={24}
                className="text-blue-900 hover:text-gold-500"
              />
            </Link>
            <Link
              href="https://www.facebook.com/unitedfootballscouting"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook
                size={24}
                className="text-blue-900 hover:text-gold-500"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const ShuffleGrid = () => {
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

export default Page;
