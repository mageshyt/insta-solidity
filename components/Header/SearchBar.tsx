import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
  return (
    <div className="max-w-4xl mx-2 flex-1">
      {/* search icon */}
      <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none ">
        <BsSearch className="h-[22p] w-5 text-white" />
      </div>
      <input
        type="text"
        className=" p-2 pl-10 bg-gray-800  w-full text-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-200 focus:border-gray-300"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBar;
