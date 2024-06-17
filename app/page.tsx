"use client";
import Link from "next/link";
import PasswordInput from "@/components/PasswordInput";
import { ChangeEvent, useState } from "react";
import Checkbox from "@/components/Checkbox";
export default function Home() {
  const [first, setFirst] = useState("");
  const [checked, setChecked] = useState(false);
  const change = (e: ChangeEvent<HTMLInputElement>) => {
    setFirst(e.target.value);
  };
  return (
    <main className="bg-black-50 scrollbar-hide h-full">
      <h1>Home</h1>
      <PasswordInput
        value={first}
        name="name"
        onChange={change}
        placeholder=""
      />
      <Link href="/about">About</Link>
      <div className="bg-black-950">
        <Checkbox
          label="필수 값"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
      </div>
    </main>
  );
}
