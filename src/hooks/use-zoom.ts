"use client";

import { useState, useCallback, useEffect } from "react";

export function useZoom(initial = 3) {
  const [zoom, setZoomRaw] = useState(initial);
  const setZoom = useCallback(
    (n: number) => setZoomRaw(Math.min(4, Math.max(1, n))),
    []
  );
  const zoomIn = useCallback(
    () => setZoomRaw((p) => Math.max(1, p - 1)),
    []
  );
  const zoomOut = useCallback(
    () => setZoomRaw((p) => Math.min(4, p + 1)),
    []
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      )
        return;
      if (e.key === "+" || e.key === "=") {
        e.preventDefault();
        zoomIn();
      } else if (e.key === "-" || e.key === "_") {
        e.preventDefault();
        zoomOut();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [zoomIn, zoomOut]);

  return { zoom, setZoom, zoomIn, zoomOut };
}
