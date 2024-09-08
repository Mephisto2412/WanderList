import category from '@/data/category'
import Image from 'next/image'
import React, { useState } from 'react'

function Hero({userInput}:any) {
   const [searchInput,setSearchInput]=useState<string>();

    return (
    <div className='text-center'>
        <div>
            <Image src='/download.png' alt='hero-image' width={100} height={100} className='w-screen justify-center align-center absolute mt-[20px]'/>
            <div className='mt-[70px]'>
                <h2 className='text-[55px] text-red-600 tracking-widest font-semibold z-10'>WanderList</h2>
                <h2 className='text-[20px]'>Explore amazing cities</h2>
                <div className='mt-[5] flex gap-2 items-center justify-center'>
                    <input type="text" placeholder='Search hotels, restaurants, parks etc' className='z-20 bg-white p-3 border-[1px] rounded-full px-5 w-[36%] shadow-sm outline-red-400 transition-all' onChange={(e)=>setSearchInput(e.target.value)}/>
                    <button className='bg-red-600 rounded-full p-3 border-2 shadow-md z-10  cursor-pointer hover:scale-115 transition-all hover:bg-red-500' onClick={()=>userInput(searchInput)} >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-white">
  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>

                    </button>
                </div>
                <div className='mt-5 flex flex-col justify-center items-center'>
                    <h2>Browse Categories</h2>
                    <div className='z-10 grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 w-[50%] justify-center gap-5 mt-3'>
                        {category.map((item,index)=>(
                            <div className='gap-11 border-[1px] w-[60px] p-4 bg-white rounded-full z-10 hover:border-red-600 hover:scale-125 cursor-pointer transition-all' >
                                <Image src={item.icon} alt='{item.name}' width={30} height={30} className='gap-6 z-10'></Image>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )

}

export default Hero