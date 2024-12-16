import { User } from "@/models/userModel"

export async function deleteLink(id: string){
    try {
        await User.findOneAndUpdate({Links: {$elemMatch: {_id: id}}}, {$pull: {Links: {_id: id}}})
    } catch (error) {
        console.log(error)
    }
}