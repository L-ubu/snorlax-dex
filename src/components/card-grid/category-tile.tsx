export function CategoryTile({
  title,
  caught,
  total,
  onClick,
}: {
  title: string;
  caught: number;
  total: number;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex flex-col items-center justify-center gap-3 rounded-xl border-2 p-8 transition-all hover:scale-[1.02]"
      style={{
        borderColor: "#7ec8e3",
        backgroundColor: "#2b4162",
        minHeight: "200px",
      }}
    >
      <span className="font-mono text-lg font-bold tracking-wider text-white">
        {title.toUpperCase()}
      </span>
      <div className="flex items-baseline gap-1">
        <span
          className="font-mono text-2xl font-bold"
          style={{ color: "#ffd700" }}
        >
          {caught}
        </span>
        <span className="font-mono text-sm text-gray-400">/ {total}</span>
      </div>
      <div className="h-1.5 w-32 overflow-hidden rounded-full bg-gray-700">
        <div
          className="h-full rounded-full"
          style={{
            width: total > 0 ? `${(caught / total) * 100}%` : "0%",
            backgroundColor: "#4ade80",
          }}
        />
      </div>
    </button>
  );
}
