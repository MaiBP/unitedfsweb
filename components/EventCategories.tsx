"use client";

import Image from "next/image";
import Link from "next/link";
import { events } from "@/app/data";

const EventCategories = () => {
  return (
    <div className=" bg-gray-100 py-8 px-5">
      <div className="flex flex-col items-center gap-10">
        <div className="flex flex-wrap items-center justify-center gap-8">
          {events.map((event) => (
            <Link href={`/${event.link}`} key={event.id}>
              <Image
                src={event.imageSrc}
                alt={event.title}
                width={350}
                height={200}
                className="rounded-lg cursor-pointer"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventCategories;
