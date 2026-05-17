import type { Metadata } from "next"
import HeroReservation from "@/components/HeroReservation"
import RequestReservation from "@/components/RequestReservation"

export const metadata: Metadata = {
  title: "Reservations",
  description:
    "Book your table at Still Sea in Kołobrzeg. Reserve your spot for an unforgettable fine dining experience. Simple online reservation process.",
}

const ReservationPage = () => {
  return (
    <div className='min-h-screen bg-linear-to-b from-primary/20 to-secondary/10 flex flex-col items-center justify-start gap-8 px-8 sm:px-16 lg:px-24 pt-30'>
      <HeroReservation />
      <RequestReservation />
    </div>
  )
}

export default ReservationPage
