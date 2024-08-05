"use client"

import React from "react";
import { tryouts } from "@/app/data";
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


const Tryouts = () => {
 
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
        {tryouts.map((tryout) => (
          <CarouselItem key={tryout.id}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-3">
                  <Image
                    src={tryout.imageSrc}
                    alt={`Tryouts ${tryout.id}`}
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

export default Tryouts