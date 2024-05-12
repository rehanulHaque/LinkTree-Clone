import Image from "next/image";
import { MdDelete, MdEdit } from "react-icons/md";
import ShowHide from "@/components/client/ShowHide";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import BioForm from "@/components/client/BioForm";
import { User } from "@/models/userModel";
import { connectToDatabase } from "@/lib/utils";
import { deleteLink } from "@/actions/deleteLink";

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

  const image = String(userId?.avatar);
  const user = String(userId?.name);
  const bio = String(userId.bio);
  return (
    <main className="p-4">
      <div className="flex gap-4 items-center">
        <Image
          src={image}
          height={40}
          width={40}
          alt={user}
          className="rounded-full"
        />
        <h1>@{user}</h1>
      </div>
      <BioForm bio={bio} />
      <div className="flex flex-col gap-4">
        <h2 className="font-semibold my-4">Links</h2>
        {userId.Links.map((link: LinkTypes) => (
          <div
            className="flex gap-4 p-4 bg-slate-100 rounded-md items-center"
            key={link._id}
          >
            <p>{link.url}</p>
            <button>
              <MdEdit className="h-6 w-6" />
            </button>
            <form action={async() =>{
              "use server"
              await deleteLink(String(link._id))
            }}>
              <button>
                <MdDelete className="h-6 w-6" />
              </button>
            </form>
            <ShowHide id={String(link._id)} show={link.show} />
          </div>
        ))}
      </div>
    </main>
  );
}
