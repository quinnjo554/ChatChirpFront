import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials"
import GoogleProvider from 'next-auth/providers/google'
export const authOptions:NextAuthOptions = {
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string,
        }),
        Credentials({
         name: "Credentials",
         credentials:{
            email: {label: "Email"},
            password: {label: "Password"}
         },
         async authorize(credentials, req) {
            // Add logic here to look up the user from the credentials supplied
            const user = { id: "1", name: 'J Smith', email: 'jsmith@example.com' }
          
            if (credentials?.email == "w") {
              // Any object returned will be saved in `user` property of the JWT
              return user
            } else {
              // If you return null or false then the credentials will be rejected
              return null
              // You can also Reject this callback with an Error or with a URL:
              // throw new Error('error message') // Redirect to error page
              // throw '/path/to/redirect'        // Redirect to a URL
            }
          },
        })
    ],
    debug:true
}