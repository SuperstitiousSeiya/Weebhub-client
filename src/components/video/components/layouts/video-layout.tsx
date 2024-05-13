import captionStyles from "./captions.module.css";

import * as Tooltip from "@radix-ui/react-tooltip";
import {
  Captions,
  Controls,
  Gesture,
  GestureAction,
  GestureWillTriggerEvent,
  PlayButton,
} from "@vidstack/react";

import * as Buttons from "../buttons";
import * as Menus from "../menus";
import * as Sliders from "../sliders";
import { TimeGroup } from "../time-group";
import { FastForward, PauseIcon, PlayIcon, Rewind } from "lucide-react";
import { useState } from "react";
import { wait } from "@/lib/other/extras";

// Offset tooltips/menus/slider previews in the lower controls group so they're clearly visible.
const popupOffset = 30;

export interface VideoLayoutProps {
  thumbnails?: string;
}

export function VideoLayout({ thumbnails }: VideoLayoutProps) {
  return (
    <>
      <div></div>
      <Gestures />
      <Captions
        className={`${captionStyles.captions} media-preview:opacity-100 media-controls:bottom-[85px] media-captions:opacity-100 absolute inset-0 bottom-2 z-10 select-none break-words opacity-0 transition-[opacity,bottom] duration-300`}
      />
      <Controls.Root className="media-controls:opacity-100 absolute inset-0 z-[100] text-white  flex h-full w-full flex-col bg-gradient-to-t from-black/10 to-transparent opacity-0 transition-opacity">
        <Tooltip.Provider>
          <div className="flex-1" />
          <Controls.Group className="flex w-full items-center px-2">
            <Sliders.Time thumbnails={thumbnails} />
          </Controls.Group>
          <Controls.Group className="-mt-0.5 flex w-full items-center px-2 pb-2">
            <Buttons.Play tooltipAlign="start" tooltipOffset={popupOffset} />
            <Buttons.Mute tooltipOffset={popupOffset} />
            <Sliders.Volume />
            <TimeGroup />
            {/* <Title /> */}

            <div className="flex-1" />

            <div className="flex items-center">
              <Menus.Captions offset={popupOffset} tooltipOffset={popupOffset} />
              <Menus.QualityOptions offset={40} tooltipOffset={40} />

              <Buttons.PIP tooltipOffset={popupOffset} />

              <Buttons.Fullscreen
                tooltipAlign="end"
                tooltipOffset={popupOffset}
              />
            </div>
          </Controls.Group>
        </Tooltip.Provider>
      </Controls.Root>
    </>
  );
}

function Gestures() {
  const [seek, setSeek] = useState(false);
  const [prevSeek, setPrevSeek] = useState(false);

  async function onWillTrigger(
    action: GestureAction,
    nativeEvent: GestureWillTriggerEvent
  ) {
    if (seek) {
      setSeek(true);
    } else {
      setSeek(true);
      await wait(800);
      setSeek(false);
    }
  }

  async function prevSeekTrigger(
    action: GestureAction,
    nativeEvent: GestureWillTriggerEvent
  ) {
    if (prevSeek) {
      setPrevSeek(true);
    } else {
      setPrevSeek(true);
      await wait(800);
      setPrevSeek(false);
    }
  }

  return (
    <>
      <div>
        <FastForward
          className={`absolute right-10 opacity-0 transition-all ${
            seek && "opacity-100 pulse"
          }`}
          size={40}
        />

        <Rewind
          className={`absolute left-10 opacity-0 transition-all ${
            prevSeek && "opacity-100 pulse"
          }`}
          size={40}
        />
      </div>

      <Gesture
        className="absolute inset-0 z-0  vds-gesture block size-[5rem] m-auto left-0 right-0 "
        event="pointerup"
        action="toggle:paused"
      />
      {/* <Gesture
        className="absolute inset-0 z-0 block h-full w-full"
        event="dblpointerup"
        action="toggle:fullscreen"
      /> */}
      <Gesture
        className="absolute left-0 top-0 z-10 block h-full w-1/5"
        event="dblpointerup"
        action="seek:-10"
        onWillTrigger={prevSeekTrigger}
      />
      <Gesture
        className="absolute right-0 top-0 z-10 block h-full w-1/5"
        event="dblpointerup"
        action="seek:10"
        onWillTrigger={onWillTrigger}
      />
    </>
  );
}
