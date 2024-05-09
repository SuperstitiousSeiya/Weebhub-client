"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { getAnimeInfo } from "@/lib/api/api";
import React, { useEffect, useState } from "react";

const SoleDescription = ({ id }: { id: string }) => {
  const [description, setdescription] = useState("");
  const [loading, setloading] = useState(true);

  useEffect(() => {
    fetchAnimeDescription(id);
  }, []);

  async function fetchAnimeDescription(id: string) {
    const data = await getAnimeInfo(id);
    setdescription(data.description);
    setloading(false);
  }

  return (
    <>
      {loading ? (
        <div className="gap-2 flex flex-col">
          <Skeleton className="w-full h-[1rem]"></Skeleton>
          <Skeleton className="w-3/4 h-[1rem]"></Skeleton>
          <Skeleton className="w-1/2 h-[1rem]"></Skeleton>
        </div>
      ) : (
        <div className="max-h-[20rem] overflow-hidden">
          <p className="text-sm">{description}</p>
        </div>
      )}
    </>
  );
};

export default SoleDescription;
