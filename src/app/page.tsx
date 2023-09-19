import Image from "next/image";
import { useSession, signIn, signOut, SessionProvider } from "next-auth/react";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/authOptions";
import UserInfo from "@/components/UserInfo/UserInfo";

export default function Home() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href={"/client"}>Profile</Link>
      <br />
      <Link href={"/about"}>About</Link>
    </section>
  );
}
