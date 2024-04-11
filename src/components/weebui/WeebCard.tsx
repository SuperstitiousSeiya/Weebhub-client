"use client";

import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import Image from 'next/image'

const WeebCard = () => {
  const [ratingValue, setRatingValue] = useState(0);

  const handleRating = (rate: number) => {
    setRatingValue(rate);
  };

  return (
    <div className="flex flex-col gap-5 min-w-[10rem] w-1/4  grow-1 shrink-1 overflow-hidden">
      <div className="img-container relative h-[100%] w-full  overflow-hidden rounded-md">
        
        <img src="https://gogocdn.net/cover/kimetsu-no-yaiba.png" className="w-full object-fit" alt="" />
        
        <h3 className=" z-50 absolute -left-1 bottom-8 bg-red-800 px-2 py-1 rounded-md text-sm">MANHWA</h3>
      </div>
      <div className="content flex flex-col gap-2">
        <h2 className="font-bold text-lg">The Heavenly Demon Can't Live a Normal Life</h2>
        <h3 className="font-light text-gray-400">Chapter 117-[S2 END]</h3>
        <div>
          <Rating transition initialValue={ratingValue} size={25} allowFraction={true} onClick={handleRating} showTooltip tooltipClassName="hidden"/>
        </div>
      </div>
    </div>
  );
};

export default WeebCard;
