import React, { createContext, useContext, useState, useCallback } from 'react';

const MediaCacheContext = createContext();

export const MediaCacheProvider = ({ children }) => {
  const [loadedMedia, setLoadedMedia] = useState(new Set());

  const markMediaAsLoaded = useCallback((src) => {
    setLoadedMedia((prev) => new Set(prev).add(src));
  }, []);

  const isMediaLoaded = useCallback(
    (src) => loadedMedia.has(src),
    [loadedMedia]
  );

  return (
    <MediaCacheContext.Provider value={{ isMediaLoaded, markMediaAsLoaded }}>
      {children}
    </MediaCacheContext.Provider>
  );
};

export const useMediaCache = () => useContext(MediaCacheContext);
