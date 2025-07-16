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
    ...(images || []).map((img) => ({ type: 'image', src: img })),
  ];

  const sharedStyles = "w-full h-64 md:h-72 lg:h-80 object-cover rounded-xl";

  if (mediaItems.length === 0) {
    return (
      <div className={`flex items-center justify-center bg-gray-200 text-gray-500 text-sm italic ${sharedStyles}`}>
        Media not available
      </div>
    );
  }

  return (
    <div ref={sliderRef} className="keen-slider w-full rounded-xl overflow-hidden shadow-md">
      {mediaItems.map((item, index) => {
        const isLoaded = loadedItems.includes(index);

        return (
          <div className="keen-slider__slide" key={index}>
            {/* <div className={`animate-pulse bg-gray-200 ${sharedStyles}`} /> */}
            {!isLoaded && (
              <div className="animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200" />

            )}

            {item.type === 'video' ? (
              <video
                src={item.src}
                autoPlay
                muted
                loop
                playsInline
                className={`${sharedStyles} ${!isLoaded ? 'hidden' : ''}`}
                onLoadedData={() => setLoadedItems((prev) => [...prev, index])}
              />
            ) : (
              <img
                src={item.src}
                loading="lazy"
                alt={`media-${index}`}
                className={`${sharedStyles} ${!isLoaded ? 'hidden' : ''}`}
                onLoad={() => setLoadedItems((prev) => [...prev, index])}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/placeholder.jpg';
                  setLoadedItems((prev) => [...prev, index]);
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
