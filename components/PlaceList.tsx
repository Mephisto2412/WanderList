import React, { useState } from 'react';
import PlaceItemCard from './PlaceItemCard';
import SideDrawer from './SideDrawer';
import Skeleton from './Skeleton';

function PlaceList({ placeList }: any) {
  const [selectedPlace, setSelectedPlace] = useState<any>(null); // Initialize as null

  return (
    <div className='bg-white px-[10px] md:px-[120px] mt-7 z-10'>
      <h2 className='bg-white text-[20px] font-bold z-10'>Search Results</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 z-10'>
        {placeList.map((place: any, index: number) => (
          <div className='z-10' key={index} onClick={() => setSelectedPlace(place)}>
            <PlaceItemCard place={place} />
          </div>
        ))}
      </div>
      {selectedPlace ? (
        <div className='fixed top-0 right-0 z-50'>
          <SideDrawer place={selectedPlace} close={() => setSelectedPlace(null)} />
        </div>
      ) : null}

      {placeList?.length==0 ? <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 z-10'>
        {[1,2,3,4,5,6,7].map((item,index)=>(
          <Skeleton/>
        ))}
      </div>:null}

    </div>
  );
}

export default PlaceList;
