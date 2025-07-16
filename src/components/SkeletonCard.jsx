// components/SkeletonCard.jsx
import React from 'react';

const SkeletonCard = () => {
  return (
    <div className="border rounded shadow-md overflow-hidden animate-pulse bg-white">
      <div className="w-full h-64 md:h-72 lg:h-80 bg-gray-200" />
      <div className="p-4 space-y-2">
        <div className="h-4 bg-gray-300 rounded w-3/4" />
        <div className="h-3 bg-gray-200 rounded w-full" />
        <div className="h-3 bg-gray-200 rounded w-5/6" />
        <div className="h-4 bg-gray-300 rounded w-1/3 mt-4" />
      </div>
    </div>
  );
};

export default SkeletonCard;
