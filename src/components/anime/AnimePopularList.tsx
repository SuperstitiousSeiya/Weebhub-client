import { useAnime } from "@/lib/hooks/useAnime";
import React from "react";
import WeebCard from "../weebui/WeebCard";

const AnimePopularList = async () => {
  const { getPopular } = useAnime();

  const popularAnime = await getPopular();

  return (
    <>
      {popularAnime?.map((anime: any, index: any) => (
        <WeebCard key={index} {...anime}></WeebCard>
      ))}
    </>
  );
};

export default AnimePopularList;
