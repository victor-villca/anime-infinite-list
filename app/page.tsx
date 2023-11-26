import Image from 'next/image'
import { data } from './_data'
import AnimeCard, { AnimeProp } from '@/components/AnimeCard'
import Loader from '@/components/Loader'

export default function Home() {
  return (
  <main className='py-16 px-8 flex flex-col gap-10 sm:p-16'>
    <h2 className='text-3xl text-white font-bold'>
      Explore Anime
    </h2>
    <section className='grid  grid-cols-1 gap-10  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
      {data.map((item: AnimeProp, index)=> (
        <AnimeCard key={item.id} anime={item} index={index}/>
      ))}
    </section>
    <Loader />
  </main>
  )
}
