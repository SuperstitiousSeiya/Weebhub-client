"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Player } from "@/components/video/player";
import { getAnimeInfo, getWatchAnime } from "@/lib/api/api";
import { stat } from "fs";
import { LoaderIcon, Play } from "lucide-react";
import Link from "next/link";
import { title } from "process";
import React, { useEffect, useState } from "react";

type Props = {
  params: { animeId: string; episodeId: string };
};

interface Episode {
  id: string;
  number: number;
  url: string;
}

type Status = "loading" | "error" | "success";

const page = ({ params }: Props) => {
  const [source, setSource] = useState<any | null>();
  const [status, setStatus] = useState<Status>("loading");
  const [episodes, setepisodes] = useState<Episode[] | null>(null);
  const [animeTitle, setAnimeTitle] = useState("string");
  useEffect(() => {
    fetchWatchData();
    return () => {};
  }, []);


  const fetchWatchData = async () => {
    const data = await getWatchAnime(params.animeId, params.episodeId);
    if (data.message) {
      setStatus("error");
      return;
    }
    const defaultSource = data.sources.find(
      (source: any) => source.quality === "default"
    );

    const episodeData = await getAnimeInfo(params.animeId);

    setAnimeTitle(episodeData.title);
    setepisodes(episodeData.episodes);
    setSource(defaultSource.url);
    setStatus("success");
  };

  return (
    <div className="container text-white mx-auto p-4">
      {status === "success" && (
        <div className=" flex items-center justify-center w-full flex-col">
          <div className="bg-secondary w-full px-6 py-4 mb-4 rounded-md hover:bg-white/40 transition-colors">
            <Link
              href={`/anime/info/${params.animeId}`}
              className="text-lg text-center font-bold "
            >
              {animeTitle} - Episode {params.episodeId}
            </Link>
          </div>
          <Player className="max-w-[50rem] mb-10" src={source} />

          <ul className="w-full flex flex-col gap-2">
            <h1 className="text-3xl font-bold mb-4">Episodes:</h1>
            {episodes?.map((episode, index) => (
              <Link
              key={index}
                href={`/anime/watch/${params.animeId}/${episode.number}`}
                className={`w-full hover:bg-secondary transition-color px-6 rounded-md py-4 bg-primary-foreground flex gap-4 ${
                  params.episodeId == episode.number.toString()
                    ? "bg-secondary"
                    : ""
                }`}
              >
                <p> Episode {episode.number} </p>
                {params.episodeId == episode.number.toString() ? (
                  <h1 className="flex gap-2">
                    Playing <Play></Play>
                  </h1>
                ) : (
                  ""
                )}
              </Link>
            ))}
          </ul>
        </div>
      )}
      {status === "loading" && (
        <div className="flex flex-col items-center">
          <Skeleton className="w-full h-8 mb-6"></Skeleton>
          <Skeleton className="w-3/4 h-[30rem] mb-6"></Skeleton>
          <div className="w-full">
          <Skeleton className="w-16 h-8 mb-6"></Skeleton>

          <Skeleton className="w-full h-12 mb-3"></Skeleton>
          <Skeleton className="w-full h-12 mb-3"></Skeleton>
          <Skeleton className="w-full h-12 mb-3"></Skeleton>
          <Skeleton className="w-full h-12 mb-3"></Skeleton>
          <Skeleton className="w-full h-12 mb-3"></Skeleton>
          <Skeleton className="w-full h-12 mb-3"></Skeleton>

          </div>
        </div>
      )}
    </div>
  );
};

export default page;
