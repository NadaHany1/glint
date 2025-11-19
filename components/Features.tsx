'use client'
import { useEffect, useState } from 'react'
import React from 'react'
import Image from 'next/image'
import SectionHeader from './SectionHeader'
import AllData from "@/app/data/data.json"

const Features = () => {

    const data = AllData.features
    const [counter, setCounter] = useState(0);

    useEffect( ()=> {
    const interval = setInterval( 
      ()=>setCounter((prev) => (prev+1) % data.length),
      5000);
    return ()=> clearInterval(interval)
  }, [data.length])

  return (
    <section className='w-full h-screen px-[10vw] py-[10vh] bg-white max-h-max min-h-max'>
      <SectionHeader title="our features" desc='some description that explain the content included in this section' />

      <div className='flex flex-col md:flex-row w-full gap-5 min-h-[50vh]'>

        {/* IMAGE CONTAINER */}
        <div className='w-full md:w-1/2 relative'>
            <div className='relative w-full h-[40vh] md:h-full '>
                <Image
                src={data[counter].image}
                alt='business'
                loading='lazy'
                data-aos='fade-right'
                fill={true}
                sizes='50vw'
                className='object-cover rounded-md'
                />
            </div>
        </div>

        {/* TEXT CONTAINER */}
        <div className='flex-1 flex flex-col gap-2 md:gap-4 text-sm md:text-lg lg:text-xl text-text-color rounded-md'>
            <h3 className='text-[2em] font-bold text-header-color' data-aos='fade-left'>{data[counter].title}</h3>
            <p className='mb-1' data-aos='fade-left'>
                {data[counter].text_1}
            </p>
            <p data-aos='fade-left' className='text-[0.85em] font-bold'>{data[counter].text_2}</p>
            <button data-aos='fade-up' className='p-2 px-6 rounded-4xl bg-header-color w-max text-white mt-auto'>Learn more</button>
        </div>
    </div>
    <div className='flex flex-row gap-2 w-max m-auto mt-5' data-aos='fade-up'>
      {data.map((_, index) => (
        <div
          key={index}
          onClick={() => setCounter(index)}
          className={`w-3 h-3 md:w-4 md:h-4 rounded-full border-2 border-gray-300 cursor-pointer transition-all duration-300
            ${counter === index ? 'bg-header-color border-header-color' : 'bg-transparent'}`}
        ></div>
      ))}
    </div>
    </section>
  )
}

export default Features
