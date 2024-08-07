"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Camps from "@/components/Camps";
import { motion } from "framer-motion";

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
};
const Page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative w-full h-64 md:h-80 lg:h-96">
        <Image
          src="/images/categories/camps.png"
          alt="banner"
          layout="fill"
          objectFit="cover"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-grow flex flex-col md:flex-row items-center mt-8 px-4">
        <div className="w-full md:w-1/2 px-4 flex flex-col items-center gap-10 py-8">
          <Camps />
        </div>

        <motion.div
          className="w-full md:w-1/2 px-4"
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
        >
          <p className="text-left text-grey-2 mt-4">
            United FS also offers amazing soccer camps each year for athletes
            who are passionate about the game. These camps are a fantastic way
            to learn new skills, get professional coaching, and have a blast
            playing soccer with fellow enthusiasts.Participants enjoy fun
            drills, friendly matches, and the opportunity to improve their game
            in a supportive environment. Plus, there's always a chance to earn
            special rewards and recognition. Join our camps for an unforgettable
            soccer experience filled with learning, fun, and friendship!
          </p>
        </motion.div>
      </div>
      <div className="flex justify-center py-8">
        <Link
          href="/"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-900 rounded-lg hover:bg-gold-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-800 dark:hover:bg-gold-500 dark:focus:ring-blue-800"
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default Page;
