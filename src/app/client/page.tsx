"use client";
import UserInfo from "@/components/UserInfo/UserInfo";
import { data } from "autoprefixer";
import { signIn, signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const Page = () => {
  const { data: session } = useSession({
    required: true,
  });
  console.log(session);
  return (
    <section>
      <UserInfo user={session?.user} />
      <button onClick={() => signOut()}>Sign Out</button>
    </section>
  );
};
export default Page;
