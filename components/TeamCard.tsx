import React, { useState } from 'react'
import Image from 'next/image'
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

interface TeamCardProps {
    name:string,
    position:string,
    image:string,
    fade:string,
    delay:number
}

const TeamCard = ({name, position, image, fade, delay} : TeamCardProps) => {

  const [showIcons, setShowIcons] = useState(false);

  return (
    <div className="group relative flex flex-col h-fit pb-2 mt-[5vh] w-full bg-white overflow-hidden" onClick={() => setShowIcons(prev => !prev)} data-aos={fade} data-aos-delay={delay}>
      {/* IMAGE WRAPPER */}
      <div className="relative w-full aspect-square">
        <Image
          src={`/${image}`}
          alt="team member"
          fill={true}
          sizes='100vw'
          className="object-cover w-full h-full"
          loading='lazy'
        />

        {/* SOCIAL ICON WRAPPER */}
        <div
          className={`absolute top-0 left-0 flex flex-col md:gap-3 w-1/8 h-full justify-evenly md:justify-center bg-transparent 
                     ${showIcons? "opacity-100" : "opacity-0"} md:opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300`}
        >
          {[
            { icon: <FaTwitter />, delay: 'delay-[100ms]' },
            { icon: <FaFacebookF />, delay: 'delay-[200ms]' },
            { icon: <FaInstagram />, delay: 'delay-[300ms]' },
            { icon: <FaLinkedinIn />, delay: 'delay-[400ms]' },
          ].map((item, i) => (
            <div
              key={i}
              className={`bg-header-color flex mx-auto h-[20%] md:h-[15%] aspect-square rounded-full transform 
                         opacity-0 -translate-x-10
                         ${showIcons ? 'opacity-100 translate-x-0' : 'md:group-hover:opacity-100 md:group-hover:translate-x-0'}
                         transition-all duration-500 ${item.delay}`}
            >
              {React.cloneElement(item.icon, { className: 'text-white text-md m-auto' })}
            </div>
          ))}
        </div>
      </div>

      {/* TEXT WRAPPER */}
      <div className="flex flex-col gap-3 text-sm md:text-lg lg:text-xl text-text-color mt-4 px-2">
        <h4 className="font-bold capitalize">{name}</h4>
        <h4 className='capitalize'>{position}</h4>
      </div>
    </div>
  )
}

export default TeamCard


