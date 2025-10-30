"use client";
import VideoPlayer from "./VideoPlayer";
import { useState } from "react";
import { useWindowListener } from "@/hooks/useWindowListener";

export default function PromoteCard() {
  const [playing, setPlaying] = useState(true);

  useWindowListener("contextmenu",(e)=>{e.preventDefault()})

  return (
    <div
      className="w-[80%] shadow-lg mx-[10%] my-10 p-2 rounded bg-white
        flex flex-row space-x-2"
    >
      <VideoPlayer vdoSrc="/vdo/venue.mp4" isPlaying={playing} />
      <div className="flex flex-col w-full py-3 ps-2">
        <div className="text-xl mb-5"> Book your venue today.</div>
        <button
          className="block w-fit rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-1
      text-white font-mono text-sm font-medium shadow-small"
          onClick={() => {
            setPlaying(!playing);
          }}
        >
          {playing ? "Pause" : "Play"}
        </button>
      </div>
    </div>
  );
}
