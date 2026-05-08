"use client"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "./ui/card"

const testimonialArray = [
  {
    id: 1,
    name: "John Doe",
    content: '“We celebrated our anniversary here and it was magical. Romantic setting, delicious food, and warm hospitality — Still Sea made our night perfect.”',
  },
  {
    id: 2,
    name: "Jane Smith",
    content: '"Still Sea turned our dinner into a delight! The flavors were rich, service was top-notch, and the ambiance was cozy. Can’t wait to return!"',
  },
  {
    id: 3,
    name: "Bob Johnson",
    content: '"From starters to dessert, everything at Still Sea was incredible. Friendly staff and an unforgettable experience. Highly recommended!"',
  },
  {
    id: 4,
    name: "Alice Williams",
    content: '“We celebrated our anniversary here and it was magical. Romantic setting, delicious food, and warm hospitality — Still Sea made our night perfect.”',
  },
]

const Testimonials = () => {
  return (
    <section className='w-full flex flex-col items-center justify-center gap-8 '>
      <div className='w-full  grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center '>
        <div className='w-full flex flex-col md:items-start items-center justify-center gap-4 md:gap-8'>
          <h1>
            <span className='text-primary text-2xl md:text-4xl font-bold '>
              Testimonials
            </span>
          </h1>
          <h3 className='text-xl md:text-2xl font-semibold '>
            Our Guests Speak for Us
          </h3>
          <Carousel className='w-full max-w-84 md:max-w-160'>
            <CarouselContent>
              {testimonialArray.map((testimonial) => (
                <CarouselItem key={testimonial.id}>
                  <div className='p-1'>
                    <Card>
                      <CardContent className='w-full flex flex-col gap-6 h-64 items-center justify-center p-6 '>
                        <span className='text-base font-semibold'>
                          {testimonial.content}
                        </span>
                        <span className='text-xl font-semibold'>
                          {testimonial.name}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className='w-full flex flex-col items-center justify-center gap-8'>
          <div className='flex flex-col items-center justify-center gap-6'>
            <div className='relative w-[360px] md:w-[520px] h-[260px] md:h-[350px]  border-2 border-foreground rounded-bl-[100px] rounded-tr-none rounded-br-[100px] rounded-tl-none overflow-hidden'>
              <video
                src='/movies/testimonials-movie.mp4'
                autoPlay
                loop
                muted
                className='object-cover w-full h-full'
              />
            </div>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 place-items-center  gap-4 p-8 '>
              <div className='w-full h-full flex items-center justify-center'>
                <h3 className='text-xl text-center text-wrap font-semibold '>
                  Unforgettable flavors and a night to remember.
                </h3>
              </div>
              <div className='relative md:w-[220px] w-[360px] h-[300px] md:h-[250px]  border-2 border-foreground rounded-bl-none rounded-tr-none rounded-br-[100px] rounded-tl-[100px] overflow-hidden'>
                <Image
                  src='/images-home/testimonials-2.avif'
                  alt='about'
                  fill
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  loading='eager'
                  className='object-cover  hover:scale-110 transition-transform duration-500 '
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
