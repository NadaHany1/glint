import React from 'react'
import ServiceCard from './ServiceCard';
import SectionHeader from './SectionHeader';
import data from "@/app/data/data.json"



const Services = () => {
  return (
    <section id='services' className="flex flex-col px-[10vw] py-[10vh] bg-white">
        <SectionHeader title='our sevices'/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.services.map((service) => (
                <ServiceCard key={service.id} title={service.name} desc={service.description} icon={service.icon as keyof typeof import("react-icons/fa")}/>
            ))}
        </div>
    </section>
  )
}

export default Services
