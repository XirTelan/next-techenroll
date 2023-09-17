"use client";

import React, { FormEvent, useState } from "react";

const Page = () => {
  const [data, setData] = useState<UserRegisterData>({
    name: "",
    email: "",
    password: "",
  });

  const registerUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const userInfo = await res.json();
    console.log(userInfo);
  };
  return (
    <form onSubmit={registerUser}>
      <input
        type="text"
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />
      <input
        type="text"
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />
      <input
        type="password"
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />
      <button>Register</button>
    </form>
  );
};

export default Page;

type UserRegisterData = {
  name: string;
  email: string;
  password: string;
};
