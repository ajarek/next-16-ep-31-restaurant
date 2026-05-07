"use client"

import { CgCalendarDates } from "react-icons/cg"
import SpecialButton from "./SpecialButton"
import Image from "next/image"
import { FcAlarmClock } from "react-icons/fc"
import { FiCheckCircle } from "react-icons/fi"

const events = [
  {
    id: 1,
    title: "Romantic Nights",
    description:
      "Celebrate love in the most enchanting way. With candlelight, soft music, and a menu made for two, Sizzlo transforms into the perfect romantic escape. Ideal for anniversaries, proposals, or meaningful moments.",
    image: "/images-home/events-3.avif",
    deadline: "Every Saturday",
    timing: "7:00 PM – Close",
    offer: "Includes complimentary dessert + music",
  },
  {
    id: 2,
    title: "Chef’s Table",
    description:
      "Experience the art of cooking up close. Sit at our exclusive chef’s table and witness culinary mastery in action as our head chef prepares a custom multi-course menu before your eyes. Perfect for food lovers and private gatherings.",
    image: "/images-home/events-2.avif",
    deadline: "First Saturday of every month",
    timing: "6:30 PM onwards",
    offer: "Max 8 guests per session",
  },
  {
    id: 3,
    title: "Wine & Dine",
    description:
      "An elegant evening of hand-selected wines perfectly paired with a chef-curated tasting menu. Immerse yourself in rich flavors, soothing ambiance, and conversations that flow like the wine. Ideal for connoisseurs and couples seeking a refined night out.",
    image: "/images-home/events-1.avif",
    deadline: "Every Thursday",
    timing: "7:00 PM – 9:30 PM",
    offer: "Includes 5-course pairing",
  },
]

const Events = () => {
  return (
    <section className='w-full flex flex-col items-center justify-center gap-8'>
      <div className='flex flex-col items-center justify-center gap-2'>
        <h2 className='text-5xl font-playfair font-bold text-primary'>
          Upcoming Events
        </h2>
        <p className='text-lg md:text-xl text-text/80'>
          Join us for special occasions
        </p>
      </div>

      <div className='w-full flex flex-col gap-8'>
        {events.map((event) => (
          <div
            key={event.id}
            className='relative w-full border-6 border-foreground rounded-bl-none rounded-tr-none rounded-br-[100px] rounded-tl-[100px] p-8 shadow-2xl'
          >
            <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center'>
              <div className='group/img relative w-[350px] md:w-[450px] h-[300px] md:h-[350px]  border-2 border-foreground rounded-bl-none rounded-tr-none rounded-br-[100px] rounded-tl-[100px] overflow-hidden'>
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className={`object-cover transition-transform duration-500 group-hover/img:scale-110 `}
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw'
                  loading="eager"
                  
                />
                <div
                  className={`absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-500 `}
                />
                
              </div>
              <div
                  className={`flex flex-col items-start justify-center gap-4`}
                >
                  <h3 className='text-3xl md:text-4xl text-primary font-playfair font-bold mb-2'>
                    {event.title}
                  </h3>
                  <p className='text-lg md:text-xl  text-text/80'>{event.description}</p>
                  <div className='flex flex-col items-start justify-center gap-2'>
                    <p className='text-lg md:text-xl  text-text/80'><CgCalendarDates className="inline-block mr-4" size={20} color="var(--color-primary)" />{event.deadline}</p>
                    <p className='text-lg md:text-xl  text-text/80'><FcAlarmClock className="inline-block mr-4" size={20} color="var(--color-primary)" />{event.timing}</p>
                    <p className='text-lg md:text-xl  text-text/80'><FiCheckCircle className="inline-block mr-4" size={20} color="var(--color-primary)" />{event.offer}</p>
                  </div>
                </div>
            </div>
          </div>
        ))}
      </div>

      <div className='w-full flex items-center justify-center gap-4 mt-6'>
        <SpecialButton link='/events' label='View All Events' />
      </div>
    </section>
  )
}

export default Events
