"use client";
import AnimeWatcher from "@/components/anime/AnimeWatcher";
import { getWatchAnime } from "@/lib/api/api";
import React, { useEffect, useState } from "react";

type Props = {
  params: { animeId: string; episodeId: string };
};

type Source = {
  isM3u8: boolean;
  quality: string;
  url: string
}

type Status = "loading" | "error" | "success";

const page = ({ params }: Props) => {
  const [sources, setSources] = useState<Source[] | null>();
  const [currentSource, setcurrentSource] = useState<Source | null>();
  const [status, setStatus] = useState<Status>("loading");
  useEffect(() => {
    fetchWatchData();
    return () => {};
  }, []);

  useEffect(() => {
    console.log(sources)
    console.log(currentSource)
  }, [sources, currentSource]);

  const fetchWatchData = async () => {
    const data = await getWatchAnime(params.animeId, params.episodeId);
    if (data.message) {
      setStatus("error");
      return;
    }

    setSources(data.sources)
    setcurrentSource(data.sources[0])
    setStatus("success");
  };

  return (
    <div className="max-w-[50rem] mx-auto">
      <AnimeWatcher video={currentSource?.url as string} />
    </div>
  );
};

export default page;
