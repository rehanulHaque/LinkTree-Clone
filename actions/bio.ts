"use server"

import { auth } from "@/auth"
import { connectToDatabase } from "@/lib/utils"
import { User } from "@/models/userModel"

export async function updateBio(bio: string) {
    const session = await auth()
    const email = session?.user?.email
    try {
        await connectToDatabase()
        await User.findOneAndUpdate({email}, {$set: {bio}})
    } catch (error) {
        console.log(error)
    }
}