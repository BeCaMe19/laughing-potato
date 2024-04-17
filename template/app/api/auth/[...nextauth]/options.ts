import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt, { compare } from "bcrypt";
import db from "@/libs/db";
export const options: NextAuthOptions = {
    providers: [
        // YandexProvider({
        //     clientId: process.env.YANDEX_CLIENT_ID as string,
        //     clientSecret: process.env.YANDEX_CLIENT_SECRET as string,
    
        //   }),
        CredentialsProvider({
          name: "Credentials",
          credentials: {
            username: {
              label: "Username:",
              type: "text",
            },
            email: {
              label: "Email",
              type: "text",
            },
            password: {
              label: "Password:",
              type: "password",
            },
          },
          async authorize(credentials) {
            // This is where you need to retrieve user data
            // to verify with credentials
            // Docs: https://next-auth.js.org/configuration/providers/credentials
            if (!credentials?.email || !credentials?.password) {
              throw new Error("Email and password required");
            }
    
            const user = await db.user.findUnique({
              where: {
                email: credentials.email,
              },
            });
    
            if (!user || !user.hashedPassword) {
              throw new Error("Email does not exist");
            }
            const hashedPassword = await bcrypt.hash(credentials.password, 12);
            const isCorrectPassword = await bcrypt.compare(
              credentials.password,
              user.hashedPassword
            );
    
            if (!isCorrectPassword) {
              throw new Error("Incorrect password");
            }
    
            return user;
          },
        }),
      ],
}

