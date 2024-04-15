import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center sm:p-24 p-10">
      <h1 className="text-5xl sm:text-7xl bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-300 inline-block text-transparent bg-clip-text">Final Video</h1>
      <p>Convert your followers to a real business</p>
      <Link href="/login" className="flex items-center gap-2 font-semibold">
        <Button className="max-w-[300px] min-w-[300px] mx-auto mt-4">
          Login
        </Button>
      </Link>
    </main>
  );
}
