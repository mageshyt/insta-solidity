import React from "react";
import Stories from "../components/Stories/Stories";

const HomePage = () => {
  return (
    <div className="w-full h-full">
      <div className="max-w-5xl mx-auto">
        {/* stories */}

        <Stories />
      </div>
    </div>
  );
};

export default HomePage;
