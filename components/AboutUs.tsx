"use client";

import React from "react";
import { aboutus } from "@/app/data";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";


const AboutUs = () => {
     const plugin = React.useRef(
       Autoplay({ delay: 2000, stopOnInteraction: true })
     );

     return (
       <Carousel
         opts={{
           align: "start",
         }}
         className="w-full max-w-sm"
       >
         <CarouselContent>
           {aboutus.map((about) => (
             <CarouselItem key={about.id} className="md:basis-1/2 lg:basis-1/2">
               <div className="p-1">
                 <Card>
                   <CardContent className="flex aspect-square items-center justify-center p-3">
                     <Image
                       src={about.imageSrc}
                       alt={`about${about.id}`}
                       width={350}
                       height={200}
                       className="rounded-lg"
                     />
                   </CardContent>
                 </Card>
               </div>
             </CarouselItem>
           ))}
         </CarouselContent>
         <CarouselPrevious />
         <CarouselNext />
       </Carousel>
     );
};

export default AboutUs;
