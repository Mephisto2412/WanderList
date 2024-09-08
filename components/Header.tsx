import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className='flex justify-between shadow-sm p-5 px-8 sticky'>
        <div className='flex gap-3 itemss-center'>
            <Image className='hover: "translate-x-80 transition-transform"' src='/logo.png' alt='logo' width={30} height={30}/>
        <h2 className='text-[25px] text-red-500 tracking-widest font-semibold z-10'>WanderList</h2>
        </div>
        <ul className='flex gap-8 items-center'>
            <li className='text-[18px] hover:text-red-500 cursor-pointer'>Home</li>
            <li className='text-[18px] hover:text-red-500 cursor-pointer'>About Us</li>
            <li className='text-[18px] hover:text-red-500 cursor-pointer'>Contact Us</li>
        </ul>
    </div>
  )
}

export default Header