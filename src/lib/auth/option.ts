// lib/auth/options.ts
import type { NextAuthOptions } from "next-auth";
import { providers } from "./providers";
import { callbacks } from "./callbacks";

export const authOptions: NextAuthOptions = {
  providers,
  callbacks,
  secret: process.env.NEXTAUTH_SECRET,
};
