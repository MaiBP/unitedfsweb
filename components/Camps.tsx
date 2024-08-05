"use client"

import React from "react";
import { camps } from "@/app/data";
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


const Camps = () => {

    const plugin = React.useRef(
     Autoplay({ delay: 2000, stopOnInteraction: true })
   );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {camps.map((camp) => (
          <CarouselItem key={camp.id}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-3">
                  <Image
                    src={camp.imageSrc}
                    alt={`Camps ${camp.id}`}
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
  )
}

export default Camps