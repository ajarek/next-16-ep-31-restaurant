import Image from "next/image"
import { TypewriterEffect } from "./ui/typewriter-effect"
import SpecialButton from "./SpecialButton"
const words = [
  {
    text: "Your",
    className: "dark:text-[#ffac12] text-[#ffac12]",
  },
  {
    text: "Seating",
    className: "dark:text-[#ffac12] text-[#ffac12]",
  },
  {
    text: "Awaits",
    className: "dark:text-[#ffac12] text-[#ffac12]",
  },
  {
    text: "You",
    className: "dark:text-[#ffac12] text-[#ffac12]",
  },
]
const HeroReservation = () => {
  return (
    <div className=' w-full flex flex-col items-center justify-center gap-8 '>
      <div className='relative w-full h-[480px] md:h-[600px] '>
        <Image
          src='/images-reservation/hero-reservation.avif'
          alt='About-As'
          fill
          className='object-cover rounded-xl'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          loading='eager'
        />
        <div className='absolute inset-0 bg-black/50 rounded-xl flex flex-col items-center justify-center gap-8'>
          <h1 className='text-5xl font-bold text-primary text-center '>
            <TypewriterEffect words={words} />
          </h1>
          <p className=' text-center text-white text-xl max-w-2xl '>
            From intimate gatherings to grand celebrations, Still Sea offers the
            perfect ambiance, tailored menus, and exceptional service to make
            every event truly special.
          </p>
          <SpecialButton link='/reservation#reservation' label='Book a Table' />
        </div>
      </div>
    </div>
  )
}

export default HeroReservation
