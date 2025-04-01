import React from "react";
import { Button } from "@/components/ui/button";

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row w-full">
      <div className="flex w-1/7 items-center h-screen">
        <div className="flex flex-col p-10 items-center gap-2 w-full h-full">
          <p className="text-2xl font-bold">카테고리</p>
          {/*카테고리가 들어갈 목록*/}
          <div className="flex flex-col p-10 gap-2 w-full">
            <Button className="w-full">카테고리 1</Button>
            <Button className="w-full">카테고리 2</Button>
            <Button className="w-full">카테고리 3</Button>
            <Button className="w-full">카테고리 4</Button>
            <Button className="w-full">카테고리 5</Button>
          </div>
        </div>
      </div>
      <div className="flex w-6/7 bg-[var(--background)] shadow-md rounded-lg ">
        {children}
      </div>
    </div>
  );
}
