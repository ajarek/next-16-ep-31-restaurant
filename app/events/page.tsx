import HeroEvents from "@/components/HeroEvents"
import Testimonials from "@/components/Testimonials"
import React from "react"

const EventsPage = () => {
  return (
    <div className='min-h-screen bg-linear-to-b from-primary/20 to-secondary/10 flex flex-col items-center justify-start gap-8 px-8 sm:px-16 lg:px-24 pt-32'>
     <HeroEvents />
     <Testimonials />   
    </div>
  )
}

export default EventsPage
