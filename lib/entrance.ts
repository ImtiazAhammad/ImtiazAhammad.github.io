// Set on <html> by the inline script in app/layout.tsx before first paint.
export const LOADER_EXIT_MS = 1700;
export const LOADER_REMOVE_MS = 2300;
export const LOADER_ENTRANCE_DELAY = 1.8;

export const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

export function isLoaderActive(): boolean {
  return (
    typeof document !== "undefined" &&
    document.documentElement.dataset.loader === "show"
  );
}

/** Seconds to wait before entrance animations start. */
export function getEntranceDelay(): number {
  return isLoaderActive() ? LOADER_ENTRANCE_DELAY : 0;
}
