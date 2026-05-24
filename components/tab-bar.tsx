const tabs = [
  { label: "首页", active: true },
  { label: "推荐", active: false },
  { label: "收藏", active: false },
  { label: "我的", active: false },
];

export function TabBar() {
  return (
    <nav className="border-t border-white/8 bg-[#101114]/82 px-3 pb-[calc(0.5rem+env(safe-area-inset-bottom))] pt-2 backdrop-blur-xl">
      <div className="grid grid-cols-4 gap-1">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            type="button"
            className={`flex flex-col items-center rounded-2xl px-2 py-2 text-xs transition ${
              tab.active
                ? "bg-white text-zinc-900"
                : "text-white/55 hover:bg-white/5 hover:text-white"
            }`}
          >
            <span className="mb-1 h-2 w-2 rounded-full bg-current" />
            {tab.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
