"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "../ui/button";
import { BookmarkPlus, Info, Play } from "lucide-react";
import { loadImg } from "@/assets/images";
import { useEffect, useState } from "react";

type Props = {
  className?: string;
};






export function HomeCarousel({ className }: Props) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(7);
  const [list, setlist] = useState();

  
 useEffect(() => {});

 useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleClick = (index: number) => {
    api?.scrollTo(index - 1);
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
  };
  const plugin = React.useRef(Autoplay({ delay: 10000 }));

  return (
    <div className={`${className}`}>
      <Carousel
        plugins={[plugin.current]}
        setApi={setApi}
        // className="max-w-[90vw]"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.play}
      >
        <CarouselContent>
          {Array.from({ length: count }).map((_, index) => (
            <CarouselItem key={index} className="relative">
              <Card className=" relative">
                <CardContent className="flex gap-20 p-6">
                  {/* left  */}
                  <div className="left basis-1/2 max-lg:basis-full flex flex-col gap-2 justify-between z-50">
                    <div>
                      <div className="genres flex gap-2">
                        <p className="bg-red-500 px-2 y-1 rounded-md">
                          Genre 1
                        </p>
                        <p className="bg-green-600  px-2 y-1 rounded-md">
                          Genre 1
                        </p>
                      </div>

                      {/* Title */}
                      <h1 className="text-[9rem] max-lg:text-[5rem]">Asumi</h1>

                      <p className="description">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Illo fuga tempora dolorem reprehenderit. Veniam,
                        nisi. Perferendis vero cumque, harum aut iste asperiores
                        doloremque perspiciatis! Reiciendis quam culpa doloribus
                        neque ipsam.
                      </p>
                    </div>
                    <div className="buttons mt-2 flex gap-4 justify-self-end">
                      <Button variant={"secondary"} className="px-3 flex gap-2">
                        <Play></Play> Play
                      </Button>
                      <Button variant={"outline"} className="px-3 flex gap-2">
                        {" "}
                        <Info></Info> Details
                      </Button>
                      <Button variant={"outline"} className="px-3 flex gap-2">
                        <BookmarkPlus /> Save
                      </Button>
                    </div>
                  </div>

                  <div className="right flex basis-1/2 justify-end max-lg:hidden px-20">
                    <img
                      src="https://gogocdn.net/cover/kimetsu-no-yaiba.png"
                      alt=""
                      className="w-full object-cover max-h-[30rem]"
                    />
                  </div>
                </CardContent>
              </Card>
              <img
                src="https://gogocdn.net/cover/kimetsu-no-yaiba.png"
                alt=""
                className="h-full w-full top-0 opacity-50 bottom-0 right-0 left-0 absolute object-cover lg:hidden"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}

        <div className="py-2 text-center text-sm text-muted-foreground justify-center flex absolute z-20 bottom-0 right-5">
          {Array.from({ length: count }).map((_, index) => (
            <div
              key={index}
              className={`mx-1 cursor-pointer size-[0.7rem] rounded-full ${
                current == index + 1 ? "bg-primary" : " bg-primary-foreground"
              }`}
              onClick={() => handleClick(index + 1)}
            ></div>
          ))}
        </div>
      </Carousel>
    </div>
  );
}
