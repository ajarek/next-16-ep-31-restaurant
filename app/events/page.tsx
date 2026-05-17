import type { Metadata } from "next"
import Events from "@/components/Events"
import HeroEvents from "@/components/HeroEvents"
import HostEvent from "@/components/HostEvent"
import Testimonials from "@/components/Testimonials"

export const metadata: Metadata = {
  title: "Events & Private Dining",
  description:
    "Host your special event at Still Sea in Kołobrzeg. From romantic dinners to corporate gatherings, we create unforgettable experiences with tailored menus and elegant ambiance.",
}

const EventsPage = () => {
  return (
    <div className='min-h-screen bg-linear-to-b from-primary/20 to-secondary/10 flex flex-col items-center justify-start gap-8 px-8 sm:px-16 lg:px-24 pt-32'>
      <HeroEvents />
      <Testimonials />
      <Events />
      <HostEvent />
    </div>
  )
}

export default EventsPage
