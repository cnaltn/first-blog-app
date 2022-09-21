import React from "react";
import Post from "../Post/Post";

const Posts = ({ posts }) => {
  return (
    <div className="flex w-full pb-10">
      <div className="container_main pl-4 pr-4 xl:pl-0 xl:pr-0 flex justify-between">
        <div className="flex flex-col gap-y-20 pt-24 w-full">
          {posts.map((p) => (
            <Post post={p}></Post>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Posts;
