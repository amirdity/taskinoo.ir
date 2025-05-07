// lib/auth/options.ts
import type { NextAuthOptions } from "next-auth";
import { providers } from "./providers";
import { callbacks } from "./callbacks";
import { env } from "@/lib/env";

export const authOptions: NextAuthOptions = {
  providers,
  callbacks,
  secret: env.NEXTAUTH_SECRET,
};
