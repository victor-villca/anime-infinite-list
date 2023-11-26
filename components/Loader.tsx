'use client'
import {useEffect, useState} from 'react'
import Image from 'next/image'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import { fetchAnime } from '@/app/action'
import AnimeCard, { AnimeProp } from './AnimeCard'

let page = 2
export type AnimeCard = JSX.Element;
const  Loader =  () => {
  const {ref, inView} = useInView()
  const [data, setData] = useState<AnimeCard[]>([])

  useEffect(()=>{
    if(inView){
      fetchAnime(page)
      .then((res) => {
        setData([...data, ...res])
      })
      page++
    }
},[inView, data])
  return (
    <>
    <section className='grid  grid-cols-1 gap-10  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
      {data}
    </section>
    <section className="flex justify-center items-center w-full">
      <div ref={ref}>
        <Image
          src="./spinner.svg"
          alt="spinner"
          width={56}
          height={56}
          className="object-contain"
        />
      </div>
    </section>
  </>
  )
}

export default Loader