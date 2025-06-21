'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    {
      title: 'What We Do',
      dropdown: [
        {
          label: 'Product Engineering',
          description: 'Product management, design, development, DevOps, testing & security',
          icon: '/images/services/product-engineering.svg',
          href: '/services/product-engineering'
        },
        {
          label: 'Data & AI',
          description: 'Data engineering, analytics, machine learning & AI solutions',
          icon: '/images/services/data-ai.svg',
          href: '/services/data-ai'
        },
        {
          label: 'DevOps & CloudOps',
          description: 'Cloud infrastructure, automation, CI/CD & monitoring',
          icon: '/images/services/devops.svg',
          href: '/services/devops'
        },
        {
          label: 'Emerging Technologies',
          description: 'IoT, AR/VR, edge computing & next-gen tech',
          icon: '/images/services/emerging-tech.svg',
          href: '/services/emerging-tech'
        }
      ]
    },
    {
      title: 'Who We Serve',
      dropdown: [
        {
          label: 'Startups',
          description: 'From idea to MVP and beyond',
          icon: '/images/industries/startups.svg',
          href: '/startups'
        },
        {
          label: 'Enterprises',
          description: 'Digital transformation & innovation',
          icon: '/images/industries/enterprises.svg',
          href: '/enterprises'
        },
        {
          label: 'Rescue Projects',
          description: 'Turn around troubled projects',
          icon: '/images/industries/rescue.svg',
          href: '/rescue-projects'
        }
      ]
    },
    {
      title: 'How We Engage',
      dropdown: [
        {
          label: 'Product Development',
          description: 'End-to-end product development services',
          icon: '/images/engagement/product-dev.svg',
          href: '/engagement/product-development'
        },
        {
          label: 'Managed IT Systems',
          description: 'Dedicated teams for ongoing projects',
          icon: '/images/engagement/managed-it.svg',
          href: '/engagement/managed-it-systems'
        },
        {
          label: 'Team Augmentation',
          description: 'Extend your team with our experts',
          icon: '/images/engagement/team-aug.svg',
          href: '/engagement/team-augmentation'
        }
      ]
    },
    {
      title: 'Hire Dev',
      href: '/hire-developers'
    },
    {
      title: 'Company',
      dropdown: [
        {
          label: 'About Us',
          description: 'Our story, mission & values',
          icon: '/images/company/about.svg',
          href: '/about'
        },
        {
          label: 'Careers',
          description: 'Join our growing team',
          icon: '/images/company/careers.svg',
          href: '/careers'
        },
        {
          label: 'Contact',
          description: 'Get in touch with us',
          icon: '/images/company/contact.svg',
          href: '/contact'
        }
      ]
    }
  ]

  return (
    <header 
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        menuOpen || scrolled ? 'bg-white shadow-[0_2px_24px_0_rgba(0,0,0,0.08)]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-8 py-5">
        <div className="flex justify-between items-center">
          <Link href="/" className="inline-block">
            <Image
              src="/images/logo/logo-white.svg"
              alt="InvoZone Logo"
              width={150}
              height={40}
              priority
              className={`h-12 w-auto transition-colors duration-300 ${
                scrolled ? 'filter invert' : ''
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-[15px] font-medium text-[#1A1A1A] hover:text-[#0052CC] transition-colors duration-200 py-2"
                  >
                    {item.title}
                  </Link>
                ) : (
                  <>
                    <button 
                      className="text-[15px] font-medium text-[#1A1A1A] hover:text-[#0052CC] transition-colors duration-200 py-2 flex items-center"
                    >
                      {item.title}
                      <svg
                        className={`w-2.5 h-2.5 ml-1.5 mt-0.5 transition-transform duration-200 ${
                          activeDropdown === index ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {item.dropdown.length > 0 && activeDropdown === index && (
                      <div 
                        className="absolute left-0 top-full pt-2 w-[380px] bg-white rounded-xl shadow-[0_6px_30px_0_rgba(0,0,0,0.12)] overflow-hidden"
                        style={{ transform: 'translateY(8px)' }}
                      >
                        <div className="py-2">
                          {item.dropdown.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subItem.href}
                              className="flex items-start gap-4 px-6 py-4 hover:bg-[#F5F8FF] transition-colors duration-200 group"
                            >
                              <div className="flex-shrink-0 w-8 h-8">
                                <Image
                                  src={subItem.icon}
                                  alt={subItem.label}
                                  width={32}
                                  height={32}
                                />
                              </div>
                              <div>
                                <div className="text-[15px] font-medium text-[#1A1A1A] group-hover:text-[#0052CC] transition-colors duration-200">
                                  {subItem.label}
                                </div>
                                <div className="text-[13px] text-[#666666] mt-0.5">
                                  {subItem.description}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
            <Link
              href="/careers"
              className="text-[15px] font-medium text-[#1A1A1A] hover:text-[#0052CC] transition-colors duration-200"
            >
              Careers
            </Link>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-2.5 text-[15px] font-medium text-white bg-[#0052CC] rounded-lg hover:bg-[#0043A7] transition-colors duration-200"
            >
              Contact Us
            </a>
          </nav>

          {/* Hamburger Menu Button */}
          <button
            className="w-8 h-8 flex items-center justify-center relative z-50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-[6px]">
              <span className={`block w-full h-[2px] transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2 bg-[#1A1A1A]' : (scrolled ? 'bg-[#1A1A1A]' : 'bg-white')
              }`} />
              <span className={`block w-full h-[2px] transition-all duration-300 ${
                menuOpen ? 'opacity-0' : 'opacity-100'
              } ${scrolled ? 'bg-[#1A1A1A]' : 'bg-white'}`} />
              <span className={`block w-full h-[2px] transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2 bg-[#1A1A1A]' : (scrolled ? 'bg-[#1A1A1A]' : 'bg-white')
              }`} />
            </div>
          </button>
        </div>

        {/* Navigation Menu */}
        <div 
          className={`fixed inset-0 top-[72px] bg-white transition-transform duration-300 ease-in-out ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="h-full overflow-y-auto px-8 py-6">
            {menuItems.map((item, index) => (
              <div key={index} className="border-b border-[#E5E5E5]">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="block py-4 text-[15px] font-medium text-[#1A1A1A]"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                ) : (
                  <>
                    <button
                      className="w-full py-4 flex justify-between items-center text-[15px] font-medium text-[#1A1A1A]"
                      onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
                    >
                      {item.title}
                      <svg
                        className={`w-2.5 h-2.5 transition-transform duration-200 ${
                          activeDropdown === index ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {activeDropdown === index && item.dropdown.length > 0 && (
                      <div className="bg-[#F5F8FF] py-2">
                        {item.dropdown.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.href}
                            className="flex items-start gap-4 px-6 py-4 hover:bg-white/50"
                            onClick={() => setMenuOpen(false)}
                          >
                            <div className="flex-shrink-0 w-6 h-6">
                              <Image
                                src={subItem.icon}
                                alt={subItem.label}
                                width={24}
                                height={24}
                              />
                            </div>
                            <div>
                              <div className="text-[15px] font-medium text-[#1A1A1A]">
                                {subItem.label}
                              </div>
                              <div className="text-[13px] text-[#666666] mt-0.5">
                                {subItem.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
            <Link
              href="/careers"
              className="block py-4 text-[15px] font-medium text-[#1A1A1A] border-b border-[#E5E5E5]"
              onClick={() => setMenuOpen(false)}
            >
              Careers
            </Link>
            <div className="mt-6">
              <a
                href="/contact"
                className="block w-full text-center px-6 py-3 text-[15px] font-medium text-white bg-[#0052CC] rounded-lg hover:bg-[#0043A7] transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
