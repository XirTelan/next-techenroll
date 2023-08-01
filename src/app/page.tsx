'use client';
import Image from 'next/image';
import { useSession, signIn, signOut } from 'next-auth/react';
import { SessionProvider } from 'next-auth/react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <>
        Not signed in <br />
        <button
          onClick={(e) => {
            signIn();
          }}
        >
          Sign in
        </button>
        <button
          onClick={(e) => {
            signOut();
          }}
        >
          Sign out
        </button>
      </>
      <Link href={'/about'}>About</Link>
    </main>
  );
}
