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
        <div className='absolute inset-0 bg-black/40 rounded-xl flex flex-col items-center justify-center'>
          <h1 className='text-5xl font-bold text-white text-center mb-8 '>
            A Symphony of Flavors
          </h1>
          <button className='px-8 py-4 bg-primary text-white rounded-lg hover:bg-secondary transition-colors'>
            View Menu
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroMenu
