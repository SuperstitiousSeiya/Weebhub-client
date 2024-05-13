"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Player } from "../video/player";
import { AnimeInfo } from "./AnimeInfo";
import { Play } from "lucide-react";

interface AnimeWatchProps {
  source: string;
  animeInfo: AnimeInfo;
  currentEpisode: string;
}

const AnimeWatch = ({ source, animeInfo, currentEpisode }: AnimeWatchProps) => {
  const pageSize = 20;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // Calculate the current page based on the index of the current episode
    if (animeInfo.episodes) {
      const episodeIndex = animeInfo.episodes.findIndex(
        (episode) => episode.number.toString() === currentEpisode
      );
      if (episodeIndex !== -1) {
        const page = Math.floor(episodeIndex / pageSize) + 1;
        setCurrentPage(page);
      }
    }
  }, [animeInfo, currentEpisode]);

  const totalPages = Math.ceil(animeInfo.episodes?.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, animeInfo.episodes?.length);
  const currentEpisodes = animeInfo.episodes?.slice(startIndex, endIndex);
  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };
  return (
    <div className=" flex items-center justify-center w-full flex-col">
      <div className="bg-secondary w-full px-6 py-4 mb-4 rounded-md hover:bg-white/40 transition-colors">
        <Link
          href={`/anime/info/${animeInfo.id}`}
          className="text-lg text-center font-bold "
        >
          {animeInfo.title} - Episode {currentEpisode}
        </Link>
      </div>
      <Player
        className="max-w-[50rem] mb-10"
        src={source}
        image={animeInfo.image}
      />

      <ul className="w-full flex flex-col gap-2 mb-4">
        <h1 className="text-3xl font-bold mb-4">Episodes:</h1>
        <div className="button-container-episodes gap-4">
          {currentEpisodes.map((episode, index) => (
            <Link
              key={index}
              href={`/anime/watch/${animeInfo.id}/${episode.number}`}
              className={`w-full hover:bg-secondary transition-color px-6 rounded-md py-4 bg-primary-foreground flex gap-4 ${
                currentEpisode == episode.number.toString()
                  ? "bg-secondary"
                  : ""
              }`}
            >
              <p> Episode {episode.number} </p>
              {currentEpisode == episode.number.toString() ? (
                <h1 className="flex gap-2">
                 <Play></Play>
                </h1>
              ) : (
                ""
              )}
            </Link>
          ))}
        </div>
      </ul>

      {totalPages > 1 && (
        <div className="flex gap-4 flex-wrap justify-center">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`mx-1 px-2 py-1 rounded-md w-[10rem] hover:opacity-80 transition-opacity ${
                currentPage === index + 1
                  ? "bg-gray-200 text-gray-700 cursor-default"
                  : " bg-secondary text-white"
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index * pageSize + 1}-
              {Math.min((index + 1) * pageSize, animeInfo.episodes?.length)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default AnimeWatch;
