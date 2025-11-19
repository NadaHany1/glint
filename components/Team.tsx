import React from 'react'
import SectionHeader from './SectionHeader'
import TeamCard from './TeamCard'
import data from "@/app/data/data.json";

const members = data.team;

const Team = () => {
  return (
    <section id='team' className='w-full h-screen px-[10vw] py-[10vh] bg-white max-h-max min-h-max'>
        <SectionHeader title="our team" desc='some description that explain the content included in this section' />

        <div className='grid grid-cols-2 lg:grid-cols-4 gap-5'>
            {members.map((member, index) => (
                <TeamCard key={member.id}  name={member.name} position={member.position} image={member.image} fade="fade-up" delay={(index%4)*100}/>
            ))}
        </div>

    </section>
  )
}

export default Team
