import Image from "next/image"

const HeroMenu = () => {
  return (
    <div className=' w-full flex flex-col items-center justify-center gap-8 '>
      <div className='relative w-full h-[600px] '>
        <Image
          src='/images-menu/hero.avif'
          alt='About-As'
          fill
          className='object-cover rounded-xl'
        />
        <div className='absolute inset-0 bg-black/20 rounded-xl flex flex-col items-center justify-center gap-8'>
          <div className='flex items-center gap-8'>
            <div className='relative w-[150px] md:w-[200px] h-[180px] md:h-[215px] border border-foreground rounded-bl-none rounded-tr-none rounded-br-[100px] rounded-tl-[100px] overflow-hidden'>
              <Image
                src='/images-home/dining-options-1.avif'
                alt='About-As'
                fill
                className='object-cover rounded-xl'
              />
            </div>
            <div className='relative w-[150px] md:w-[200px] h-[180px] md:h-[215px] border border-foreground rounded-bl-none rounded-tr-none rounded-br-[100px] rounded-tl-[100px] overflow-hidden'>
              <Image
                src='/images-home/dining-options-2.avif'
                alt='About-As'
                fill
                className='object-cover rounded-xl'
              />
            </div>
          </div>

          <h1 className='text-5xl font-bold text-primary text-center '>A Symphony of Flavors</h1>
          <div className='flex items-center gap-8'>
            <div className='relative w-[150px] md:w-[200px] h-[180px] md:h-[215px] border border-foreground rounded-bl-none rounded-tr-none rounded-br-[100px] rounded-tl-[100px] overflow-hidden'>
              <Image
                src='/images-home/dining-options-3.avif'
                alt='About-As'
                fill
                className='object-cover rounded-xl'
              />
            </div>
            <div className='relative w-[150px] md:w-[200px] h-[180px] md:h-[215px] border border-foreground rounded-bl-none rounded-tr-none rounded-br-[100px] rounded-tl-[100px] overflow-hidden'>
              <Image
                src='/images-home/dining-options-4.avif'
                alt='About-As'
                fill
                className='object-cover rounded-xl'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroMenu
