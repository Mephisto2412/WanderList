import React from 'react';
import Image from 'next/image';

function PlaceItemCard({ place }: any) {
  return (
    <div className='w-full z-10 border-[1px] rounded-xl shadow-md hover:border-red-500 hover:bg-red-300 hover:scale-110'>
      {/* Use the dynamic imageUrl if it exists, else fallback to placeholder */}
      <Image
        className='w-full h-[150px] object-cover rounded-t-xl'
        src={place.imageUrl || '/placeholder.png'}
        alt={place.display_name || 'location'}
        width={200}
        height={80}
      />
      <div className='p-2'>
        <h2 className='line-clamp-2'>{place.display_name}</h2>
      </div>
    </div>
  );
}

export default PlaceItemCard;
