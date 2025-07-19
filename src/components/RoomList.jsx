import React from 'react';
import RoomCard from './RoomCard';

const RoomList = ({ rooms = [], isLoading, hasNextPage, infiniteRef }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl flex flex-col gap-4 p-4">
        {rooms.map((room, idx) => (
          <RoomCard key={idx} room={room} id={idx} />
        ))}

        {hasNextPage && (
          <div ref={infiniteRef} className="flex justify-center items-center">
            <div className="animate-pulse bg-slate-600 p-4 text-white rounded-md">
              Loading...
            </div>
          </div>
        )}

        {!isLoading && rooms.length === 0 && (
          <p className="text-center text-gray-500">No rooms found.</p>
        )}
      </div>
    </div>
  );
};

export default RoomList;
