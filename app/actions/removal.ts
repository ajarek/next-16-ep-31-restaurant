"use server"

import { revalidatePath } from "next/cache"
import { neon } from "@neondatabase/serverless"

export async function removeReservation(reservationId: string) {
  const sql = neon(process.env.DATABASE_URL!)

  await sql`
    DELETE FROM reservations
    WHERE id = ${reservationId}
  `

  revalidatePath("/admin")
}
