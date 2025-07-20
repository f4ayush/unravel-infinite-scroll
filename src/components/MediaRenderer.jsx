import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import SkeletonCard from './SkeletonCard';
import { useMediaCache } from '../contexts/MediaCacheContext';


const MediaRenderer = ({ video, images }) => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "snap",
    slides: { perView: 1 },
  });

  const { isMediaLoaded, markMediaAsLoaded } = useMediaCache();

  const [forceRender, setForceRender] = useState(false);

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
        const isLoaded = isMediaLoaded(item.src);


        return (
          <div key={index} className="keen-slider__slide relative">
            {/* Shimmer while loading */}
            {!isLoaded && (
              <SkeletonCard/>
            )}

            {/* Media */}
            {item.type === 'video' ? (
              <video
                src={item.src}
                autoPlay
                muted
                loop
                playsInline
                loading="lazy"
                className={`${sharedStyles} transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoadedData={() => {
                  markMediaAsLoaded(item.src);
                  setForceRender((prev) => !prev);
                }}
              />
            ) : (
              <img
                src={item.src}
                alt={`media-${index}`}
                loading="lazy"
                className={`${sharedStyles} transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => {
                  markMediaAsLoaded(item.src);
                  setForceRender((prev) => !prev);
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
