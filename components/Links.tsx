import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import Options from "./client/Options";
import { deleteLink } from "@/actions/deleteLink";
import { User } from "@/models/userModel";
interface LinkProps {
  id: string;
  url: string;
  show: Boolean;
}

export default function Links({ id, url, show }: LinkProps) {
  return (
    <div
      className="flex p-4 justify-between bg-slate-100 rounded-md items-center"
      key={id}
    >
      <div className="flex gap-4 items-center">
        <p>{url}</p>
        <button>
          <MdEdit className="h-6 w-6" />
        </button>
        <form
          action={async () => {
            "use server";
            await deleteLink(id);
          }}
        >
          <button>
            <MdDelete className="h-6 w-6" />
          </button>
        </form>
      </div>
      <div>
        <Options id={id} show={show} />
      </div>
    </div>
  );
}
