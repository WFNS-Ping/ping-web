import Link from "next/link";
export default function Home() {
  return (
    <div className="bg-black-50">
      <h1>Home</h1>
      <Link href="/about">About</Link>
    </div>
  );
}
