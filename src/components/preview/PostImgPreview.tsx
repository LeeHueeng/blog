import Image from "next/image";
import React from "react";
import { Heart, MessageCircle, Eye, User } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface PostImgPreviewProps {
  postImg: string;
  title?: string;
  date?: string;
  userName?: string;
  likes?: number;
  comments?: number;
  views?: number;
}

const PostImgPreview: React.FC<PostImgPreviewProps> = ({
  postImg,
  title = "궁전에 가보았다.",
  date = "2025.03.31",
  userName = "후에엥",
  likes = 100,
  comments = 100,
  views = 100,
}) => {
  return (
    <Card className="w-[260px] overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group cursor-pointer border py-0">
      <CardContent className="relative aspect-[4/3] w-full p-0 overflow-hidden">
        <Image
          src={postImg}
          alt="Post Image"
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </CardContent>

      <CardHeader className="p-3 space-y-1">
        <CardTitle className="text-base font-medium leading-tight line-clamp-1">
          {title}
        </CardTitle>
        <CardDescription className="text-xs">{date}</CardDescription>
      </CardHeader>

      <CardFooter className="px-3 pb-3 pt-0 flex items-center justify-between text-sm">
        <div className="flex items-center gap-1 ">
          <User className="w-4 h-4" />
          {userName}
        </div>
        <div className="flex items-center gap-3 ">
          <span className="flex items-center gap-1 hover:text-pink-500 transition-colors">
            <Heart className="w-4 h-4" />
            {likes}
          </span>
          <span className="flex items-center gap-1 hover:text-blue-500 transition-colors">
            <MessageCircle className="w-4 h-4" />
            {comments}
          </span>
          <span className="flex items-center gap-1 hover:text-green-500 transition-colors">
            <Eye className="w-4 h-4" />
            {views}
          </span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PostImgPreview;
