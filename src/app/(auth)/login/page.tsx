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
          <h2 className="text-2xl font-bold">로그인</h2>
          <p className="text-sm text-muted-foreground">
            이메일과 비밀번호를 입력하여 로그인 해주세요.
          </p>
        </div>
        <div className="space-y-4">
          <Input placeholder="이메일" type="email" />
          <Input placeholder="비밀번호" type="password" />
          <Link href="/">
            <Button className="w-full hover:bg-gray-300" variant="outline">
              로그인
            </Button>
          </Link>
        </div>
      </div>

      {/* 구분선 */}
      <div className="h-64 w-px bg-border" />

      {/* 회원가입 섹션 */}
      <div className="flex flex-col gap-6 w-80 p-6 border rounded-lg">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">회원가입</h2>
          <p className="text-sm text-muted-foreground">
            회원가입을 하면 더 많은 기능을 사용할 수 있습니다.
          </p>
        </div>
        <Link href="/signup">
          <Button variant="outline" className="w-full hover:bg-gray-300">
            회원가입
          </Button>
        </Link>
      </div>
    </div>
  );
}
