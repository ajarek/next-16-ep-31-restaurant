"use client"
import Image from "next/image"
import SpecialButton from "./SpecialButton"

const AboutUs = () => {
  return (
    <section className='w-full flex flex-col items-center justify-center gap-8 '>
      <div className='w-full  grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center'>
        <div className='w-full flex flex-col md:items-start items-center justify-center gap-4 md:gap-8'>
          <h1>
            <span className='text-primary text-2xl md:text-4xl font-bold '>
              About Us
            </span>
          </h1>
          <h3 className='text-xl md:text-2xl font-semibold '>
            Delicious Food, Warm Atmosphere
          </h3>
          <p className='text-lg md:text-xl  text-text/80'>
            At Stil Sea, dining is more than a meal &mdash; it&apos;s an
            experience. Born from a passion for culinary artistry and refined
            elegance, we bring together world-class flavors, exquisite ambiance,
            and impeccable service. Every dish we serve is thoughtfully crafted,
            telling a story of tradition, creativity, and excellence. Whether
            it&apos;s a quiet dinner for two or a celebration with friends, we
            create moments that linger long after the last bite.
          </p>
          <SpecialButton link='/about' label='Read More' />
        </div>
        <div className='w-full flex flex-col items-center justify-center gap-8'>
          <div className='flex items-center justify-center gap-6'>
            <div className='relative md:w-[220px] md:h-[250px] w-[150px] h-[200px]  border-6 border-foreground rounded-bl-none rounded-tr-none rounded-br-[100px] rounded-tl-[100px] overflow-hidden'>
              <Image
                src='/images-home/about-1.avif'
                alt='about'
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                loading='eager'
                className='object-cover hover:scale-110 transition-transform duration-500 '
              />
            </div>
            <div className='relative md:w-[220px] md:h-[250px] w-[150px] h-[200px]  border-6 border-foreground rounded-bl-none rounded-tr-none rounded-br-[100px] rounded-tl-[100px] overflow-hidden'>
              <Image
                src='/images-home/about-2.avif'
                alt='about'
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                loading='eager'
                className='object-cover  hover:scale-110 transition-transform duration-500 '
              />
            </div>
          </div>
          <div className='relative md:w-[450px] md:h-[250px] w-[300px] h-[200px] border-6 border-foreground rounded-bl-none rounded-tr-[100px] rounded-br-none rounded-tl-[100px] overflow-hidden'>
            <video
              className='object-cover hover:scale-110 transition-transform duration-500 '
              autoPlay={true}
              muted
              loop
            >
              <source src='/movies/about-movie.mp4' type='video/mp4' />
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
