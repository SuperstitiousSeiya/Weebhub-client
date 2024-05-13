
import Link from "next/link";
import React from "react";
import { Player } from "../video/player";
import { AnimeInfo } from "./AnimeInfo";
import { Play } from "lucide-react";


interface AnimeWatchProps {
    source: string
    animeInfo: AnimeInfo
    currentEpisode: string
}


const AnimeWatch = ({source, animeInfo, currentEpisode}: AnimeWatchProps) => {

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
      <Player className="max-w-[50rem] mb-10" src={source} image={animeInfo.image} />

      <ul className="w-full flex flex-col gap-2">
        <h1 className="text-3xl font-bold mb-4">Episodes:</h1>
        {animeInfo.episodes?.map((episode, index) => (
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
                Playing <Play></Play>
              </h1>
            ) : (
              ""
            )}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default AnimeWatch;
