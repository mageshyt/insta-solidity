import { useRouter } from "next/router";
import React from "react";

import { useAccount } from "wagmi";

import PostHeader from "./PostHeader";
import PostReaction from "./PostReaction";
import { TruncateAccount } from "../../lib/GenereateImage";

type postType = {
  url: string;
  description: string;
  id: string;
  author: string;
};
const Post = ({ url, description, id, author }: postType) => {
  const { address } = useAccount();

  return (
    <div className="my-3 p-3  rounded-md bg-[#1a1a1a]">
      {/* post header */}
      <PostHeader address={author} />

      <div className=" flex flex-col space-y-3 mt-4 items- w-full justify-center">
        {/* image */}
        <img src={url} alt={description} className=" rounded-md" />

        <PostReaction id={id} author={author} />

        {/* description */}

        <div className="flex space-x-2 items-center">
          {/* author */}
          <span className="text-blue-400  text-xl font-bold">
            {TruncateAccount(author)}
          </span>
          {/* description */}
          <span className="text-white text-lg font-medium">{description}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
