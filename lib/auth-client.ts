import { createAuthClient } from "better-auth/react"

const baseURL = process.env.NEXT_PUBLIC_AUTH_BASE_URL

if (!baseURL) {
  throw new Error("Missing NEXT_PUBLIC_AUTH_BASE_URL environment variable")
}

export const authClient = createAuthClient({
    baseURL,
});

export const { signIn, signUp, signOut, useSession } = authClient;
