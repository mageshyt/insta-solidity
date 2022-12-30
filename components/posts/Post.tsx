import { useRouter } from "next/router";
import React from "react";
import { AiOutlineDollarCircle as Tip } from "react-icons/ai";
type postType = {
  url: string;
  description: string;
  id: string;
  author: string;
};
const Post = ({ url, description, id, author }: postType) => {
  const router = useRouter();
  const handleTip = () => {
    router.push(`/?tip/${id}`);
  };
  return (
    <div className="my-3 p-3  rounded-md bg-[#1a1a1a]">
      <div className=" flex flex-col space-y-3 items- w-full justify-center">
        {/* description */}
        <span className="text-white text-2xl font-bold mt-2">
          {description}
        </span>
        {/* image */}
        <img src={url} alt={description} className=" rounded-md" />

        <div className="flex items-center justify-between mx-2">
          {/* description */}
          <span className="text-white text-xl mt-2">{author}</span>

          {/*  tip */}
          <Tip onClick={handleTip} className="text-3xl text-white navBtn" />
        </div>
      </div>
    </div>
  );
};

export default Post;
