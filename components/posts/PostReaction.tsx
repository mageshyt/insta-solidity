import { useRouter } from "next/router";
import React from "react";
import {
  AiOutlineDollarCircle as Tip,
  AiOutlineHeart as Like,
} from "react-icons/ai";

import { FaRegComment as Comment } from "react-icons/fa";
import { VscLiveShare as Share } from "react-icons/vsc";
type PostReactionProps = {
  id: string;

  author: string;
};
const PostReaction = ({ id, author }: PostReactionProps) => {
  const router = useRouter();
  const handleTip = () => {
    router.push(`/?tip/${id}`);
  };

  return (
    <div className="flex items-center justify-between mx-2">
      {/* like ,comment , share */}

      <div className="flex items-center space-x-5 ">
        {/* like */}
        <Like className="text-3xl text-white navBtn" />
        {/* comment */}
        <Comment className="text-3xl text-white navBtn" />
        {/* share */}
        <Share className="text-3xl text-white navBtn" />
      </div>
      {/* tip */}

      <div>
        {/* description */}

        {/*  tip */}
        <Tip onClick={handleTip} className="text-3xl text-white navBtn" />
      </div>
    </div>
  );
};

export default PostReaction;
