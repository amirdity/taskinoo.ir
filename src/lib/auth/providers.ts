// lib/auth/providers.ts
// import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export const providers = [
  // GoogleProvider({
  //   clientId: env.GOOGLE_CLIENT_ID,
  //   clientSecret: env.GOOGLE_CLIENT_SECRET,
  // }),
  GitHubProvider({
    clientId: process.env.GITHUB_CLIENT_ID!,
    clientSecret: process.env.GITHUB_CLIENT_SECRET!,
  }),
];
