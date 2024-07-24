import Image from "next/image";
import { AddBook } from "@/components/AddBook";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AddBook />
      <div>
        <h1 className="text-4xl font-semibold">Book stuff</h1>
        <p>idk just start building</p>
      </div>
    </main>
  );
}
