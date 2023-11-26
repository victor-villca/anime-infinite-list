import Image from 'next/image';
import React from 'react'
import { GrChannel } from "react-icons/gr";
import { FaStar } from "react-icons/fa";
import { MotionDiv } from './DivMotion';

const stagger = 0.25;

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export interface AnimeProp {
    id: string;
    name: string;
    image: {
      original: string;
    };
    kind: string;
    episodes: number;
    episodes_aired: number;
    score: string;
  }

interface Prop {
    anime: AnimeProp;
    index: number;
  }
  

const AnimeCard = ({ anime, index} : Prop) => {
  return (
    <MotionDiv className='max-w-sm rounded-xl relative w-full'
    variants={variants}
    initial="hidden"
    animate="visible"
    transition={{
      delay: index * stagger,
      ease: "easeInOut",
      duration: 0.5,
    }}
    viewport={{ amount: 0 }}
    >
        <div className='relative w-full h-[37vh] object-cover rounded-xl'>
            <Image 
                src={`https://shikimori.one${anime.image.original}`}
                alt={`${anime.name} img`}
                fill
                className='rounde-xl rounded-xl object-cover'
            />
        </div>
        <div className='py-4 flex flex-col gap-3'>
            <div className='flex justify-between items-center'>
                <h2 className=' font-bold text-white text-xl line-clamp-1 w-full capitalize'>
                    {anime.name}
                </h2>
                <div className='py-1 px-2 bg-[#161921] rounded-sm'>
                    <p className='text-white text-sm font-bold capitalize'>
                        {anime.kind}
                    </p>
                </div>
            </div>
            <div className='flex gap-4 items-center'>
                <div className='flex gap-2 items-center'>
                        <GrChannel color={"red"} />
                        <p className='text-base text-white font-bold'>
                            {anime.episodes || anime.episodes_aired}
                        </p>
                </div>
                <div className='flex gap-2 items-center'>
                    <FaStar color= {"yellow"}/>
                    <p className='text-base font-bold text-[#FFAD49]'>
                        {anime.score}
                    </p>
                </div>
            </div>
        </div>
    </MotionDiv>
  )
}

export default AnimeCard
