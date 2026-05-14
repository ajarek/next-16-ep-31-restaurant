"use server";

import { neon } from "@neondatabase/serverless";

export async function createReservation(data: {
  partySize: number;
  date: Date;
  time: string;
  timeSlot: string;
  nameReservation: string;
  userId: string;
}) {
  try {
    const sql = neon(process.env.DATABASE_URL!);
    
    // date.toISOString() will be something like "2026-05-14T00:00:00.000Z", which postgres can cast to DATE.
    await sql`
      INSERT INTO reservations (partysize, date, time, timeslot, namereservation, userid)
      VALUES (${data.partySize}, ${data.date.toISOString()}, ${data.time}, ${data.timeSlot}, ${data.nameReservation}, ${data.userId})
    `;

    return { success: true };
  } catch (error) {
    console.error("Error creating reservation", error);
    return { success: false, error: "Could not create reservation" };
  }
}
