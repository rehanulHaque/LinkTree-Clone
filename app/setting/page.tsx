import { auth } from "@/auth"
import { connectToDatabase } from "@/lib/utils"
import { User } from "@/models/userModel"
import ProfileUpdate from "@/components/client/profileUpdate"

export default async function page() {
  const session = await auth()
  await connectToDatabase()
  const user = await User.findOne({email: session?.user?.email})
  return (
    <main className="flex items-center justify-center h-screen">
      <div className="flex flex-col">
        <ProfileUpdate name={user?.name} email={user?.email}/>
      </div>
    </main>
  )
}
