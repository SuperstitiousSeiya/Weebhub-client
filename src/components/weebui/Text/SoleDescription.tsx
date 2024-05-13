"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useAnime } from "@/lib/hooks/useAnime";
import React, { useEffect, useState } from "react";

const SoleDescription = ({
  description,
}: {
  description?: string | undefined | null;
}) => {
  return (
    <>
    
        {/* <div className="gap-2 flex flex-col">
          <Skeleton className="w-full h-[1rem]"></Skeleton>
          <Skeleton className="w-3/4 h-[1rem]"></Skeleton>
          <Skeleton className="w-1/2 h-[1rem]"></Skeleton>
        </div>
    */}
        <div className="max-h-[20rem] overflow-hidden">
          <p className="text-sm">{description}</p>
        </div>
      
    </>
  );
};

export default SoleDescription;
