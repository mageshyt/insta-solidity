import React, { useEffect } from "react";
import { useAppContext } from "../../context/context";
import Post from "./Post";

const Posts = () => {
  const { userAddress, posts, getAllPosts }: any = useAppContext();
  useEffect(() => {
    getAllPosts();
    console.log("👉 posts: ", posts);
  }, []);
  return (
    <div className="  mx-4">
      {posts.map((post: any) => {
        return <Post key={post.id} {...post} />;
      })}
    </div>
  );
};

export default Posts;
