import { MongoDBAdapter } from "@auth/mongodb-adapter"
import NextAuth from "next-auth"
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt';
import clientPromise from "@/lib/mongodb";

export const authOptions = {
    // Configure one or more authentication providers
    adapter: MongoDBAdapter(clientPromise),
    providers: [

        CredentialsProvider({
            credentials: {
                password: { label: "Password", type: "password" },
                email: { label: "Email", type: "email", placeholder: "jsmith@example.com" },
            },
            async authorize(credentials, req) {
                const { email, password } = credentials
                const client = await clientPromise
                const users = client.db().collection('users')
                const user = await users.findOne({ email })

                if (!user) {
                    throw new Error('User not found')
                }

                const passwordMatch = bcrypt.compare(password, user.password)


                if (passwordMatch) {
                    return {
                        id: user._id.toString(),
                        name: user.name,
                        email: user.email
                    }
                } else {
                    return {
                        id: 'keane',
                        name: 'haijamatch',
                        email: 'keane@gmail.com'
                    }
                }

            }



        }),

        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        })
        // ...add more providers here
    ],
    session: {
        strategy: 'jwt'
    },


}

export default NextAuth(authOptions)