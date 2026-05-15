import Image from 'next/image'
import SpecialButton from './SpecialButton'

const Gourmet = () => {
  return (
    <div className='relative min-h-[600px] w-full flex items-center justify-center rounded-md'>
      <Image
        src='/images-home/gourmet-center.avif'
        alt='gourmet'
        fill
        className='object-cover object-center rounded-lg'
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        priority
      />


      <div className='absolute md:left-60 md:right-60 left-4 right-4 md:h-90 h-80 flex items-center justify-between bg-primary/60 p-4 border-4 border-primary rounded-bl-none rounded-tr-none rounded-br-[100px] rounded-tl-[100px]'>
        <div className='relative w-full md:max-w-[185px] md:h-full h-12 '>
          <Image
            src='/images-home/gourmet-left.avif'
            alt='gourmet'
            fill
            className='object-cover object-center'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            priority
          />
        </div>
        <div className='text-white text-center'>
          <h1 className='text-2xl md:text-5xl text-foreground font-bold mb-4'>Your Gourmet Moment Starts Here</h1>
          <div className='text-xl flex flex-col md:flex-row items-center justify-center gap-4'>
            <SpecialButton label="Book Your Table" link='/reservation' className='bg-secondary text-secondary-foreground ' />
            <SpecialButton label="View Menu" link='/menu' className='bg-secondary text-secondary-foreground ' />
          </div>
        </div>
        <div className='relative w-full md:max-w-[185px] md:h-full h-12'>
          <Image
            src='/images-home/gourmet-right.avif'
            alt='gourmet'
            fill
            className='object-cover object-center'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            priority
          />
        </div>
      </div>
    </div>
  )
}

export default Gourmet