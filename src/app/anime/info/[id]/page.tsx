"use client";
import React, { useState, useEffect } from "react";
import AnimeInfoComponent, { AnimeInfo } from "@/components/anime/AnimeInfo";
import { getAnimeInfo } from "@/lib/api/api";
import { Skeleton } from "@/components/ui/skeleton";

const Page = ({ params }: { params: { id: string } }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [animeInfo, setAnimeInfo] = useState<AnimeInfo | null>(null);

  useEffect(() => {
    fetchAnimeInfo();
  }, []);

 

  async function fetchAnimeInfo() {
    setLoading(true);
    try {
      const result = await getAnimeInfo(params.id);

      if (result?.message) {
        setError(true);
        setLoading(false);
        return;
      }

      setAnimeInfo(result);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  }

  return (
    <div className="container py-4">
      {loading && (
        <>
          <div className="flex gap-4 mb-8">
            <Skeleton className="h-[30rem] w-[20rem]"></Skeleton>
            <div className="w-full">
              <ul className="flex gap-2 mb-4">
                <Skeleton className="px-8 py-4"></Skeleton>
                <Skeleton className="px-8 py-4"></Skeleton>
                <Skeleton className="px-8 py-4"></Skeleton>
                <Skeleton className="px-8 py-4"></Skeleton>
              </ul>

              <Skeleton className="w-full h-10 mb-4"></Skeleton>
              <Skeleton className="w-full h-4 mb-4"></Skeleton>
              <Skeleton className="w-full h-4 mb-4"></Skeleton>

              <Skeleton className="w-full h-4 mb-4"></Skeleton>

              <Skeleton className="w-full h-4 mb-4"></Skeleton>

              <Skeleton className="w-full h-4 mb-4"></Skeleton>

              <Skeleton className="w-full h-4 mb-4"></Skeleton>
            </div>
          </div>
          <div>
            <Skeleton className="w-[10rem] h-10 mb-4"></Skeleton>
            <Skeleton className=" h-6 mb-4 w-full"></Skeleton>
            <Skeleton className=" h-6 mb-4 w-full"></Skeleton>

            <Skeleton className=" h-6 mb-4 w-full"></Skeleton>

            <Skeleton className=" h-6 mb-4 w-full"></Skeleton>

            <Skeleton className=" h-6 mb-4 w-full"></Skeleton>
            <Skeleton className=" h-6 mb-4 w-full"></Skeleton>

            <Skeleton className=" h-6 mb-4 w-full"></Skeleton>
          </div>
        </>
      )}

      {error && <div>Error fetching anime or doesn&apos;t exist</div>}

      {animeInfo?.id && <AnimeInfoComponent {...animeInfo} />}
    </div>
  );
};

export default Page;
