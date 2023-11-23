"use client";

import Button from "@/components/global/Button";
import Link from "next/link";
import { SignOutContext } from "../actions/signOut";
import { useSession } from "next-auth/react";
import Nav from "./components/Nav";

export default function Home() {
  const { data: session } = useSession();
  console.log(session?.user);
  return (
    <>
      <div>Home</div>
      {/* <Nav /> */}
      <Link href={"/login"}>Login</Link>
      <Button onClick={() => SignOutContext()}>Log Out</Button>
    </>
  );
}
