import React from "react";
import { useRouter, useParams } from "next/navigation";
import { Button } from "../ui/button";
import { Play } from "lucide-react";
import Link from 'next/link'

export type Episode = {
  id: string;
  number: number;
  url: string;
};

export type AnimeInfo = {
  id: string;
  title: string;
  url: string;
  genres: string[];
  totalEpisodes: number;
  image: string;
  releaseDate: string;
  description: string;
  subOrDub: "sub" | "dub";
  type: string;
  status: string;
  otherName: string;
  episodes: Episode[];
};

const AnimeInfoComponent = ({
  description,
  episodes,
  genres,
  id,
  image,
  otherName,
  releaseDate,
  status,
  subOrDub,
  title,
  totalEpisodes,
  type,
  url,
}: AnimeInfo) => {
  const navigate = useRouter()
  
//   const gotoEpisode = (watchId: number) => {
//     redirect(`watch/${id}/${watchId}`);
//   };

  return (
    <div>
      <div>
        <h2>{title}</h2>
        <img src={image} alt={title} />
        <p>{description}</p>
        <ul>
          {genres.map((genre) => (
            <li key={genre}>{genre}</li>
          ))}
        </ul>
        <p>Total Episodes: {totalEpisodes}</p>
        <p>Release Date: {releaseDate}</p>
        <p>Status: {status}</p>
        <p>Sub or Dub: {subOrDub}</p>
        <p>Type: {type}</p>
        <p>Other Names: {otherName}</p>

        <h2 className="pb-4 text-2xl">Episodes</h2>
        <ul className="flex gap-10 flex-wrap">
          {episodes.map((episode) => (
            <Link href={`/anime/watch/${id}/${episode.number}`}>
              <Button
                className="cursor-pointer flex gap-2 items-center "
                key={episode.number}
              >
                Episode {episode.number} <Play></Play>
              </Button>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AnimeInfoComponent;
