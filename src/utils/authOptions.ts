import { getUser, useUserEmail } from "@/hooks/auth/getUser";
import { NextAuthOptions } from "next-auth";
import bcrypt from 'bcrypt';
import Credentials from "next-auth/providers/credentials"
import GoogleProvider from 'next-auth/providers/google'
import UserResponse from "@/models/User";
export const authOptions:NextAuthOptions = {
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string,
        }),
        Credentials({
         name: "Credentials",
         credentials:{
            email:{
                label: "Email:",
                type: "text",
                placeholder: "Email",

           },
           password:{
            label:"Password:",
            type:"password",
           }
         },
         async authorize(credentials, req) {
               if(!credentials?.email || !credentials.password){
                return null
               }
                const response = await fetch(`http://localhost:8088/User/email/${credentials?.email}`);
                const user = await response.json();
                //todo hash password
                if (response.ok && credentials.password == user.password) {
                    return user;
                }
            return null;
          }
        })
    ],
    secret:process.env.NEXTAUTH_SECRET
}