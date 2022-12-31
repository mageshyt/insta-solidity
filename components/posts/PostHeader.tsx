import React from "react";

import { BsThreeDots as Dots } from "react-icons/bs";
import { TruncateAccount, generateImage } from "../../lib/GenereateImage";
type PostHeaderProps = {
  address: string;
};
const PostHeader = ({ address }: PostHeaderProps) => {
  const avatar = generateImage(address);
  return (
    <div className="flex items-center justify-between mx-2">
      {/* truncate address of owner */}
      <div className="flex items-center space-x-2">
        {/* user logo */}
        <img
          className="h-10 w-10 rounded-full p-[2px]  border-red-500 border-2 object-contain animate_hover"
          src={avatar}
          alt={address}
        />

        <span className="text-white text-lg font-medium">
          {TruncateAccount(address)}
        </span>
      </div>

      {/* dots */}
      <Dots className="text-3xl text-white navBtn" />
    </div>
  );
};

export default PostHeader;
