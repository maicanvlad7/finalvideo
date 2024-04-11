import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center sm:p-24 p-10">
      <h2 className="text-5xl outline-blue-600 text-shadow-sm shadow-blue-400">Final Video</h2>
      <Link href="/login" className="flex items-center gap-2 font-semibold">
        <Button className="max-w-[300px] min-w-[300px] mx-auto mt-4">
          Login
        </Button>
      </Link>
    </main>
  );
}
