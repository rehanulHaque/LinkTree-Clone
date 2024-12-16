import { connectToDatabase } from "@/lib/utils";
import { User } from "@/models/userModel";
import Image from "next/image";
import Link from "next/link";

interface ParamsProps {
  params: {
    user: string;
  };
}

interface LinkTypes {
  _id: string;
  url: string;
  title: string;
  show: Boolean;
}

export default async function UserProfile({ params }: ParamsProps) {
  await connectToDatabase();
  const user = await User.findOne({ name: params.user });

  return (
    <main className="h-screen flex flex-col items-center justify-center new-background text-white">
      <div>
        <Image
          src={user.avatar}
          alt=""
          height={100}
          width={100}
          className="rounded-full"
        />
      </div>
      <div className="text-center my-4">
        <h1>
          <b>{params.user}</b>
        </h1>
        <h2>{user.bio}</h2>
      </div>
      <div className="flex flex-col gap-4">
        {user.Links.map((link: LinkTypes) => (
          link.show && (
            <Link
            href={link.url}
            target="_blank"
            key={link._id}
            className="bg-slate-300 text-black py-2 px-4 rounded-md flex justify-between w-[500px] items-center hover:scale-105 transition-all"
          >
            <Image
              src="/batman.jpg"
              alt=""
              height={50}
              width={50}
              className="rounded-full"
            />
            <p className="font-semibold">{link.title}</p>
            <span>...</span>
          </Link>
          )
        ))}
      </div>
    </main>
  );
}
