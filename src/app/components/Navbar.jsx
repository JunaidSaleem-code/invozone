'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  const menuItems = [
    {
      title: 'What We Do',
      dropdown: [
        'Product Engineering',
        'Data & Artificial Intelligence',
        'DevOps & CloudOps',
        'Emerging Technologies',
        'Blockchain & Web 3.0'
      ]
    },
    {
      title: 'Who We Serve',
      dropdown: [
        'Startups',
        'Enterprises',
        'Rescue Projects'
      ]
    },
    {
      title: 'How We Engage',
      dropdown: [
        'Product Development',
        'Managed IT Systems',
        'Team Augmentation'
      ]
    },
    {
      title: 'Hire Dev',
      dropdown: []
    },
    {
      title: 'Company',
      dropdown: [
        'About Us',
        'Careers',
        'Contact Us'
      ]
    }
  ]

  return (
    <header className="w-full fixed top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-indigo-600">
            InvoZone
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="text-gray-700 hover:text-indigo-600 py-2 flex items-center">
                  {item.title}
                  {item.dropdown.length > 0 && (
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>
                
                {item.dropdown.length > 0 && activeDropdown === index && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                    {item.dropdown.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                      >
                        {subItem}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="https://calendly.com/invozone"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
            >
              Book a 15 min Call
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="lg:hidden mt-4 space-y-2">
            {menuItems.map((item, index) => (
              <div key={index} className="border-b border-gray-200 pb-2">
                <button
                  className="w-full text-left text-gray-700 py-2 flex justify-between items-center"
                  onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
                >
                  {item.title}
                  {item.dropdown.length > 0 && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>
                {activeDropdown === index && item.dropdown.length > 0 && (
                  <div className="pl-4 space-y-2 mt-2">
                    {item.dropdown.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href="#"
                        className="block text-gray-600 hover:text-indigo-600"
                      >
                        {subItem}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="https://calendly.com/invozone"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-6 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors duration-200 mt-4"
            >
              Book a 15 min Call
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
