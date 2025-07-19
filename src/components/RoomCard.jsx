import React, { useState } from 'react';
import MediaRenderer from './MediaRenderer';

const RoomCard = ({ room, index }) => {
  const [showVariants, setShowVariants] = useState(false); // State to toggle variants visibility

  const toggleVariants = () => {
    setShowVariants((prev) => !prev);
  };
  
  if(room.name === "Premier burj view room king bed 65sq wfrm walk metro station and dubai mall"){
    console.log("RoomCard", index, room.name, room);
  }
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <MediaRenderer
        video={room?.properties?.video_url?.med}
        images={room?.properties?.room_images?.[0]?.image_urls}
      />

      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-lg font-semibold text-gray-800 truncate">
          {room.name}
        </h2>

        <p className="text-sm text-gray-500 line-clamp-3">
          {room.description}
        </p>

        <div className="mt-auto pt-2 text-right">
          <span className="text-sm text-gray-400">Price</span>
          <p className="text-md font-bold text-gray-900">$ {room.price || "NA"}</p>
        </div>

        {/* Collapsible Variants Section */}
        {room.variants && room.variants.length > 0 && (
          <div className="mt-4">

            {showVariants && (
              <div className="mt-2 border-t border-gray-200 pt-2">
                {room.variants.map((variant, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col gap-2 text-sm text-gray-700 py-2 border-b border-gray-200"
                  >
                    <span className="font-semibold">{variant.name}</span>
                    <span className="font-bold">$ {variant.price || 'NA'}</span>
                    <MediaRenderer
        video={room?.properties?.video_url?.med}
        images={room?.properties?.room_images?.[0]?.image_urls}
      />
                  </div>
                ))}
              </div>
            )}
            <button
              className="text-blue-500 text-sm font-medium hover:underline"
              onClick={toggleVariants}
            >
              {showVariants ? 'See Less' : 'See More'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoomCard;
