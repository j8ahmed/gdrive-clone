import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
import { AuthProvider } from "@/Interface/"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider(<AuthProvider>{
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider(<AuthProvider>{
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)
