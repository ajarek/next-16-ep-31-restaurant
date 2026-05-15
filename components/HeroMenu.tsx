import Image from "next/image"
import { TypewriterEffect } from "./ui/typewriter-effect"
const words = [
  {
    text: "A",
    className: "dark:text-[#ffac12] text-[#ffac12]",
  },
  {
    text: "Symphony",
    className: "dark:text-[#ffac12] text-[#ffac12]",
  },
  {
    text: "of",
    className: "dark:text-[#ffac12] text-[#ffac12]",
  },
  {
    text: "Flavors",
    className: "dark:text-[#ffac12] text-[#ffac12]",
  },
]
const HeroMenu = () => {
  return (
    <div className=' w-full flex flex-col items-center justify-center gap-8 '>
      <div className='relative w-full h-[480px] md:h-[600px] '>
        <Image
          src='/images-menu/hero.avif'
          alt='About-As'
          fill
          className='object-cover rounded-xl'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          loading='eager'
        />
        <div className='absolute inset-0 bg-black/20 rounded-xl flex flex-col items-center justify-center gap-8'>
          <div className='flex items-center gap-8'>
            <div className='relative w-[150px] md:w-[200px] h-[180px] md:h-[215px] border border-foreground rounded-bl-none rounded-tr-none rounded-br-[100px] rounded-tl-[100px] overflow-hidden'>
              <Image
                src='/images-home/dining-options-1.avif'
                alt='About-As'
                fill
                className='object-cover rounded-xl'
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                loading='lazy'
              />
            </div>
            <div className='relative w-[150px] md:w-[200px] h-[180px] md:h-[215px] border border-foreground rounded-bl-none rounded-tr-none rounded-br-[100px] rounded-tl-[100px] overflow-hidden'>
              <Image
                src='/images-home/dining-options-2.avif'
                alt='About-As'
                fill
                className='object-cover rounded-xl'
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                loading='lazy'
              />
            </div>
          </div>

          <h1 className='text-5xl font-bold text-primary text-center '>
            <TypewriterEffect words={words} />
          </h1>
          <div className='flex items-center gap-8'>
            <div className='relative w-[150px] md:w-[200px] h-[180px] md:h-[215px] border border-foreground rounded-bl-none rounded-tr-none rounded-br-[100px] rounded-tl-[100px] overflow-hidden'>
              <Image
                src='/images-home/dining-options-3.avif'
                alt='About-As'
                fill
                className='object-cover rounded-xl'
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                loading='lazy'
              />
            </div>
            <div className='relative w-[150px] md:w-[200px] h-[180px] md:h-[215px] border border-foreground rounded-bl-none rounded-tr-none rounded-br-[100px] rounded-tl-[100px] overflow-hidden'>
              <Image
                src='/images-home/dining-options-4.avif'
                alt='About-As'
                fill
                className='object-cover rounded-xl'
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                loading='lazy'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroMenu
