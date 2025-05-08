import { createAuthClient } from "better-auth/react"
import { config } from "dotenv";

config({ path: ".env" }); // or .env.local

export const authClient = createAuthClient({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL
})