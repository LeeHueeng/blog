import React from "react";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Search, Bell } from "lucide-react";
export default function Navbar() {
  return (
    <div className="flex justify-between w-full items-center p-4 border-b border-gray-400">
      <div className="flex items-center gap-4">
        <Link href="/">
          <p className="text-2xl font-bold">Hueeng Blog</p>
        </Link>
      </div>
      <div className="flex items-center gap-4 justify-end">
        <ModeToggle />
        <Search className="w-4 h-4" />
        <Bell className="w-4 h-4" />
        <Button variant="outline">
          <Link href="/login">Login</Link>
        </Button>
      </div>
    </div>
  );
}
