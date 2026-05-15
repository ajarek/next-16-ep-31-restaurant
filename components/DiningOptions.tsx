import Image from "next/image"

const DiningOptions = () => {
  return (
    <section className='w-full flex flex-col items-center justify-center gap-8'>
      <div className=' flex flex-col items-center justify-center gap-2'>
        <h2 className='text-5xl font-playfair font-bold text-primary'>
          Dining Options
        </h2>
        <p className='text-lg md:text-xl  text-text/80'>
          A Taste for Every Time.
        </p>
      </div>
      <div className='w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center'>
        <div className='relative w-[300px] h-[350px] border-6 border-foreground rounded-bl-none rounded-tr-none rounded-br-[100px] rounded-tl-[100px] overflow-hidden'>
          <Image
            fill
            className='w-full h-auto rounded-xl object-cover sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"'
            src='/images-home/dining-options-1.avif'
            alt='dining option'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            loading='eager'
          />
        </div>
        <div className='relative w-[300px] h-[350px] border-6 border-foreground rounded-bl-none rounded-tr-none rounded-br-[100px] rounded-tl-[100px] overflow-hidden'>
          <Image
            fill
            className='w-full h-auto rounded-xl object-cover sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"'
            src='/images-home/dining-options-2.avif'
            alt='dining option'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            loading='eager'
          />
        </div>
        <div className='relative w-[300px] h-[350px] border-6 border-foreground rounded-bl-none rounded-tr-none rounded-br-[100px] rounded-tl-[100px] overflow-hidden'>
          <Image
            fill
            className='w-full h-auto rounded-xl object-cover sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"'
            src='/images-home/dining-options-3.avif'
            alt='dining option'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            loading='eager'
          />
        </div>
        <div className='relative w-[300px] h-[350px] border-6 border-foreground rounded-bl-none rounded-tr-none rounded-br-[100px] rounded-tl-[100px] overflow-hidden'>
          <Image
            fill
            className='w-full h-auto rounded-xl object-cover sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"'
            src='/images-home/dining-options-4.avif'
            alt='dining option'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            loading='eager'
          />
        </div>
      </div>
    </section>
  )
}

export default DiningOptions
