import GoogleProvider from "next-auth/providers/google";
import { NextAuthOptions } from "next-auth";


export const options: NextAuthOptions = {
    session: {
        strategy: 'jwt'
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGE_CLIENT_SECRET as string,
        })
    ],
    callbacks: {
        async  signIn({account, profile}) {
            if (!profile?.email) {
                throw new Error('No profile')
            }
            console.log("profile")
            return true
        }
    }
}
