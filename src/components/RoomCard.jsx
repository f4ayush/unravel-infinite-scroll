import React, { useRef, useState, useEffect, useMemo, lazy, Suspense } from 'react';
import MediaRenderer from './MediaRenderer';
const VariantCard = lazy(() => import('./VariantCard')); // 👈 Lazy load

const RoomCard = React.memo(({ room, id }) => {
  const [showVariants, setShowVariants] = useState(false);
  const variantSectionRef = useRef(null);

  const toggleVariants = () => setShowVariants(prev => !prev);

  useEffect(() => {
    if (showVariants && variantSectionRef.current) {
      variantSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [showVariants]);

  const sharedMedia = useMemo(() => ({
    video: room?.properties?.video_url?.med,
    images: room?.properties?.room_images?.[0]?.image_urls,
  }), [room]);

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <MediaRenderer video={sharedMedia.video} images={sharedMedia.images} />

      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-lg font-semibold text-gray-800 truncate">{room.name}</h2>

        <p className="text-sm text-gray-500 line-clamp-3">{room.description}</p>

        <div className="mt-auto pt-2 text-right">
          <span className="text-sm text-gray-400">Price</span>
          <p className="text-md font-bold text-gray-900">$ {room.price || "NA"}</p>
        </div>

        {room.variants?.length > 0 && (
          <div className="mt-4 transition-all duration-500 ease-in-out">
            {showVariants && (
              <div ref={variantSectionRef} className="mt-2 border-t border-gray-200 pt-2 space-y-2">
                <Suspense fallback={<div className="text-gray-400 text-sm">Loading variants...</div>}>
                  {room.variants.map((variant, idx) => (
                    <VariantCard
                      key={idx}
                      variant={variant}
                      sharedMedia={sharedMedia}
                    />
                  ))}
                </Suspense>
              </div>
            )}

            <button
              className="text-blue-500 text-sm font-medium hover:underline mt-2"
              onClick={toggleVariants}
            >
              {showVariants ? 'See Less' : 'See More'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
});

export default RoomCard;
