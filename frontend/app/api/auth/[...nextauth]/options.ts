import GoogleProvider from "next-auth/providers/google";
import { NextAuthOptions } from "next-auth";


export const options: NextAuthOptions = {
    session: {
        strategy: 'jwt'
    },
    providers: [
        GoogleProvider({
            clientId: "49358807462-2n18923nemme0pbupg75o50agvq9ajqd.apps.googleusercontent.com",
            clientSecret: "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",
        })
    ],
    callbacks: {
        async signIn({user, account}) {
          
            return user
        }
    }
}
