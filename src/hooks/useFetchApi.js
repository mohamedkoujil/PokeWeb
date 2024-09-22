import React, { useState, useEffect } from "react";

// Local cache to store fetched data.
// This is a simple cache that stores the fetched data in memory.
// Use avoid fetching the same data multiple times
const localCache = {};

/**
 * Custom hook to fetch data from a given URL.
 *
 * @param {string} url - The URL to fetch data from.
 * @returns {Object} - An object containing the fetched data, loading state, and error state.
 * @returns {any} return.data - The fetched data.
 * @returns {boolean} return.isLoading - Indicates if the data is currently being loaded.
 * @returns {boolean} return.hasError - Indicates if there was an error during the fetch.
 */
const useFetch = (url) => {
  const [state, setstate] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  });

  useEffect(() => {
    getFetch();
  }, [url]);

  const setLoadingState = () => {
    setstate({
      data: null,
      isLoading: true,
      hasError: false,
      error: null,
    });
  };

  const getFetch = async () => {
    // Check if the data is already in the cache
    // Comment this block to disable the cache(Not recommended)
    if (localCache[url]) {
      setstate({
        data: localCache[url],
        isLoading: false,
        hasError: false,
        error: null,
      });
      return;
    }
    // End of cache block

    // Reset the state to loading
    setLoadingState();

    const response = await fetch(url);

    if (!response.ok) {
      setstate({
        data: null,
        isLoading: false,
        hasError: true,
        error: {
          code: response.status,
          message: response.statusText,
        },
      });
      return;
    }

    const data = await response.json();
    setstate({
      data: data,
      isLoading: false,
      hasError: false,
      error: null,
    });

    // Store the fetched data in the cache
    // Comment this block to disable the cache(Not recommended)
    localCache[url] = data;
    // End of cache block
  };

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
    error: state.error,
  };
};

export default useFetch;
