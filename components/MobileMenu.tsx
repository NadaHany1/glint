'use client'
import React, { useState } from 'react'
import { X, ChevronDown, ChevronUp } from 'lucide-react'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  scrollToSection: (id: string) => void
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, scrollToSection }) => {
  const [isAboutOpen, setIsAboutOpen] = useState(false)

  if (!isOpen) return null

    const mainLinks = [
    { name: 'Home', href: 'home' },
    { name: 'Services', href: 'services' },
    { name: 'Portfolio', href: 'portfolio' },
    { name: 'Testimonials', href: 'testimonials' },
    { name: 'Blog', href: 'blog' },
    { name: 'Contact', href: 'contact' },
  ]

  const aboutLinks = [
    { name: 'Team', href: 'team' },
    { name: 'F & Q', href: 'faq' },
  ]

  const handleClick = (id: string) => {
    scrollToSection(id)
    onClose()
  }

  return (
    <div className="fixed w-[75vw] h-screen top-0 right-0 bg-white z-40 flex flex-col p-6 text-2xl shadow-xl overflow-y-auto">
      {/* Close button */}
      <button onClick={onClose} className="mb-10">
        <X />
      </button>

      {/* Main mapped links */}
      {mainLinks.map(link => (
        <button
          key={link.name}
          onClick={() => handleClick(link.href)}
          className="block mb-4 hover:text-blue-500 transition"
        >
          {link.name}
        </button>
      ))}

      {/* About section */}
      <div className="w-full mt-4">
        <div className="relative text-center">
          <button
            onClick={() => handleClick("about")}
            className="hover:text-blue-500 transition"
          >
            About Us
          </button>

          <button onClick={() => setIsAboutOpen(!isAboutOpen)} className='relative left-5 md:left-20'>
            {isAboutOpen ? <ChevronUp /> : <ChevronDown />}
          </button>
        </div>

        <div
          className={`transition-all overflow-hidden duration-500 flex flex-col items-center ${
            isAboutOpen ? "max-h-40 mt-3 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {aboutLinks.map(item => (
            <button
              key={item.name}
              onClick={() => handleClick(item.href)}
              className="block text-lg pl-6 py-2 text-gray-600 hover:text-blue-500"
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MobileMenu
