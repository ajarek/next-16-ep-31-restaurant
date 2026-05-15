import Events from "@/components/Events"
import HeroEvents from "@/components/HeroEvents"
import HostEvent from "@/components/HostEvent"
import Testimonials from "@/components/Testimonials"

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
