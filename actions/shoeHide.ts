"use server"

import { User } from "@/models/userModel"

export async function showHide(id: string, show: Boolean) {
    try {
        // await User.findOneAndUpdate({Links: {$elemMatch: {_id: id}}}, {$set: {Links: {$elemMatch: {_id: id}, show}}})
    } catch (error) {
        console.log(error)
    }
}