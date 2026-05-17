import Image from "next/image"
import { TypewriterEffect } from "./ui/typewriter-effect"
const words = [
  {
    text: "Who",
    className: "dark:text-[#ffac12] text-[#ffac12]",
  },
  {
    text: "We",
    className: "dark:text-[#ffac12] text-[#ffac12]",
  },
  {
    text: "Are",
    className: "dark:text-[#ffac12] text-[#ffac12]",
  },
]

const HeroAbout = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-8 w-full'>
      <div className='max-w-4xl mx-auto text-center '>
        <h1 className='text-5xl font-bold text-primary text-center mb-8 '>
          <TypewriterEffect words={words} />
        </h1>
        <p className='text-xl text-center'>
          At Still Sea, we believe fine dining is more than just a meal —
          it&apos;s a beautifully crafted experience. Our passion lies in
          combining modern culinary creativity with timeless sophistication,
          delivering dishes that captivate both the eyes and the palate.
        </p>
      </div>
      <div className=''>
        <video
          src='/movies/page-about-movie.mp4'
          autoPlay
          loop
          muted
          className='w-full h-full object-cover rounded-xl'
        ></video>
      </div>
      <div className='relative w-full flex flex-col items-center justify-center my-8 gap-4'>
        <div className='static md:absolute top-20 left-10 w-120 p-4 bg-background/80 border-2 shadow-2xl z-10 rounded-2xl'>
          <h2 className='text-2xl font-bold text-primary text-center mb-8 '>
            Our Philosophy
          </h2>
          <p>
            We believe dining is an art — crafted with passion, precision, and
            soul. Every plate tells a story, designed to delight both the senses
            and the spirit.
          </p>
        </div>
        <div className='relative w-[300px] h-[350px] md:w-[500px] md:h-[550px] border-6 border-foreground rounded-bl-none rounded-tr-none rounded-br-[100px] rounded-tl-[100px] overflow-hidden'>
          <Image
            src='/images-about/about.avif'
            alt='Still Sea Restaurant interior with warm and elegant ambiance'
            fill
            className='object-cover rounded-xl'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            loading='eager'
            priority={true}
          />
        </div>
        <div className='static md:absolute right-10 bottom-20 w-120 p-4 bg-background/80 border-2 shadow-2xl z-10 rounded-2xl'>
          <h2 className='text-2xl font-bold text-primary text-center mb-8 '>
            Our Ambiance
          </h2>
          <p>
            Elegant lighting, soft textures, and curated sounds come together to
            create an atmosphere where every meal feels intimate, luxurious, and
            truly special.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HeroAbout
