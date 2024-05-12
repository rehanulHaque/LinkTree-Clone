"use server"

import { auth } from "@/auth"
import { connectToDatabase } from "@/lib/utils"
import { User } from "@/models/userModel"

export async function addLink(formData: FormData) {
    const title = formData.get("title") as string
    const link = formData.get("link") as string
    const session = await auth()
    const email = session?.user?.email
    try {
        await connectToDatabase()
        await User.findOneAndUpdate({email}, {$push: {Links: {title, url: link}}})
    } catch (error) {
        console.log(error)
    }
}