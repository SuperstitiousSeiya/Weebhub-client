"use client";

import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Play } from "lucide-react";

export type Anime = {
  id: string;
  image: string;
  releaseDate: string;
  title: string;
  url: string;
};

const WeebCard = ({ id, image, releaseDate, title, url }: Anime) => {
  const [ratingValue, setRatingValue] = useState(0);

  const handleRating = (rate: number) => {
    setRatingValue(rate);
  };

  return (
    <div className="flex flex-col gap-5 min-w-[10rem] w-1/4  grow-1 shrink-1 overflow-hidden hover:scale-105 transition-all">
      <div className="flex flex-col gap-4">
        <Link href={`anime/info/${id}`}>
          <div className="img-container relative h-[100%]  overflow-hidden rounded-md">
            <img
              src={image}
              className="w-full  aspect-[9/12] object-cover"
              alt={id}
            />

            <h3 className=" z-50 absolute -left-1 bottom-8 bg-red-800 px-2 py-1 rounded-md text-sm">
              MANHWA
            </h3>
          </div>
        </Link>

        <div className="content flex flex-col gap-2">
          <Link href={`anime/info/${id}`}>
            <h2 className="font-bold text-lg">{title}</h2>
          </Link>

          <Link href={`anime/watch/${id}/1`}>
            <Button className="font-semibold flex gap-2">Play <Play></Play></Button>
          </Link>
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
