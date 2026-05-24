import { VideoCard } from "@/components/video-card";

type Drama = {
  id: number;
  title: string;
  episode: string;
  progress: string;
  summary: string;
  likes: string;
  comments: string;
  shares: string;
  badge: string;
  cover: string;
};

type VideoFeedProps = {
  dramas: Drama[];
};

export function VideoFeed({ dramas }: VideoFeedProps) {
  return (
    <div className="flex-1 overflow-y-auto overscroll-none snap-y snap-mandatory scroll-smooth pb-[calc(4.5rem+env(safe-area-inset-bottom))] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
      {dramas.map((drama) => (
        <div key={drama.id} className="h-[100dvh] snap-start snap-always">
          <VideoCard drama={drama} />
        </div>
      ))}
    </div>
  );
}
