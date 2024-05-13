import SkeletonAnimeInfo from "@/components/anime/Skeleton/SkeletonAnimeInfo";
import React from "react";

const loading = () => {
  return (
    <div className="container">
      <SkeletonAnimeInfo></SkeletonAnimeInfo>
    </div>
  );
};

export default loading;
