import Image from "next/image"
import { FaCocktail } from "react-icons/fa"
import { FaBowlFood } from "react-icons/fa6"
import { TbHearts, TbSalt } from "react-icons/tb"

const WhyUs = () => {
  return (
    <div className='mt-20 w-full'>
      <h2 className='text-5xl font-bold text-primary text-center mb-8 '>
        Why Us?
      </h2>
      <p className='text-center text-lg text-gray-600 mb-12'>
        What Sets Us Apart
      </p>
      <div className='w-full grid grid-cols-1 md:grid-cols-2  gap-4 place-items-center'>
        <div className='w-full grid grid-cols-1 md:grid-cols-2  gap-8 '>
          <div className='h-64 flex flex-col items-center justify-center gap-4 border-2 p-4 rounded-xl shadow-2xl shadow-foreground'>
            <div className='text-4xl text-primary p-4 bg-primary/20 rounded-full'>
              <FaCocktail />
            </div>
            <h3 className='text-2xl font-bold text-primary'>
              Elegant Ambiance
            </h3>
            <p className='max-w-48 text-center text-lg'>
              Warm lights and refined interior charm.
            </p>
          </div>
          <div className='h-64 flex flex-col items-center justify-center gap-4 border-2 p-4 rounded-xl shadow-2xl shadow-foreground'>
            <div className='text-4xl text-primary p-4 bg-primary/20 rounded-full'>
              <TbSalt />
            </div>
            <h3 className='text-2xl font-bold text-primary'>
              Exquisite Cuisine
            </h3>
            <p className='max-w-48 text-center text-lg'>
              Fresh ingredients and masterful techniques.
            </p>
          </div>
          <div className='relative mx-auto w-[400px] h-[300px] lg:w-[650px] md:h-[450px] border-6 border-foreground rounded-bl-none rounded-tr-none rounded-br-[100px] rounded-tl-[100px] overflow-hidden'>
            <Image
              src='/images-about/why-us-bottom.avif'
              alt='Why choose Still Sea'
              fill
              className='object-cover rounded-xl'
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              loading='eager'
              priority={true}
            />
          </div>
        </div>
        <div className='w-full flex flex-col items-center justify-center gap-8'>
          <div className='relative mx-auto w-[400px] h-[300px] lg:w-[650px] md:h-[450px] border-6 border-foreground rounded-bl-none rounded-tr-none rounded-br-[100px] rounded-tl-[100px] overflow-hidden'>
            <Image
              src='/images-about/why-us-top.avif'
              alt='Why choose Still Sea'
              fill
              className='object-cover rounded-xl'
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              loading='eager'
              priority={true}
            />
          </div>
          <div className='w-full grid grid-cols-1 md:grid-cols-2  gap-4'>              <div className='h-64 flex flex-col items-center justify-center gap-4 border-2 p-4 rounded-xl shadow-2xl shadow-foreground'>
              <div className='text-4xl text-primary p-4 bg-primary/20 rounded-full'>
                <FaBowlFood />
              </div>
              <h3 className='text-2xl font-bold text-primary'>
                Gourmet Dining
              </h3>
              <p className='max-w-48 text-center text-lg'>
                A culinary journey crafted with passion.
              </p>
            </div>
            <div className='h-64 flex flex-col items-center justify-center gap-4 border-2 p-4 rounded-xl shadow-2xl shadow-foreground'>
              <div className='text-4xl text-primary p-4 bg-primary/20 rounded-full'>
                <TbHearts />
              </div>
              <h3 className='text-2xl font-bold text-primary'>
                Made with Love
              </h3>
              <p className='max-w-48 text-center text-lg'>
                Every dish is prepared with heart and soul.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyUs
