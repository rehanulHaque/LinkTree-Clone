import { auth, signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FaGoogle } from "react-icons/fa";

export default async function SignUp() {
  const session = await auth()
  if(session?.user) redirect("/")
  return (
    <main className="h-screen flex items-center justify-center ">
      <Card>
        <CardHeader>
          <CardTitle>Create Your account</CardTitle>
        </CardHeader>
        <CardContent>
          <form action="" className="space-y-3">
            <Input name="name" placeholder="Name" />
            <Input name="email" placeholder="Email" />
            <Input name="password" placeholder="Password" />
            <Button className="w-full">Sign Up</Button>
          </form>
        </CardContent>
        <hr />
        <CardFooter className="flex flex-col gap-3 mt-2">
          <form action={async()=>{
            "use server"
            await signIn("google", {callbackUrl: "/home"})
          }}>
            <Button variant={"outline"}>
              <FaGoogle className="mr-2" /> Signup with Google
            </Button>
          </form>
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link href={"/login"} className="text-gray-800">
              Login
            </Link>
          </p>
        </CardFooter>
      </Card>
    </main>
  );
}
