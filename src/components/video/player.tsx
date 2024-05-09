import "@vidstack/react/player/styles/base.css";

import { useRef } from "react";

import {
  MediaPlayer,
  MediaProvider,
  type MediaPlayerInstance,
} from "@vidstack/react";

import { VideoLayout } from "./components/layouts/video-layout";
import { Skeleton } from "../ui/skeleton";

export function Player({ src, className }: { src: any; className: string }) {
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
        >
          <MediaProvider>
            {/* <Poster
          className="absolute inset-0 block h-full w-full rounded-md opacity-0 transition-opacity data-[visible]:opacity-100 object-cover"
          src="https://files.vidstack.io/sprite-fight/poster.webp"
          alt="Girl walks into campfire with gnomes surrounding her friend ready for their next meal!"
        /> */}
          </MediaProvider>
          <VideoLayout thumbnails="thumbnails.vtt" />
        </MediaPlayer>
      ) : (
        <div>
          <Skeleton className="w-full aspect-video"  ></Skeleton>
        </div>
      )}
    </>
  );
}
