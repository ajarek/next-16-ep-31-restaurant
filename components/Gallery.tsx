"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import { X } from 'lucide-react'

const images = [
  '/images-home/about-1.avif',
  '/images-home/about-2.avif',
  '/images-home/dining-options-1.avif',
  '/images-home/dining-options-2.avif',
  '/images-home/dining-options-3.avif',
  '/images-home/dining-options-4.avif',
  '/images-home/events-1.avif',
  '/images-home/events-2.avif',
  '/images-home/events-3.avif',
  '/images-home/gourmet-center.avif',
  '/images-home/gourmet-left.avif',
  '/images-home/gourmet-right.avif',
  '/images-home/hero-1.avif',
  '/images-home/hero-2.avif',
  '/images-home/hero-3.avif',
  '/images-home/testimonials-2.avif'
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className='w-full flex flex-col items-center justify-center gap-12 py-16 overflow-hidden'>
      <div className='flex flex-col items-center justify-center gap-2'>
        <h2 className='text-5xl font-playfair font-bold text-primary'>
          Gallery
        </h2>
        <p className='text-lg md:text-xl text-text/80'>
          Flavors Captured in Frames
        </p>
      </div>

      {/* Infinite scrolling gallery container */}
      <div className='relative flex overflow-x-hidden w-full group py-4'>
        <div className='flex animate-marquee group-hover:pause'>
          {[...images, ...images].map((src, index) => (
            <div 
              key={index} 
              className='relative w-64 h-64 md:w-80 md:h-80 mx-2 md:mx-4 flex-shrink-0 cursor-pointer overflow-hidden rounded-xl hover:scale-[1.03] transition-transform duration-300 shadow-lg'
              onClick={() => setSelectedImage(src)}
            >
              <Image 
                src={src} 
                alt={`Gallery image ${index + 1}`} 
                fill 
                className='object-cover'
                sizes="(max-width: 768px) 16rem, 20rem"
                loading='eager'
              />
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal overlay */}
      {selectedImage && (
        <div 
          className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4'
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className='absolute top-6 right-6 text-white hover:text-primary transition-colors z-[60]'
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X size={40} strokeWidth={1.5} />
          </button>
          <div 
            className='relative w-full max-w-5xl h-[80vh] md:h-[90vh] rounded-lg overflow-hidden'
            onClick={(e) => e.stopPropagation()}
          >
            <Image 
              src={selectedImage} 
              alt="Enlarged gallery image" 
              fill 
              className='object-contain'
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading='eager'
            />
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery