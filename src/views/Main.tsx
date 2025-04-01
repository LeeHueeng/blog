"use client";

import PostImgPreview from "@/components/preview/PostImgPreview";
import { useState, useEffect } from "react";
import Link from "next/link";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Main() {
  const [posts, setPosts] = useState<Array<{ id: number; img: string }>>([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const fetchPosts = () => {
    // 예시로 20개씩 로드
    const newPosts = Array.from({ length: 20 }, (_, i) => ({
      id: posts.length + i,
      img: `https://picsum.photos/seed/${posts.length + i}/400/300`,
    }));

    setPosts((prev) => [...prev, ...newPosts]);
    setPage((prev) => prev + 1);

    // 예시로 100개 이상이면 더 이상 로드하지 않음
    if (posts.length >= 100) setHasMore(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <InfiniteScroll
      dataLength={posts.length}
      next={fetchPosts}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      className="w-full"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {posts.map((post) => (
          <Link href={`/post/${post.id}/${post.id}`} key={post.id}>
            <PostImgPreview key={post.id} postImg={post.img} />
          </Link>
        ))}
      </div>
    </InfiniteScroll>
  );
}
