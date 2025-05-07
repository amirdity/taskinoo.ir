// lib/auth/callbacks.ts
import type { NextAuthOptions } from "next-auth";

export const callbacks: NextAuthOptions["callbacks"] = {
  async session({ session, token }) {
    if (session.user && token.sub) {
      session.user.id = token.sub;
    }
    return session;
  },
};
