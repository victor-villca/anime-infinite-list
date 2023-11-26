import Image from 'next/image'
import React from 'react'

const Loader = () => {
  return (
    <>
    <section className="flex justify-center items-center w-full">
      <div>
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