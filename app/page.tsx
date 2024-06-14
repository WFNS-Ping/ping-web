"use client";
import Link from "next/link";
import PasswordInput from "./components/PasswordInput";
import { ChangeEvent, useState } from "react";
export default function Home() {
  const [first, setfirst] = useState("");
  const change = (e: ChangeEvent<HTMLInputElement>) => {
    setfirst(e.target.value);
  };
  return (
    <main className="bg-black-50 scrollbar-hide h-full">
      <h1>Home</h1>
      <PasswordInput
        name="name"
        value={first}
        onChange={change}
        placeholder=""
      />
      <Link href="/about">About</Link>
    </main>
  );
}
