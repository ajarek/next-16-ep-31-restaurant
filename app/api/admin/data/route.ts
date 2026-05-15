import { NextRequest, NextResponse } from "next/server"
import { neon } from "@neondatabase/serverless"

const NEON_AUTH_BASE = process.env.NEXT_PUBLIC_AUTH_BASE_URL

if (!NEON_AUTH_BASE) {
  throw new Error("Missing NEXT_PUBLIC_AUTH_BASE_URL environment variable")
}

async function getAdminUser(request: NextRequest) {
  const cookieHeader = request.headers.get("cookie") ?? ""

  if (!cookieHeader) return null

  try {
    const res = await fetch(`${NEON_AUTH_BASE}/get-session`, {
      headers: {
        cookie: cookieHeader,
      },
      cache: "no-store",
    })

    if (!res.ok) return null

    const data = await res.json()
    const user = data?.user

    if (!user || user.role !== "admin") return null
    return user
  } catch {
    return null
  }
}

export async function GET(request: NextRequest) {
  const user = await getAdminUser(request)

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const sql = neon(process.env.DATABASE_URL!)

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
      ORDER BY r.date ASC, r.time ASC
    `,
  ])

  return NextResponse.json({ users, reservations })
}
