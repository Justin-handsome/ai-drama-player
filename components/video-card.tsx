import { VideoActions } from "@/components/video-actions";

type Drama = {
  title: string;
  episode: string;
  progress: string;
  summary: string;
  likes: string;
  comments: string;
  shares: string;
  badge: string;
  cover: string;
  videoSrc?: string;
};

type VideoCardProps = {
  drama: Drama;
};

export function VideoCard({ drama }: VideoCardProps) {
  const actions = [
    { label: "点赞", value: drama.likes, icon: "♥" },
    { label: "评论", value: drama.comments, icon: "◎" },
    { label: "分享", value: drama.shares, icon: "↗" },
  ];

  return (
    <section className="relative flex h-full w-full overflow-hidden bg-black">
      {drama.videoSrc ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={drama.videoSrc}
          autoPlay
          muted
          loop
          playsInline
        />
      ) : (
        <div className="absolute inset-0 bg-cover bg-center opacity-75" style={{ backgroundImage: `url(${drama.cover})` }} />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/18 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/15 via-transparent to-black/35" />

      <div className="relative flex h-full w-full flex-col justify-between px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-[calc(4rem+env(safe-area-inset-top))]">
        <div className="max-w-[70%] drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
          <p className="text-[11px] font-medium tracking-[0.2em] text-white/70 uppercase">{drama.badge}</p>
          <h2 className="mt-2 max-w-[15ch] text-[2.15rem] font-semibold leading-[1.04] tracking-tight text-white">
            {drama.title}
          </h2>
          <p className="mt-3 max-w-[24ch] text-sm leading-6 text-white/76">
            {drama.summary}
          </p>
        </div>

        <div className="flex items-end justify-between gap-4">
          <div className="max-w-[56%] space-y-3 drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">
            <div className="inline-flex items-center gap-2 text-[11px] text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff5b87]" />
              <span>正在播放</span>
              <span className="text-white/45">·</span>
              <span>{drama.episode}</span>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-white/58">
              <span className="inline-flex h-5 items-center rounded-full bg-black/20 px-2 backdrop-blur-sm">
                {drama.progress}
              </span>
              <span>滑动切换下一集</span>
            </div>
          </div>

          <div className="pb-1 pr-0.5">
            <VideoActions actions={actions} />
          </div>
        </div>
      </div>
    </section>
  );
}
