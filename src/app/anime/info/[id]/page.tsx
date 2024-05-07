"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AnimeInfoComponent, { AnimeInfo } from "@/components/anime/AnimeInfo";
import { getAnimeInfo } from "@/lib/api/api";

const Page = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [animeInfo, setAnimeInfo] = useState<AnimeInfo | null>(null);



  
  useEffect(() => {
    fetchAnimeInfo();
  }, []);

  useEffect(() => {
    console.log(animeInfo);
  }, [animeInfo]);

  async function fetchAnimeInfo() {
    setLoading(true);
    try {
      const result = await getAnimeInfo(params.id);

      if (result.message) {
        console.log("asdsa");
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
    <div>
      {loading && <div>Loading...</div>}

      {error && <div>Error fetching anime info</div>}

      {animeInfo?.id && <AnimeInfoComponent {...animeInfo} />}
    </div>
  );
};

export default Page;
