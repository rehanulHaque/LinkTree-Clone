"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { addLink } from "@/actions/addLink";

export default function AddLink() {
  return (
    <Popover>
      <PopoverTrigger className="bg-white px-4 py-2 rounded-md">
        Link
      </PopoverTrigger>
      <PopoverContent>
        <form action={addLink} className="flex flex-col gap-3">
          <h1 className="font-bold text-xl">Add Link</h1>
          <Input placeholder="Link Title" name="title" />
          <Input placeholder="Link" name="link" />
          <Button>Add</Button>
        </form>
      </PopoverContent>
    </Popover>
  );
}
