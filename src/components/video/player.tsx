"use client"

import "@vidstack/react/player/styles/base.css";

import { useRef } from "react";

import {
  MediaPlayer,
  MediaProvider,
  Poster,
  type MediaPlayerInstance,
} from "@vidstack/react";

import { VideoLayout } from "./components/layouts/video-layout";
import { Skeleton } from "../ui/skeleton";
import "@vidstack/react/player/styles/base.css";
import "@vidstack/react/player/styles/plyr/theme.css";
import {
  PlyrLayout,
  plyrLayoutIcons,
} from "@vidstack/react/player/layouts/plyr";
export function Player({
  src,
  image,
  className,
}: {
  src: any;
  className: string;
  image: any;
}) {
  let player = useRef<MediaPlayerInstance>(null);

  return (
    <>
      {src ? (
        <MediaPlayer
          className={`w-full aspect-video bg-slate-900 text-white font-sans overflow-hidden rounded-md ring-media-focus data-[focus]:ring-4 ${className}`}
          title="Sprite Fight"
          src={src}
          autoPlay
          ref={player}
          playsInline
        >
          <MediaProvider>
            <Poster
              className="absolute inset-0 block h-full w-full rounded-md opacity-0 transition-opacity data-[visible]:opacity-100 object-cover"
              src={image}
              alt="image"
            />
          </MediaProvider>
          <VideoLayout thumbnails="" />
          {/* <PlyrLayout thumbnails="thumbnails.vtt" icons={plyrLayoutIcons} /> */}
        </MediaPlayer>
      ) : (
        <div>
          <Skeleton className="w-full aspect-video"></Skeleton>
        </div>
      )}
    </>
  );
}
