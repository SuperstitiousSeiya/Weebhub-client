// @ts-ignore

"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "../ui/button";
import { BookmarkPlus, Info, Play } from "lucide-react";
import { useEffect, useState } from "react";
import DynamicText from "../weebui/Text/DynamicText";
import Link from "next/link";
import SoleDescription from "../weebui/Text/SoleDescription";
import { SkeletonCard } from "../weebui/Skeletons/SkeletonCard";
import { Badge } from "../ui/badge";
import Image from "next/image";

type Props = {
  className?: string;
  topAiring: Anime[];
  animeId?: string[] | undefined;
};

interface Anime {
  id: string;
  title: string;
  image: string;
  url: string;
  genres: string[];
  episodeId: string;
  episodeNumber: number;
}

export function HomeCarousel({ className, topAiring, animeId }: Props) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(1);
  const [count, setCount] = useState(7);
  const [loading, setloading] = useState(true);
  const plugin = React.useRef(Autoplay({ delay: 10000 }));

  // useEffect(() => {
  //   if(topAiring){
  //     setloading(false)
  //   }
  // }, [topAiring]);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    // setCurrent(api.selectedScrollSnap() + 1);

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

  return (
    <div className={`${className}`}>
      {" "}
      <Carousel
        plugins={[plugin.current]}
        setApi={setApi}
        className="border-2 rounded-md "
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.play}
      >
        <CarouselContent className="h-full">
          {topAiring?.map((info, index) => (
            <CarouselItem key={index} className="relative min-h-[33rem] h-full">
              <Card className=" relative overflow-y-hidden w-full border-none">
                <CardContent className="flex  overflow-y-auto min-h-[33rem]  gap-20 p-6">
                  {/* left  */}
                  <div className="left basis-3/4 max-lg:basis-full flex flex-col gap-2 justify-between z-50 text-dynamic">
                    <div>
                      <div className="genres flex gap-2 flex-wrap mb-2">
                        {info.genres.map((genre, index) => (
                          <Badge
                            key={index}
                            className="bg-green-500 px-2 y-1 rounded-md"
                          >
                            {genre}
                          </Badge>
                        ))}
                      </div>

                      {/* Title */}
                      <DynamicText className="max-lg:hidden mb-4">
                        <p>{info.title}</p>
                      </DynamicText>
                      <h1 className="text-5xl mb-4 hidden max-lg:block  max-h-[15rem] overflow-hidden">
                        {info.title}
                      </h1>
                      <div className="description">
                        <SoleDescription
                          description={animeId?.[index] as string}
                        />
                      </div>
                    </div>
                    <div className="buttons mt-2 flex gap-4 justify-self-end">
                      <Link href={`/anime/watch/${info.id}/1`}>
                        <Button
                          variant={"secondary"}
                          className="px-3 flex gap-2"
                        >
                          <Play></Play> Play
                        </Button>
                      </Link>
                      <Link href={`/anime/info/${info.id}`}>
                        <Button variant={"outline"} className="px-3 flex gap-2">
                          {" "}
                          <Info></Info> Details
                        </Button>
                      </Link>
                      <Button variant={"outline"} className="px-3 flex gap-2">
                        <BookmarkPlus /> Save
                      </Button>
                    </div>
                  </div>

                  <div className="right w-[30rem] height-[80%] justify-end max-lg:hidden ">
                    <Image
                      height={500}
                      width={500}
                      src={info.image}
                      alt={info.id}
                      className="w-full aspect-[9/12] h-full object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
              <Image
                height={500}
                width={500}
                src={info.image}
                alt=""
                className="h-full w-full top-0 opacity-50 bottom-0 right-0 left-0 absolute object-cover lg:hidden"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
      <CarouselNext /> */}
        <div className="py-2 text-center text-sm text-muted-foreground justify-center flex absolute z-20 bottom-0 right-5">
          {Array.from({ length: topAiring?.length as number }).map(
            (_, index) => (
              <div
                key={index}
                className={`mx-1 cursor-pointer size-[0.7rem] rounded-full ${
                  current == index + 1 ? "bg-primary" : " bg-primary-foreground"
                }`}
                onClick={() => handleClick(index + 1)}
              ></div>
            )
          )}
        </div>
      </Carousel>
    </div>
  );
}
