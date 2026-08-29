import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "recently-viewed-ids";
const MAX_ITEMS = 6;

export function useRecentlyViewed() {
  const [viewedIds, setViewedIds] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (err) {
      console.error("Failed to parse recently viewed:", err);
      return [];
    }
  });

  const trackView = useCallback((productId) => {
    setViewedIds((current) => {

      const withoutCurrent = current.filter((id) => id !== productId);
      const updated = [productId, ...withoutCurrent].slice(0, MAX_ITEMS);

      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  }, []);

  return { viewedIds, trackView };
}