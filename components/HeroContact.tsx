import Image from "next/image"
import { TypewriterEffect } from "./ui/typewriter-effect";
const words = [
    {
      text: "Let’s",
      className: "dark:text-[#ffac12] text-[#ffac12]",
    },
    {
      text: "Connect",
      className: "dark:text-[#ffac12] text-[#ffac12]",
    },
    {
      text: "With",
      className: "dark:text-[#ffac12] text-[#ffac12]",
    },
    {
      text: "Taste",
      className: "dark:text-[#ffac12] text-[#ffac12]",
    },
    
  ];
const HeroContact = () => {
  return (
    <section className=' flex flex-col justify-center items-center pt-8 pb-16'>
      <div className='flex flex-col  items-center justify-start gap-16'>
        <div className='flex flex-col gap-8 justify-center'>
          <h1 className='text-4xl md:text-6xl font-bold text-primary'>
           <TypewriterEffect words={words} />
          </h1>
          <p className='md:text-xl text-lg text-center max-w-2xl text-foreground'>
           Reach out to our team for bookings, private events, or simply to say hello. Your unforgettable dining experience starts with a conversation.
          </p>
         
        </div>
        <div className='grid lg:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-6'>
          <div className='relative w-[360px] md:w-[400px] h-[300px] md:h-[340px]  border-6 border-foreground rounded-bl-none rounded-tr-none rounded-br-[150px] rounded-tl-[150px] overflow-hidden'>
            <Image
              src='/images-contact/contact-1.avif'
              alt='Restaurant Interior'
              fill
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              loading='eager'
              className='object-cover object-center'
            />
          </div>
          
            <div className='relative w-[360px]  md:w-[400px] h-[300px] md:h-[340px] border-6 border-foreground rounded-bl-none rounded-tr-none rounded-br-[150px] rounded-tl-[150px] overflow-hidden'>
              <Image
                src='/images-contact/contact-2.avif'
                alt='Vercel Logo'
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                className='object-cover object-center'
              />
            </div>

            <div className='relative w-[360px]  md:w-[400px] h-[300px] md:h-[340px] border-6 border-foreground rounded-bl-none rounded-tr-none rounded-br-[150px] rounded-tl-[150px] overflow-hidden'>
              <Image
                src='/images-contact/contact-3.avif'
                alt='Vercel Logo'
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                className='object-cover object-center'
              />
            </div>
          
        </div>
      </div>
    </section>
  )
}

export default HeroContact
