import React from 'react'
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";


const Footer = () => {

  const links = [
    { name: 'Home', href: 'home' },
    { name: 'Services', href: 'services' },
    { name: 'Portfolio', href: 'portfolio' },
    { name: 'Testimonials', href: 'testimonials' },
    { name: 'Blog', href: 'blog' },
    { name: 'Contact', href: 'contact' },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const yOffset = -window.innerHeight * 0.15 // 15vh offset
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <footer className='flex flex-col w-screen h-fit bg-slate-800 text-text-color text-sm md:text-md px-[20vw] lg:px-[10vw] pt-[5vh]'>
        <h1 className='text-3xl md:text-5xl xl:text-6xl max-w-max mb-[5vh] capitalize font-bold bg-linear-to-r from-gradient-first via-gradient-second to-gradient-third bg-clip-text text-transparent'>glint.</h1>
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-10 justify-evenly items-start w-full'>
            {/* ABOUT */}
            <div className='flex-1'>
                <h3 className='text-white text-[1.2em] mb-4'>About Us</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nemo cumque in quia magni illum earum voluptate nisi dolorum totam sapiente iure officia deleniti, voluptas quod quaerat placeat repellat labore!</p>
            </div>
            {/* QUICK LINKS */}
            <div className='flex-1'>
                <h3 className='text-white text-[1.2em] mb-4'>Quick Links</h3>
                <div className='flex flex-col items-start gap-1 text-left'>
                    {links.map((link) => (
                        <button
                        key={link.name}
                        onClick={() => scrollToSection(link.href)}
                        className={`border-none bg-transparent transition-all duration-500 hover:text-white`}
                        >
                        {link.name}
                        </button>
                    ))}
                </div>

            </div>
            {/* SUBSCRIBE */}
            <div className='flex-1'>
                <h3 className='text-white text-[1.2em] mb-4'>Subscribe Newaletter</h3>
                <form className='flex flex-col gap-5'>
                    <input type="text" placeholder='Enter Email' className='w-full p-2 rounded-full border border-text-color focus:outline-none focus:border-header-color'/>
                    <button type='submit' className="bg-header-color text-white w-1/2 py-2 px-4 rounded-full">Send</button>
                </form>
            </div>
            {/* SOCIAL MEDIA */}
            <div className='flex-1'>
                <h3 className='text-white text-[1.2em] mb-4'>Follow Us</h3>
                <div className="flex gap-[15%] text-[1.8em]">
                    <FaFacebookF className='transition-all duration-500 hover:text-white'/>
                    <FaInstagram className='transition-all duration-500 hover:text-white'/>
                    <FaTwitter className='transition-all duration-500 hover:text-white'/>
                    <FaLinkedinIn className='transition-all duration-500 hover:text-white'/>
                </div>
            </div>
        </div>
        <div className=" mt-[5vh] border-t border-text-color p-5 text-center ">
            <p>Copyright ©2025 All rights reserved | This template is made by <span className='text-header-color'>Nada Hany</span></p>
        </div>
        
      
    </footer>
  )
}

export default Footer
