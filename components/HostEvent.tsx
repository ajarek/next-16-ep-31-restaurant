import SpecialButton from "./SpecialButton"

const HostEvent = () => {
  return (
    <div className=' w-full flex flex-col items-center justify-center gap-8 mt-20 '>
      <div className='relative w-full h-[400px] bg-[url("/images-events/event-host.avif")] bg-cover bg-center rounded-bl-[100px] rounded-tr-[100px] rounded-br-none rounded-tl-none'>
        <div className='w-3/4 md:w-1/2 absolute -top-10 -bottom-10 right-1/2 transform translate-x-1/2 bg-primary/90 flex flex-col items-center justify-center gap-4 rounded-bl-none rounded-tr-none rounded-br-[100px] rounded-tl-[100px] p-4 md:p-8'>
          <h2 className='text-2xl text-center md:text-4xl font-playfair font-bold text-background '>
            Host Your Event with Still Sea{" "}
          </h2>
          <p className='text-sm md:text-xl text-background/80'>Whether it&apos;s a birthday bash, corporate dinner, or intimate celebration, Still Sea offers the perfect setting. Let us handle the details while you enjoy every moment.</p>
          <SpecialButton link='/contact' label='Book Your Event' />
        </div>
      </div>
    </div>
  )
}

export default HostEvent
