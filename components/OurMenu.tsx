import Image from "next/image"
import { menuItems } from "@/data/menu-items"

const OurMenu = () => {
  return (
    <section className='w-full flex flex-col items-center justify-center gap-8'>
      <div className=' flex flex-col items-center justify-center gap-2'>
        <h2 className='text-5xl font-playfair font-bold text-primary'>
          Our Menu
        </h2>
        <p className='text-lg md:text-xl  text-text/80'>
          A Symphony of Flavors
        </p>
      </div>
      <div className='w-full  grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center'>
        <div className='relative w-[500px] h-[550px] border-6 border-foreground rounded-bl-none rounded-tr-none rounded-br-[100px] rounded-tl-[100px] overflow-hidden'>
          <Image src='/images-home/dining-options-1.avif' alt='menu' fill />
        </div>

        <div className='flex flex-col justify-center items-start gap-6 w-full'>
         {menuItems
         .filter((menuItem) => menuItem.type === "Breakfast")
         .map((menuItem) => (
            <div key={menuItem.id} className='w-full flex flex-col gap-4'>
            <div className='flex items-center justify-between w-full ' >
              <div>
                <h2 className='text-xl font-semibold text-primary'>
                  {menuItem.name}
                </h2>
                <p className='text-md text-text/80'>
                  {menuItem.description}
                </p>
              </div>
              <p className='text-2xl font-semibold'>{menuItem.price}</p>
            </div>
            <div className='border-2 w-full h-px bg-primary border-dashed'></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurMenu
