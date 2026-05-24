type VideoAction = {
  label: string;
  value: string;
  icon: string;
};

type VideoActionsProps = {
  actions: VideoAction[];
};

export function VideoActions({ actions }: VideoActionsProps) {
  return (
    <div className="flex flex-col items-center gap-2.5">
      {actions.map((action) => (
        <button
          key={action.label}
          type="button"
          className="flex flex-col items-center gap-1 text-white/92 transition active:scale-95"
        >
          <span className="grid h-11 w-11 place-items-center rounded-full bg-black/18 text-[20px] backdrop-blur-sm">
            {action.icon}
          </span>
          <span className="text-[11px] font-medium text-white/86">{action.label}</span>
          <span className="text-[10px] text-white/52">{action.value}</span>
        </button>
      ))}
    </div>
  );
}
