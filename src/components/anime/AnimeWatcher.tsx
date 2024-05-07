import React from "react";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import '@vidstack/react/player/styles/default/theme.css';
import {
    DefaultAudioLayout,
    defaultLayoutIcons,
    DefaultVideoLayout,
  } from '@vidstack/react/player/layouts/default';

  import '@vidstack/react/player/styles/default/theme.css';
  import '@vidstack/react/player/styles/default/layouts/video.css';
const AnimeWatcher = ({ video }: { video: string }) => {
  return (
    <div>
      <MediaPlayer
        title="Sprite Fight"
        src={video}
      >
        <MediaProvider />
        <DefaultAudioLayout icons={defaultLayoutIcons} />
        <DefaultVideoLayout icons={defaultLayoutIcons} />
      </MediaPlayer>
    </div>
  );
};

export default AnimeWatcher;
