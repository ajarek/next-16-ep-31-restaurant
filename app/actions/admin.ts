"use server";

import { neon } from "@neondatabase/serverless";

export async function getAdminDashboardData() {
  const sql = neon(process.env.DATABASE_URL!);

  const [users, reservations] = await Promise.all([
    sql`
      SELECT id, name, email, role, "emailVerified", "createdAt", banned
      FROM neon_auth."user"
      ORDER BY "createdAt" DESC
    `,
    sql`
      SELECT
        r.id,
        r.namereservation,
        r.partysize,
        r.date,
        r.time,
        r.timeslot,
        r.created_at,
        u.email AS user_email
      FROM reservations r
      LEFT JOIN neon_auth."user" u ON u.id::text = r.userid
      ORDER BY r.created_at DESC
    `,
  ]);

  return { error: null, users, reservations };
}
