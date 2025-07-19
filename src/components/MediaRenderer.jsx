import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const MediaRenderer = ({ video, images }) => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "snap",
    slides: { perView: 1 },
  });

  const [loadedItems, setLoadedItems] = useState([]);

  const mediaItems = [
    ...(video ? [{ type: 'video', src: video }] : []),
    ...(images || []).map(img => ({ type: 'image', src: img })),
  ];

  const sharedStyles = "w-full h-64 sm:h-72 md:h-80 lg:h-96 object-contain rounded-xl";

  if (mediaItems.length === 0) {
    return (
      <div className={`flex items-center justify-center bg-gray-200 text-gray-500 text-sm italic ${sharedStyles}`}>
        Media not available
      </div>
    );
  }

  return (
    <div ref={sliderRef} className="keen-slider rounded-xl overflow-hidden shadow-md">
      {mediaItems.map((item, index) => {
        const isLoaded = loadedItems.includes(index);

        return (
          <div key={index} className="keen-slider__slide relative">
            {/* Shimmer while loading */}
            {!isLoaded && (
              <div className="absolute inset-0 z-10 animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200" />
            )}

            {/* Media */}
            {item.type === 'video' ? (
              <video
                src={item.src}
                autoPlay
                muted
                loop
                playsInline
                className={`${sharedStyles} transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoadedData={() => setLoadedItems(prev => [...prev, index])}
              />
            ) : (
              <img
                src={item.src}
                alt={`media-${index}`}
                loading="lazy"
                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 rounded-xl ${
                  isLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                // className={`${sharedStyles} transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setLoadedItems(prev => [...prev, index])}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/placeholder.jpg';
                  setLoadedItems(prev => [...prev, index]);
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default MediaRenderer;
