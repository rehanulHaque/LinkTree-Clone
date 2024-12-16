import { Button } from "./ui/button";
import Link from "next/link";
import AddLink from "./client/AddLink";
import { auth, signOut } from "@/auth";
import { FiSettings } from "react-icons/fi";
import Image from "next/image";
import { Settings } from "lucide-react";
import { MdGraphicEq } from "react-icons/md";

export default async function Navbar() {
  const session = await auth();

  return (
    <nav className="bg-slate-200 p-4 flex flex-col h-screen">
      {/* HEader */}
      <div className="flex gap-4 items-center justify-between">
        <div>
        <h1 className="font-bold text-2xl">LinkShare</h1>
        <span>@{session?.user?.name}</span>
        </div>
        <div className="rounded-full">
          <Image
            src={session?.user?.image!}
            alt=""
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
      </div>

      {/* Mid */}
      <div className="flex flex-col gap-4 mt-7">
        <AddLink />
        <Button>
          <Link href={"/"} className="flex gap-2">
            <MdGraphicEq className="h-5 w-5" /> Analytics
          </Link>
        </Button>
        <Button>
          <Link href={"/setting"} className="flex gap-2">
            <Settings className="h-5 w-5" /> Setting
          </Link>
        </Button>
      </div>

      {/* Bottom */}
      <div className="flex flex-col mt-4">
        {session?.user ? (
          <form
            className="flex flex-col"
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <Button size="sm">Logout</Button>
          </form>
        ) : (
          <Link href={"/login"}>
            <Button size="sm">Login</Button>
          </Link>
        )}
      </div>
    </nav>
  );
}
