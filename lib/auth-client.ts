import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
    baseURL: "https://ep-ancient-wildflower-aje8bn46.neonauth.c-3.us-east-2.aws.neon.tech/neondb",
});

export const { signIn, signUp, signOut, useSession } = authClient;
