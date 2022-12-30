import React from "react";
import Stories from "../components/Stories/Stories";

import Posts from "../components/posts/Posts";
import { ToastContainer } from "react-toastify";

const HomePage = () => {
  return (
    <div className="scroll-bar-hide h-screen">
      {/* <ToastContainer></ToastContainer> */}
      <div className="max-w-5xl h-full  pb-[200px] overflow-y-scroll mx-auto">
        {/* stories */}

        <Stories />

        {/* posts */}
        <Posts />
      </div>
    </div>
  );
};

export default HomePage;
