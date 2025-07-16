import React from 'react';
import MediaRenderer from './MediaRenderer';

const RoomCard = ({ room }) => {
  return (
    <div className="flex flex-col bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-lg">
      <MediaRenderer
        video={room?.properties?.video_url?.med}
        images={room.images}
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
      </div>
    </div>
  );
};

export default RoomCard;
