"use client";

import React, { useRef, useEffect, useState } from "react";
import "quill/dist/quill.snow.css";

export default function Write() {
  const quillRef = useRef<HTMLDivElement>(null);
  const [quill, setQuill] = useState<any>(null);
  const [title, setTitle] = useState("");

  useEffect(() => {
    // 클라이언트 사이드에서만 Quill import
    if (typeof window !== "undefined" && quillRef.current && !quill) {
      import("quill").then((module) => {
        const Quill = module.default;
        if (quillRef.current) {
          const quillInstance = new Quill(quillRef.current, {
            theme: "snow",
            placeholder: "내용을 입력하세요...",
            modules: {
              toolbar: [
                [{ header: [1, 2, 3, false] }],
                ["bold", "italic", "underline", "strike"],
                ["blockquote", "code-block"],
                [{ list: "ordered" }, { list: "bullet" }],
                [
                  {
                    color: [
                      "#000000",
                      "#ffffff",
                      "#ff0000",
                      "#00ff00",
                      "#0000ff",
                      "#ffff00",
                      "#ff00ff",
                      "#00ffff",
                    ],
                  },
                  {
                    background: [
                      "#000000",
                      "#ffffff",
                      "#ff0000",
                      "#00ff00",
                      "#0000ff",
                      "#ffff00",
                      "#ff00ff",
                      "#00ffff",
                    ],
                  },
                ],
                ["link", "image"],
                ["clean"],
              ],
            },
          });
          setQuill(quillInstance);
        }
      });
    }
  }, [quill]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // API 연동 등 게시글 저장 로직 추가 가능
    console.log("제목:", title);
    console.log("내용:", quill ? quill.root.innerHTML : "");
  };

  return (
    <div className="min-h-screen p-10 ">
      <div className="max-w-3/4 mx-auto bg-[var(--background)] shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-[var(--foreground)] mb-4">
          새 게시글 작성
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목을 입력하세요"
            className="p-3 border border-[var(--border)] rounded-md bg-[var(--background)] text-[var(--foreground)]"
          />
          <div className="border border-[var(--border)] rounded-md">
            <div ref={quillRef} className="h-64" />
          </div>
          <button
            type="submit"
            className="self-end px-6 py-2 bg-[var(--foreground)] hover:bg-[var(--foreground)] text-[var(--background)] font-semibold rounded-md transition-colors"
          >
            게시글 저장
          </button>
        </form>
      </div>
    </div>
  );
}
