import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { User } from "@/models/userModel";
import { connectToDatabase } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import AddLink from "@/components/client/AddLink";
import Links from "@/components/Links";

export interface LinkTypes {
  title: string;
  url: string;
  _id: string;
  show: Boolean;
}

export default async function Home() {
  const session = await auth();
  await connectToDatabase();
  if (!session?.user) redirect("/login");
  const userId = await User.findOne({ email: session?.user.email });

  return (
    <main className="p-4">
      {/* top */}
      <div className="my-5">
        <h1 className="font-semibold text-2xl">Links</h1>
      </div>
      {/* Filter Sort */}
      <div className="flex justify-between items-center">
        {/* LEFT */}
        <div>
          {/* Filter */}
          <DropdownMenu>
            <DropdownMenuTrigger className="border border-slate-300 rounded-md px-4 py-2 outline-none">
                Filter
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Time</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Date</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {/* RIGHT */}
        <div className="flex gap-4 mb-4">
          <Input placeholder="Search ..." className="outline-none" />
          <AddLink />
        </div>
      </div>
      <hr />
      {/* Main Links */}
      <div className="flex flex-col mt-4 gap-4">
        {userId.Links.map((link: LinkTypes) => (
          <Links id={link._id} url={link.url} show={link.show} key={link._id} />
        ))}
      </div>
    </main>
  );
}
