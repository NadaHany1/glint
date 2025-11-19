import React from 'react'
import Image from 'next/image'
import SectionHeader from './SectionHeader'
import { SquareCheckBig } from 'lucide-react'
import data from "@/app/data/data.json"

const About = () => {
  return (
    <section id='about' className='w-full h-screen px-[10vw] py-[10vh] bg-white max-h-max min-h-max'>
      <SectionHeader title="about us" />

      <div className='flex flex-col md:flex-row w-full gap-5'>

        {/* IMAGE CONTAINER */}
        <div className='w-full md:w-1/2 relative'>
            <div className='relative w-full h-[40vh] md:h-full '>
                <Image
                src='/image_1.webp'
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
        <div className='flex-1 flex flex-col gap-2 md:gap-4 md:pb-[10vh] text-sm md:text-md lg:text-xl text-text-color rounded-md'>
            <h3 className='text-xl md:text-2xl lg:text-3xl font-bold text-black' data-aos='fade-left'>For the next great business</h3>
            <p className='mb-1' data-aos='fade-left'>{data.about_us.paragraph}</p>
            {data.about_us.points.map((point, index)=> (
              <p key={index} data-aos='fade-left' data-aos-delay={`${index*150}`} ><SquareCheckBig className='inline text-header-color text-sm md:text-md'/>{point}</p>

            ))}
        </div>
    </div>
    </section>
  )
}

export default About
