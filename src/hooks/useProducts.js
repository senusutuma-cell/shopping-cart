import { useState, useEffect } from "react";

export function useProducts(category) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);
  useEffect(() => {
    const controller = new AbortController();

    async function fetchProducts() {
      setLoading(true);
      setError(null);

      try {
        const url = category
          ? `https://fakestoreapi.com/products/category/${category}`
          : "https://fakestoreapi.com/products";

        const response = await fetch(url, { signal: controller.signal });

        if (!response.ok) {
          throw new Error(`Failed to fetch products: ${response.status}`);
        }

        const data = await response.json();
        setProducts(data);
      } catch (err) {
        if (err.name === "AbortError") {
          return;
        }
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();

    return () => controller.abort();
  }, [category, retryCount]);
   function refetch() {
    setRetryCount((count) => count + 1);
  }
  return { products, loading, error, refetch };
}