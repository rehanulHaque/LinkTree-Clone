"use client";
import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { updateProfile } from "@/actions/updateProfile";

export default function ProfileUpdate({name, email}: {name: string, email: string}) {
  return (
    <div>
      <form action={updateProfile} className="flex flex-col gap-3">
        <Input placeholder={name} name="name" />
        <Input placeholder={email} name="email" disabled />
        <Button>Update</Button>
      </form>
    </div>
  );
}
