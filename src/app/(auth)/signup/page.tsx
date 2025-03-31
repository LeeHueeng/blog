import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function page() {
  return (
    <div className="flex gap-16 items-center justify-center w-full">
      {/* 로그인 섹션 */}
      <div className="flex flex-col gap-6 w-80 p-6 border rounded-lg">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">회원가입</h2>
          <p className="text-sm text-muted-foreground">
            이메일과 비밀번호를 입력하여 회원가입 해주세요.
          </p>
        </div>
        <div className="space-y-4">
          <Input placeholder="사용자 아이디" type="text" />
          <Input placeholder="비밀번호" type="password" />
          <Input placeholder="비밀번호 확인" type="password" />
          <Link href="/login">
            <Button className="w-full hover:bg-gray-300" variant="outline">
              회원가입
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
