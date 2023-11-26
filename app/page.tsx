import Loader from '@/components/Loader'
import { fetchAnime } from './action'

export default async function Home() {
  const data = await fetchAnime(1)
  return (
  <main className='py-16 px-8 flex flex-col gap-10 sm:p-16'>
    <h2 className='text-3xl text-white font-bold'>
      Explore the Most Popular Anime
    </h2>
    <section className='grid  grid-cols-1 gap-10  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
      {data}
    </section>
    <Loader />
  </main>
  )
}
