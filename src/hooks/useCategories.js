import { useState, useEffect } from "react";

export function useCategories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchCategories() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch("https://fakestoreapi.com/products/categories", {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch categories: ${response.status}`);
        }

        const data = await response.json();
        setCategories(data);
      } catch (err) {
        if (err.name === "AbortError") return;
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchCategories();

    return () => controller.abort();
  }, []); 

  return { categories, loading, error };
}