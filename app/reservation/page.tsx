import HeroReservation from "@/components/HeroReservation"
import RequestReservation from "@/components/RequestReservation"

const ReservationPage = () => {
  return (
    <div className='min-h-screen bg-linear-to-b from-primary/20 to-secondary/10 flex flex-col items-center justify-start gap-8 px-8 sm:px-16 lg:px-24 pt-30'>
      <HeroReservation />
      <RequestReservation />
    </div>
  )
}

export default ReservationPage
