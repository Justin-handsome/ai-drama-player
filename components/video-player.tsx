"use client";

import { useEffect, useRef, useState } from "react";

type VideoPlayerProps = {
  src?: string;
};

function SideActions() {
  return (
    <div className="pointer-events-none absolute right-3 top-1/2 z-20 -translate-y-1/2 select-none">
      <div className="pointer-events-auto flex flex-col gap-3 rounded-2xl bg-black/20 p-2 text-center text-xs text-white/80 backdrop-blur-sm">
        <button type="button" className="rounded-xl px-2 py-2">
          ♥
        </button>
        <button type="button" className="rounded-xl px-2 py-2">
          ◎
        </button>
        <button type="button" className="rounded-xl px-2 py-2">
          ↗
        </button>
      </div>
    </div>
  );
}

export function VideoPlayer({ src = "/video/demo.mp4" }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      try {
        await video.play();
      } catch {
        return;
      }
    } else {
      video.pause();
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.playsInline = true;
    video.loop = true;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    const playPromise = video.play();
    if (playPromise) {
      void playPromise.catch(() => {
        setIsPlaying(false);
      });
    }

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
    };
  }, []);

  return (
    <div className="video-container relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-black">
      <video
        ref={videoRef}
        src={src}
        muted
        autoPlay
        playsInline
        loop
        className="block h-full w-full object-cover"
      />

      <div
        className="click-layer absolute inset-0 z-10 bg-transparent"
        onClick={togglePlayPause}
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/25 to-transparent p-3">
        <p className="text-xs text-white/70">{isPlaying ? "播放中" : "已暂停"}</p>
      </div>

      <SideActions />
    </div>
  );
}
