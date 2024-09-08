import React from 'react';
import Image from 'next/image';

const NEXT_PUBLIC_TOMTOM_PLACE_KEY = process.env.NEXT_PUBLIC_TOMTOM_PLACE_KEY;

function SideDrawer({ place, close }: any) {
  const latitude = place.lat; 
  const longitude = place.lon; 
  const mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${NEXT_PUBLIC_TOMTOM_PLACE_KEY}&center=${latitude},${longitude}&zoom=16&format=jpg&size=480x480&markers=icon:large-red-cutout|${latitude},${longitude}`;

  console.log(mapUrl);

  return (
    <div className='h-screen sm:w-screen md:w-[500px] bg-white shadow-md p-5 z-20'>
      <button onClick={() => close()}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>

      <div>
        <h2 className="line-clamp-2 text-[20px] font-semibold mb-3">{place.display_name}</h2>
        <Image
          className='w-full h-[170px] object-cover rounded-xl '
          src={place.imageUrl || '/placeholder.png'}
          alt={place.display_name || 'location'}
          width={200}
          height={80}
        />

        <div className='flex  justify-between mt-4'>
          <button className='flex flex-cols bg-red-500 m-2 text-white py-2 px-6 rounded-full hover:bg-red-600 hover:underline transition'>
            <Image src={'/direction2.png'} alt='direction' height={20} width={35} className=''/>
                <span className='m-2'>Direction</span>
          </button>
          <button className='flex flex-cols bg-red-500 text-white py-2 px-6 m-2 rounded-full hover:bg-red-600 transition hover:underline'>
            <Image src={'/share3.png'} alt='share' height={20} width={35} className=''/>
                <span className='m-2'>Share</span>
          </button>
        </div>

        <div className='mt-5'>
          <h3 className='text-[18px] font-semibold'>Map Location</h3>
          <img
            className='w-full h-[200px] object-cover rounded-xl mt-2'
            src={mapUrl}
            alt={`Map of ${place.display_name}`}
          />
        </div>
      </div>
    </div>
  );
}

export default SideDrawer;
