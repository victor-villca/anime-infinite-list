import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <header className='bg-hero bg-center bg-cover bg-no-repeat sm:p-16 py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0'>
        <div className='flex-1 flex flex-col gap-10'>
            <Image 
                src={"./logo.svg"}
                alt='logo'
                width={100}
                height={95}
                className='object-contain'
            />
            <h1 className='text-5xl text-white font-bold leading-[120%] sm:text-6xl lg:max-w-lg'>
                Explore The 
                <span className='red-gradient'>Diverse Realms</span>
                of Anime Magic
            </h1>
        </div>
        <div className='relative w-full h-[50vh] justify-center lg:flex-1'>
            <Image 
                src={"/anime.png"}
                alt='anime luffy'
                fill
                className='object-contain'
            />
        </div>
        

    </header>
  )
}

export default Navbar