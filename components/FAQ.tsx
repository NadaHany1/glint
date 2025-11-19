'use client';

import { useState } from 'react';
import SectionHeader from './SectionHeader';
import { IoIosArrowDown } from "react-icons/io";
import data from "@/app/data/data.json";

const faqs = data.faq

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id='faq' className='flex flex-col px-[10vw] py-[10vh] bg-gray-50'>
      <SectionHeader title='frequently asked questions'/>
      <div className="space-y-2 w-full md:w-[80%] my-[5vh] m-auto">
        {faqs.map((faq, index: number) => (
          <div key={index} className="border-b border-gray-200 rounded-lg" data-aos='zoom-out-up'>
            <button
              className="w-full flex justify-between items-center p-4 font-medium text-left focus:outline-none"
              onClick={() => toggle(index)}
            >
              <span>{faq.question}</span>
              <span className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                <IoIosArrowDown/>
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40 p-4' : 'max-h-0 p-0'}`}
            >
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
