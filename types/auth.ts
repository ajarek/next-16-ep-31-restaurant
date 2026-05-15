import type { User } from "better-auth"

export type AuthUser = User & {
  role: "admin" | "user"
}
