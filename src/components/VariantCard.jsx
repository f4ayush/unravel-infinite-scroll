// components/VariantCard.jsx
import React from 'react';
import MediaRenderer from './MediaRenderer';

const VariantCard = ({ variant, sharedMedia }) => {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-md p-3 ml-2 shadow-sm">
      <div className="text-xs font-semibold text-gray-600">{variant.name}</div>
      <div className="text-sm font-bold text-gray-800">$ {variant?.total_price?.total_price_rounded || 'NA'}</div>

      <div className="mt-2 w-full h-48 rounded overflow-hidden">
        <MediaRenderer video={sharedMedia.video} images={sharedMedia.images} />
      </div>
    </div>
  );
};

export default VariantCard;
