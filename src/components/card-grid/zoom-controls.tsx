"use client";

export function ZoomControls({
  zoom,
  zoomIn,
  zoomOut,
}: {
  zoom: number;
  zoomIn: () => void;
  zoomOut: () => void;
}) {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2">
      <button
        type="button"
        onClick={zoomIn}
        disabled={zoom >= 4}
        aria-label="Zoom in"
        className="flex h-10 w-10 items-center justify-center rounded-full font-mono text-lg font-bold text-white shadow-lg disabled:opacity-30"
        style={{ backgroundColor: "#2b4162", border: "2px solid #7ec8e3" }}
      >
        +
      </button>
      <div
        className="flex h-8 w-10 items-center justify-center font-mono text-xs font-bold"
        style={{ color: "#6b5c4c" }}
      >
        {zoom}x
      </div>
      <button
        type="button"
        onClick={zoomOut}
        disabled={zoom <= 1}
        aria-label="Zoom out"
        className="flex h-10 w-10 items-center justify-center rounded-full font-mono text-lg font-bold text-white shadow-lg disabled:opacity-30"
        style={{ backgroundColor: "#2b4162", border: "2px solid #7ec8e3" }}
      >
        &minus;
      </button>
    </div>
  );
}
