'use client'

import React, { useEffect, useState, useRef } from 'react'
import SectionHeader from './SectionHeader'
import Image from 'next/image'
import { Charm } from 'next/font/google'
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"
import { useSwipeable } from 'react-swipeable'
import data from "@/app/data/data.json"

const charm = Charm({
  subsets: ['latin'],
  weight: ['700'],
})

interface Testimonial {
  client_name: string
  client_image: string
  text: string
}

const Testimonials = () => {
  const testimonials: Testimonial[] = data.testimonials
  const [counter, setCounter] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
  }

  // Auto-slide with setTimeout (resets on manual click/swipe)
  useEffect(() => {
    resetTimeout()
    timeoutRef.current = setTimeout(() => {
      setCounter((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => resetTimeout()
  }, [counter, testimonials.length])

  // Swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => setCounter((prev) => (prev + 1) % testimonials.length),
    onSwipedRight: () => setCounter((prev) => (prev - 1 + testimonials.length) % testimonials.length),
    preventScrollOnSwipe: true,
    trackTouch: true,
  })

  return (
    <section id='testimonials' className="w-full h-fit px-[10vw] md:px-[25vw] py-[10vh] bg-gray-50 overflow-hidden">
      <SectionHeader title="testimonials" desc="what our customers said" />

      {/* Slider Container */}
      <div {...handlers} className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${counter * 100}%)` }}
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="shrink-0 w-full flex flex-col items-center h-full py-[5vh] gap-[5vh]"
              data-aos="fade-left"
            >
              <div className="flex flex-row justify-between items-center gap-3 max-w-fit">
                <div className="relative w-10 h-[50px] rounded-full overflow-hidden">
                  <Image
                    src={item.client_image}
                    alt="client"
                    fill={true}
                    sizes='10vw'
                    className="object-cover relative"
                  />
                </div>
                <p className="capitalize text-md md:text-lg lg:text-xl">
                  {item.client_name}
                </p>
              </div>
              <p
                className={`text-text-color text-md md:text-xl lg:text-3xl leading-loose text-center ${charm.className}`}
              >
                <FaQuoteLeft className="inline mx-2" />
                {item.text}
                <FaQuoteRight className="inline mx-2" />
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Indicators */}
      <div className="flex flex-row gap-3 justify-center mt-5 w-full">
        {testimonials.map((_, index) => (
          <div
            key={index}
            onClick={() => setCounter(index)}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full border-2 border-gray-300 cursor-pointer transition-all duration-300 ${
              counter === index
                ? 'bg-header-color border-header-color'
                : 'bg-transparent'
            }`}
          ></div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
