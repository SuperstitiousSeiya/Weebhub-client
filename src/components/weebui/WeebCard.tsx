"use client";

import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Info, Play } from "lucide-react";

export type Anime = {
  id: string;
  image: string;
  releaseDate: string;
  title: string;
  url: string;
};

const WeebCard = ({ id, image, releaseDate, title, url }: Anime) => {
  // const handleRating = (rate: number) => {
  //   setRatingValue(rate);
  // };

  return (
    <div className="flex flex-col gap-5 min-w-[12rem] flex-1 grow-0 overflow-hidden hover:scale-105 transition-all">
      <div className="flex flex-col gap-4">
        <Link
          href={`anime/info/${id}`}
          className="img-container relative aspect-[9/12]  overflow-hidden rounded-md"
        >
          <Image
            width={500}
            height={500}
            src={image}
            className="w-full h-full object-cover"
            alt={id}
          />

          <h3 className=" z-50 absolute -left-1 bottom-8 bg-red-800 px-2 py-1 rounded-md text-sm">
            MANHWA
          </h3>
        </Link>

        <div className="content flex flex-col gap-2">
          <Link href={`anime/info/${id}`} className="h-16 overflow-hidden">
            <h2 className="font-bold text-lg">{title}</h2>
          </Link>

          <div className="flex justify-between">
            <Link href={`anime/watch/${id}/1`}>
              <Button variant={"outline"} className="font-semibold flex gap-2">
                Play <Play></Play>
              </Button>
            </Link>
            <Link href={`anime/info/${id}`}>
              <Button variant={"outline"} className="font-semibold flex gap-2">
                Info <Info></Info>
              </Button>
            </Link>
          </div>

          <div>
            {/* <Rating
                transition
                initialValue={ratingValue}
                size={25}
                allowFraction={true}
                onClick={handleRating}
                showTooltip
                tooltipClassName="hidden"
              /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeebCard;
