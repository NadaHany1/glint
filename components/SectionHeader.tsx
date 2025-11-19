import React from 'react'

interface SectionHeaderProps {
  title: string,
  desc?: string
}

const SectionHeader = ({ title, desc }: SectionHeaderProps) => {
  return (
    <div className='flex flex-col w-full gap-2 md:gap-4 mb-[5vh]'>
        <h1 className="text-3xl max-w-max mx-auto md:text-5xl xl:text-6xl capitalize font-bold text-center bg-linear-to-r from-gradient-first via-gradient-second to-gradient-third bg-clip-text text-transparent"
            data-aos='fade-down'>
        {title}
        </h1>
        {desc && (
            <p data-aos='fade-down' className='text-sm md:text-md lg:text-xl w-3/5 text-center mx-auto text-text-color'>
            {desc}
            </p>
        )}
    </div>
  )
}

export default SectionHeader
