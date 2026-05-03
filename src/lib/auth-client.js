import { createAuthClient } from "better-auth/react"; 

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL || "https://zihad-assignment-8.vercel.app",
});