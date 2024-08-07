"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Clinics from "@/components/Clinics";
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
          src="/images/categories/clinics.png"
          alt="banner"
          layout="fill"
          objectFit="cover"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-grow flex flex-col md:flex-row items-center mt-8 px-4">
        <div className="w-full md:w-1/2 px-4 flex flex-col items-center gap-10 py-8">
          <Clinics />
        </div>
        <motion.div
          className="w-full md:w-1/2 px-4"
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
        >
          <p className="text-left text-grey-2 mt-4">
            United FS Clinics are annual events designed for passionate soccer
            athletes aiming to enhance their skills and gain recognition. These
            clinics offer participants professional training, expert coaching,
            and the chance to compete for prestigious rewards. Outstanding
            performers have the opportunity to earn a spot to travel, visit
            other soccer academies or clubs, providing invaluable exposure and
            experience. The clinics not only focus on skill development but also
            foster sportsmanship and camaraderie among young athletes, making
            them an enriching experience for all involved.
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
