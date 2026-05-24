import { TabBar } from "@/components/tab-bar";
import { VideoFeed } from "@/components/video-feed";

const dramas = [
  {
    id: 1,
    title: "重生后我成了霸总白月光",
    episode: "第 12 集",
    progress: "07:35 / 12:40",
    summary: "豪门误会持续升级，女主在雨夜里选择直面真相。",
    likes: "12.4 万",
    comments: "3,218",
    shares: "8,902",
    badge: "热播",
    cover:
      "https://images.unsplash.com/photo-1524863479829-916d8e77f114?auto=format&fit=crop&w=900&q=80",
    videoSrc: "/video/demo.mp4",
  },
  {
    id: 2,
    title: "我在古代开直播",
    episode: "第 8 集",
    progress: "03:20 / 09:55",
    summary: "穿越、反转、打脸三连击，剧情节奏紧凑。",
    likes: "8.7 万",
    comments: "1,904",
    shares: "4,177",
    badge: "独播",
    cover:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title: "替嫁后我成了全网顶流",
    episode: "第 3 集",
    progress: "01:10 / 08:20",
    summary: "身份错位带来全新人生，名场面持续刷屏。",
    likes: "15.2 万",
    comments: "4,612",
    shares: "9,081",
    badge: "新剧",
    cover:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
  },
];

export default function Home() {
  return (
    <main className="h-[100dvh] overflow-hidden bg-[#09090b] text-white">
      <div className="relative mx-auto flex h-full w-full max-w-sm flex-col overflow-hidden bg-[#101114] shadow-2xl shadow-black/50">
        <header className="pointer-events-none absolute left-0 right-0 top-0 z-30 px-4 pt-[calc(1rem+env(safe-area-inset-top))]">
          <h1 className="text-sm font-medium tracking-[0.22em] text-white/88 drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">
            红果短剧
          </h1>
        </header>

        <VideoFeed dramas={dramas} />

        <div className="absolute bottom-0 left-0 right-0 z-30">
          <TabBar />
        </div>
      </div>
    </main>
  );
}

