// components/SkeletonCard.jsx
import React from 'react';

const SkeletonCard = () => {
  return (
    <div className="absolute inset-0 z-10 animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200" />
  );
};

export default SkeletonCard;
