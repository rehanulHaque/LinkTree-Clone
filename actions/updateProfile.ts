"use server"
import { auth } from "@/auth";
import { connectToDatabase } from "@/lib/utils";
import { User } from "@/models/userModel";

export async function updateProfile(formData: FormData) {
  try {
    const session = await auth();
    await connectToDatabase();
    const user = await User.findOne({ email: session?.user?.email });
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;

    let updateData = {};
    if (name) {
      updateData = {
        name,
      };
    }
    if (email) {
      updateData = {
        email,
      };
    }
    const u = await User.findOneAndUpdate({ email: user?.email }, updateData);
  } catch (error) {
    console.log(error);
  }
}
