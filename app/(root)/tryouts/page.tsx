"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Tryouts from "@/components/Tryouts";
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
          src="/images/eventCategories/Tryouts.jpg"
          alt="banner"
          layout="fill"
          objectFit="cover"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-grow flex flex-col md:flex-row items-center mt-8 px-4">
        <div className="w-full md:w-1/2 px-4 flex flex-col items-center gap-10 py-8">
          <Tryouts />
        </div>

        <motion.div
          className="w-full md:w-1/2 px-4"
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
        >
          <p className="text-left text-grey-2 mt-4">
            United FS also hosts tryouts each year for soccer-loving athletes.
            These tryouts are a great opportunity to show off your skills and
            compete for a spot in top-special prize. With expert coaches
            providing valuable tips and feedback, you'll have the chance to
            improve your game. Join us for a fantastic experience where you can
            meet new friends, learn new techniques, and take your soccer journey
            to the next level!
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
