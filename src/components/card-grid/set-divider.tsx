export function SetDivider({
  setName,
  year,
}: {
  setName: string;
  year: number;
}) {
  return (
    <div className="col-span-full flex items-center gap-3 py-4">
      <div className="h-px flex-1" style={{ backgroundColor: "#c4b8a8" }} />
      <div className="flex items-center gap-2">
        <div
          className="h-1.5 w-1.5 rounded-full"
          style={{ backgroundColor: "rgba(233,69,96,0.3)" }}
        />
        <span
          className="font-mono text-xs font-bold tracking-widest"
          style={{ color: "#6b5c4c" }}
        >
          {setName.toUpperCase()} &middot; {year}
        </span>
        <div
          className="h-1.5 w-1.5 rounded-full"
          style={{ backgroundColor: "rgba(233,69,96,0.3)" }}
        />
      </div>
      <div className="h-px flex-1" style={{ backgroundColor: "#c4b8a8" }} />
    </div>
  );
}
