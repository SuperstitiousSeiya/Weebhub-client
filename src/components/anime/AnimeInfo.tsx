"use client";
import React, { useState } from "react";
import { Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "../ui/badge";

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
  const pageSize = 20;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(episodes.length / pageSize);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, episodes.length);

  const currentEpisodes = episodes.slice(startIndex, endIndex);

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  return (
    <div className="">
      <div className="flex gap-4 mb-4 max-lg:flex-col max-lg:items-center">
        {/* img  */}
        <div className="flex min-w-[25rem] h-[30rem] overflow-hidden px-4">
          <Image
            src={image}
            width={400}
            height={200}
            className="aspect-[9/12] w-full h-full object-cover"
            alt={title}
          />
        </div>

        {/* right */}
        <div className="">
          <ul className="flex flex-wrap gap-2 mb-2">
            {genres.map((genre) => (
              <Badge
                className={`bg-green-200 w-fit px-2 py-1 rounded-md`}
                key={genre}
              >
                {genre}
              </Badge>
            ))}
          </ul>
          <h2 className="text-4xl font-bold mb-4">{title}</h2>

          <h3 className="text-lg font-bold">Description: </h3>
          <p className="mb-2">{description}</p>

          <p className="font-bold">
            Total Episodes: <span className="font-thin">{totalEpisodes}</span>{" "}
          </p>
          <p className="font-bold">
            Release Date: <span className="font-thin">{releaseDate}</span>
          </p>
          <p className="font-bold">
            Status: <span className="font-thin"> {status}</span>
          </p>
          <p className="font-bold">
            Sub or Dub: <span className="font-thin">{subOrDub}</span>
          </p>
          <p className="font-bold">
            Type: <span className="font-thin">{type}</span>{" "}
          </p>
          <p className="font-bold">
            Other Names: <span className="font-thin">{otherName}</span>
          </p>
        </div>
      </div>
      <div className="">
        <h2 className="pb-4 text-2xl">Episodes</h2>
        <ul className="flex flex-col gap-2 flex-wrap">
          <div className="flex mt-4 flex-col">


            <div className="mb-4 gap-4 items-center justify-center button-container-episodes" id="button-container-episodes">
              {currentEpisodes.map((episode) => (
                <Link
                  href={`/anime/watch/${id}/${episode.number}`}
                  className="flex-1 flex items-center justify-center "
                  key={episode.number}
                >
                  <div
                    className="cursor-pointer   bg-primary-foreground px-4 rounded-md hover:bg-secondary transition-colors py-2 w-full flex gap-2 justify-center items-center "
                    key={episode.number}
                  >
                    Episode {episode.number} <Play></Play>
                  </div>
                </Link>
              ))}
            </div>

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
                    {Math.min((index + 1) * pageSize, episodes.length)}
                  </button>
                ))}
              </div>
            )}


          </div>


        </ul>
      </div>
    </div>
  );
};

export default AnimeInfoComponent;
