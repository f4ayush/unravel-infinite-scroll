import React from 'react';
import RoomCard from './RoomCard';

const RoomList = ({ rooms }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {rooms.map((room, idx) => (
        <RoomCard key={idx} room={room} />
      ))}
    </div>
  );
};

export default RoomList;