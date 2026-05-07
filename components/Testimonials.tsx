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

const Testimonials = () => {
  return (
    <section className='w-full flex flex-col items-center justify-center gap-8 '>
      <div className='w-full  grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center'>
        <div className='w-full flex flex-col md:items-start items-center justify-center gap-4 md:gap-8'>
          <h1>
            <span className='text-primary text-2xl md:text-4xl font-bold '>
              Testimonials
            </span>
          </h1>
          <h3 className='text-xl md:text-2xl font-semibold '>
            Our Guests Speak for Us
          </h3>
          <Carousel className="w-full max-w-64 sm:max-w-160">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="w-full flex h-64 items-center justify-center p-6 ">
                  <span className="text-4xl font-semibold">{index + 1}</span>
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
            <div className='relative w-[520px] h-[350px]  border-2 border-foreground rounded-bl-[100px] rounded-tr-none rounded-br-[100px] rounded-tl-none overflow-hidden'>
              <Image
                src='/images-home/testimonials-1.avif'
                alt='about'
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                loading='eager'
                className='object-cover hover:scale-110 transition-transform duration-500 '
              />
            </div>
            <div className='relative w-[220px] h-[250px]  border-2 border-foreground rounded-bl-none rounded-tr-none rounded-br-[100px] rounded-tl-[100px] overflow-hidden'>
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
    </section>
  )
}

export default Testimonials
