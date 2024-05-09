
// @ts-ignore

"use client"

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
import {getTopAiring } from "@/lib/api/api";
import DynamicText from "../weebui/Text/DynamicText";
import Link from "next/link";
import SoleDescription from "../weebui/Text/SoleDescription";
import { SkeletonCard } from "../weebui/Skeletons/SkeletonCard";
import { Badge } from "../ui/badge";

type Props = {
  className?: string;
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

export function HomeCarousel({ className }: Props) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(1);
  const [count, setCount] = useState(7);
  const [topAiring, setTopAiring] = useState<Anime[]>();
  const [loading, setloading] = useState(true);
  const plugin = React.useRef(Autoplay({ delay: 10000 }));




  useEffect(() => {
    fetchTopAiring();
  }, []);

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



  async function fetchTopAiring() {
    try {
      const data = await getTopAiring();
      setTopAiring(data.results);
      setloading(false);
    } catch (error) {
      console.log("asds")
    }

  }

  return (
    <div className={`${className}`}>
      <Carousel
        plugins={[plugin.current]}
        setApi={setApi}
        className="max-h-[33rem]"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.play}
      >
        {loading ? (
          <div className="">
             <SkeletonCard /> 
          </div>
         
        ) : (
          <>
            {" "}
            <CarouselContent className="h-full">
              {topAiring?.map((info, index) => (
                <CarouselItem
                  key={index}
                  className="relative min-h-[33rem]  h-full"
                >
                  <Card className=" relative overflow-y-hidden">
                    <CardContent className="flex  overflow-y-auto min-h-[33rem]  gap-20 p-6">
                      {/* left  */}
                      <div className="left basis-3/4 max-lg:basis-full flex flex-col gap-2 justify-between z-50 text-dynamic">
                        <div>
                          <div className="genres flex gap-2 flex-wrap mb-2">
                            {info.genres.map((genre, index) => (
                              <Badge key={index} className="bg-green-500 px-2 y-1 rounded-md">
                                {genre}
                              </Badge>
                            ))}
                          </div>

                          {/* Title */}
                          <DynamicText className="max-lg:hidden mb-4">
                            <p>{info.title}</p>
                          </DynamicText>
                          <h1 className="text-5xl mb-4 hidden max-lg:block">
                            {info.title}
                          </h1>
                          <div className="description">
                            <SoleDescription id={info.id} />
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
                            <Button
                              variant={"outline"}
                              className="px-3 flex gap-2"
                            >
                              {" "}
                              <Info></Info> Details
                            </Button>
                          </Link>
                          <Button
                            variant={"outline"}
                            className="px-3 flex gap-2"
                          >
                            <BookmarkPlus /> Save
                          </Button>
                        </div>
                      </div>

                      <div className="right  justify-end max-lg:hidden px-20">
                        <img
                          src={info.image}
                          alt={info.id}
                          className="w-full aspect-[9/16] object-cover max-h-[30rem]"
                        />
                      </div>
                    </CardContent>
                  </Card>
                  <img
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
                      current == index + 1
                        ? "bg-primary"
                        : " bg-primary-foreground"
                    }`}
                    onClick={() => handleClick(index + 1)}
                  ></div>
                )
              )}
            </div>
          </>
        )}
      </Carousel>
    </div>
  );
}
