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

export default async function Login() {
  const session = await auth()
  if(session?.user) redirect("/home")
  return (
    <main className="h-screen flex items-center justify-center ">
      <Card>
        <CardHeader>
          <CardTitle>Login to Your account</CardTitle>
        </CardHeader>
        <CardContent>
          <form action="">
            <Input placeholder="Email" type="email" name="email" />
            <Input placeholder="Password" type="password" name="password" />
            <Button type="submit">Login</Button>
          </form>
        </CardContent>
        <hr />
        <CardFooter className="flex flex-col gap-3 mt-2">
          <form
            action={async () => {
              "use server";
              await signIn("google", { callbackUrl: "/home" });
            }}
          >
            <Button variant={"outline"}>
              <FaGoogle className="mr-2" /> Login with Google
            </Button>
          </form>
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link href={"/signup"} className="text-gray-800">
              Create
            </Link>
          </p>
        </CardFooter>
      </Card>
    </main>
  );
}
