'use client'
import React, { useState, useEffect } from 'react'
import { Menu } from 'lucide-react'
import MobileMenu from './MobileMenu'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Track scroll to change navbar background and text color
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { name: 'Home', href: 'home' },
    { name: 'Services', href: 'services' },
    { name: 'Testimonials', href: 'testimonials' },
    { name: 'Contact', href: 'contact' },
  ]

  const aboutLinks = [
    { name: 'Team', href: 'team' },
    { name: 'F & Q', href: 'faq' },
  ]

  // Smooth scroll with 15vh offset
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const yOffset = -window.innerHeight * 0.15
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  const handleLinkClick = (id: string) => {
    scrollToSection(id)
  }


  return (
    <>
      <nav
        className={`
          fixed top-0 w-screen h-[15vh] px-[10vw] flex items-center justify-between z-30 transition-all duration-500
          ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}
        `}
      >
        {/* Logo */}
        <div
          onClick={() => handleLinkClick("home")}
          className={`logo font-extrabold text-4xl transition-colors duration-500 ${
            scrolled ? 'bg-linear-to-r from-gradient-first via-gradient-second to-gradient-third bg-clip-text text-transparent' 
            : 'text-white'
          }`}
        >
          Glint.
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-row gap-6 capitalize text-xl relative">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => handleLinkClick(link.href)}
              className={`border-transparent border-b-2 transition-all duration-500 ${
                scrolled
                  ? 'text-header-color hover:border-header-color'
                  : 'text-white hover:border-white'
              }`}
            >
              {link.name}
            </button>
          ))}

          {/* About Us Dropdown */}
          <div className="relative group">
            <button
              onClick={() => handleLinkClick("about")}
              className={`cursor-pointer transition-colors duration-500 ${
                scrolled ? 'text-header-color' : 'text-white'
              }`}
            >
              About Us
            </button>

            <div className="absolute left-0 top-full flex-col text-xl bg-white text-header-color shadow-lg rounded hidden group-hover:flex pt-2">
              <div className="flex flex-col min-w-[150px]">
                {aboutLinks.map((item) => (
                  <button key={item.name} onClick={() => handleLinkClick(item.href)} className="hover:bg-gray-100 px-5 py-2">
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className={`lg:hidden z-50 ${scrolled ? 'text-header-color' : 'text-white'}`}>
          <Menu className="cursor-pointer" onClick={() => setIsMenuOpen(true)} />
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        scrollToSection={scrollToSection}
      />
    </>
  )
}

export default Navbar