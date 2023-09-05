import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToMongoDB } from "../../../lib/mongodb";
const bcrypt = require("bcryptjs");
import { User } from "../../../models/user";

export default NextAuth({

    providers: [
        GoogleProvider({
            clientId: '78145854297-1hc1frbphelbeaf4sqalnasvltt15orp.apps.googleusercontent.com',
            clientSecret: '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'
        }),
        GithubProvider({
            clientId: '4527ee88624622cf3335',
            clientSecret: '74c035f4e0c326fe5909f67dbc8f751f51c81091'
        }),
        FacebookProvider({
            clientId: '327680726307789',
            clientSecret: '6b0c63c7f622b0fce3c9e505bc6ed454'
        }),
        CredentialsProvider({
            credentials: {
              email: { label: 'Email', type: 'text' },
              password: { label: 'Password', type: 'password' },
            },
            authorize: async (credentials) => {
              // Connect to MongoDB
              await connectToMongoDB();
      
              // Find the user by email
              const user = await User.findOne({ email: credentials.email });
      
              if (!user) {
                throw new Error('Invalid credentials');
              }
      
              // Compare the provided password with the stored hash
              const isPasswordCorrect = await bcrypt.compare(
                credentials.password,
                user.password
              );
      
              if (!isPasswordCorrect) {
                throw new Error('Invalid credentials');
              }
      
              // Return the authenticated user
              return Promise.resolve(user);
            },
          }),
    ],
    session: {
        strategy: "jwt"
    },
    secret: 'ad3177545392f0a0098943cdfa63de3a',
});