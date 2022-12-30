import React, { createContext, useContext, useEffect, useState } from "react";
import { useAccount } from "wagmi";

import { createContract } from "../lib/contract";
import { toast } from "react-toastify";

export const AppContext = createContext({});

export const AppContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]); // post

  const [userAddress, setUserAddress] = useState(""); // user address

  const { address } = useAccount();

  useEffect(() => {
    const fetchUserAddress = async () => {
      setUserAddress(address);
    };
    fetchUserAddress();
  }, [address]);

  // get All posts
  const getAllPosts = async () => {};

  // upload post
  const uploadPost = async (url, description) => {
    try {
      if (!userAddress) return;

      const instance = await createContract();
      const res = await instance.methods.createPost(url, description).send({
        from: userAddress,
        gas: 1000000,
      });

      await toast.promise(res, {
        pending: "Uploading post... Please wait ⏳",
        success: "Post uploaded successfully 🎉",
        error: "Error uploading post ❌",
      });

      // after upload post get all posts
      getAllPosts();
    } catch (err) {
      console.log(err);
    }
  };

  // tip post
  const tipPost = async () => {};

  const values = { userAddress, posts };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
export const useAppContext = () => useContext(AppContext);
