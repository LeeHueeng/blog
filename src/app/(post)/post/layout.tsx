import React from "react";
import { Button } from "@/components/ui/button";

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-6/7 bg-[var(--background)] shadow-md rounded-lg ">
      {children}
    </div>
  );
}
