import Image from 'next/image'
import React from 'react'
import { FaTiktok, FaYoutube, FaGithub   } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className='py-4 px-8 flex justify-between items-center gap-2 flex-wrap bg-[#161921] sm:px-16'>
      <p className='text-base font-bold text-white'>@{year} Epic Anime Infinite List</p>
      <Image 
        src={"/logo.png"}
        alt='logo footer'
        width={50}
        height={45}
        className='object-contain'
      />
      <div className='flex items-center gap-6 cursor-pointer'>
        <FaGithub size={50} />
        <FaYoutube size={50}/> 
        <FaTiktok size={40}/>
      </div>
    </footer>
  )
}

export default Footer