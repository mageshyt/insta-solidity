import React, { createContext, useContext, useEffect, useState } from "react";
import { useAccount } from "wagmi";
import Web3 from "web3";
import { contractAddress } from "../lib/contract";
import { toast } from "react-toastify";
import Instagram from "../lib/Instagram.json";

export const AppContext = createContext({});

export const contractCreate = async () => {
  console.log("createContract");
  const { ethereum } = window;
  if (!ethereum) return alert("Please install MetaMask first.");

  const web3 = new Web3(ethereum);
  const instance = new web3.eth.Contract(Instagram.abi, contractAddress);
  return instance;
};

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
  const getAllPosts = async () => {
    const instance = await contractCreate();
    const image_count = await instance.methods.imageCount().call();
    console.log("image_count", image_count);
    const posts = [];
    for (let i = 1; i <= image_count; i++) {
      const post = await instance.methods.posts(i).call();

      posts.push(post);
    }
    setPosts(posts);
  };

  // upload post
  const uploadPost = async (url, description) => {
    try {
      if (!userAddress) return;
      console.log("upload post", description);
      const instance = await contractCreate();
      const res = await instance.methods.createPost(url, description).send({
        from: userAddress,
        gas: 300000,
      });
      console.log(res);

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
  const tipPost = async (amt, post_id) => {
    console.log("tip post", amt, post_id);
    const loading = toast.loading("Tipping post... 🤑");
    try {
      if (!userAddress) return;
      const instance = await contractCreate();
      const amount = Web3.utils.toWei(amt, "ether");

      const res = await instance.methods
        .TipPost(post_id)
        .send({
          from: userAddress,
          gas: 300000,
          gasLimit: null,
          value: amount,
        })
        .then(() => {
          toast.dismiss(loading);
          toast.success("Tip sent! 💸");
        });
    } catch (err) {
      console.log(err);
      toast.dismiss(loading);
      toast.error("Error tipping post ❌");
    }
  };

  const values = { userAddress, posts, uploadPost, getAllPosts, tipPost };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
export const useAppContext = () => useContext(AppContext);
