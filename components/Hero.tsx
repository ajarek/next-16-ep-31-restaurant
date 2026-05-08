import Image from "next/image"
import SpecialButton from "./SpecialButton"
import { TypewriterEffect } from "./ui/typewriter-effect";
const words = [
    {
      text: "Indulge",
      className: "dark:text-[#ffac12] text-[#ffac12]",
    },
    {
      text: "in",
      className: "dark:text-[#ffac12] text-[#ffac12]",
    },
    {
      text: "Luxurious",
      className: "dark:text-[#ffac12] text-[#ffac12]",
    },
    {
      text: "Flavors",
      className: "dark:text-[#ffac12] text-[#ffac12]",
    },
    
  ];
const Hero = () => {
  return (
    <section className='flex justify-center items-center pt-32'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='flex flex-col gap-8 justify-center'>
          <p className='text-primary text-xl md:text-2xl uppercase tracking-wider'>Experience the best</p>
          <h1 className='text-3xl md:text-6xl font-bold text-primary'>
           <TypewriterEffect words={words} />
          </h1>
          <p className='text-foreground'>
            Where every dish tells a story and every moment lingers. Experience fine dining that captivates your senses.
          </p>
          <div className='flex gap-4'>
            <SpecialButton link="/contact" label="Book a Table"/>
            <SpecialButton link="/menu" label="Our Menu"/>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center gap-4'>
          <div className='relative w-[300px] h-[250px] border-6 border-foreground rounded-bl-none rounded-tr-none rounded-br-[150px] rounded-tl-[150px] overflow-hidden'>
            <Image
              src='/images-home/hero-1.avif'
              alt='Restaurant Interior'
              fill
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              className='object-cover object-center'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='relative w-[300px] h-[250px] border-6 border-foreground rounded-bl-none rounded-tr-none rounded-br-[150px] rounded-tl-[150px] overflow-hidden'>
              <Image
                src='/images-home/hero-2.avif'
                alt='Vercel Logo'
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                className='object-cover object-center'
              />
            </div>

            <div className='relative w-[300px] h-[250px] border-6 border-foreground rounded-bl-none rounded-tr-none rounded-br-[150px] rounded-tl-[150px] overflow-hidden'>
              <Image
                src='/images-home/hero-3.avif'
                alt='Vercel Logo'
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                className='object-cover object-center'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
