import NextAuth, { AuthError } from "next-auth";
import Google from "next-auth/providers/google";
import { connectToDatabase } from "./lib/utils";
import { User } from "./models/userModel";
import { nanoid } from "nanoid";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  ],
  callbacks: {
    signIn: async({user, account}) =>{
      if(account?.provider === "google"){
        try{
          const {email, name, image, id} = user
          await connectToDatabase()
          const alreadyUser = await User.findOne({email})
          if(!alreadyUser) {
            await User.create({
              name: nanoid(10),
              email: email,
              avatar: image,
              googleId: id
            })
          }
          return true
        } catch (error){
          console.log(error)
          throw new AuthError("Error While creating user")
        }
      }
      return false
    }
  }
  
  // callbacks: {
  //   signIn: async ({ user, account}) => {
  //     if(account?.provider === 'google') {
  //       try {
  //         const {email, name, id} = user
  //         await connectToDatabase()

  //         const userExists = await User.findOne({email})
  //         if(!userExists) {
  //           await User.create({name, email, googleId: id})
  //         }
  //         return true
  //       } catch (error) {
  //         throw new AuthError("Failed to sign in")
  //       }
  //     } else {
  //       return false
  //     }
  //   },
    
  //   session: async ({ session, token }) => {
  //     if (session?.user && token.sub) {
  //       session.user.id = token.sub;
  //     }
  //     return session;
  //   },
  //   jwt: async ({ user, token }) => {
  //     if (user) {
  //       token.uid = user.id;
  //     }
  //     return token;
  //   },
  // },
  // session: {
  //   strategy: 'jwt',
  // }
});
