'use client'

import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="w-full fixed top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-indigo-600">InvoZone</div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-indigo-600">Services</a>
          <a href="#" className="text-gray-700 hover:text-indigo-600">Portfolio</a>
          <a href="#" className="text-gray-700 hover:text-indigo-600">About</a>
          <a href="#" className="text-gray-700 hover:text-indigo-600">Contact</a>
        </nav>
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white">
          <a href="#" className="block text-gray-700">Services</a>
          <a href="#" className="block text-gray-700">Portfolio</a>
          <a href="#" className="block text-gray-700">About</a>
          <a href="#" className="block text-gray-700">Contact</a>
        </div>
      )}
    </header>
  )
}
