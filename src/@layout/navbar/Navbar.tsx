import React from "react";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
export default function Navbar() {
  return (
    <div className="flex justify-between w-full items-center p-4 border-b border-gray-400">
      <div className="flex items-center gap-4">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={100} height={100} />
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <ModeToggle />
        <Button variant="outline">
          <Link href="/login">Login</Link>
        </Button>
      </div>
    </div>
  );
}
