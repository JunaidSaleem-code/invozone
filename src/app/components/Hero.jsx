'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  return (
    <div className="relative w-full min-h-screen bg-[#0A0A0A]">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/images/hero/hero-main.svg"
        onCanPlayThrough={() => setIsVideoLoaded(true)}
        className="absolute top-0 left-0 w-full h-full object-cover object-fit-cover z-0"
        src="/videos/hero-video.mp4"
      />
      Overlay
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-start min-h-screen container px-4 pt-32 max-w-[800px] ">
        {!isVideoLoaded && (
          <div className="absolute inset-0 flex items-center justify-center z-30 text-white text-lg font-semibold">
            Loading video...
          </div>
        )}
        <span className="inline-block mb-4 px-3 py-1 border border-white rounded-full text-white text-sm font-semibold max-w-max">
          Software Development Consulting
        </span>
        <h1 className="text-[56px] leading-[1.15] font-bold text-white mb-6">
          Future-Driven Innovations.
        </h1>
        <p className="text-[20px] leading-[1.5] text-white/80 mb-12 max-w-[600px]">
          Fostering Growth For Startups, Enterprises, And Innovators.
        </p>

        {/* CTA Button */}
        <a
          href="https://calendly.com/invozone"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-4 bg-[#0052CC] hover:bg-[#0043A7] transition-colors duration-300 rounded-full px-6 py-4 text-white font-semibold max-w-max"
        >
          <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 text-[#0052CC]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6l4 2"
              />
            </svg>
          </div>
          Book a 15 min Call
        </a>
      </div>
    </div>
  )
}
