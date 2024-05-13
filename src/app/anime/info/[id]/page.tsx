import React from "react";
import AnimeInfoComponent from "@/components/anime/AnimeInfo";

import { useAnime } from "@/lib/hooks/useAnime";


const Page = async ({ params }: { params: { id: string } }) => {
  const { getAnimeInfo } = useAnime();
  const animeInfo = await getAnimeInfo(params.id);

  return (
    <>
      <div className="container py-4">
        <AnimeInfoComponent {...animeInfo} />
      </div>
    </>
  );
};

export default Page;
