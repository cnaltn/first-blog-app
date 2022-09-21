import React, { useContext } from "react";
import axios from "axios";
import Context, { INITIAL_STATE } from "../../context/Context";
import { Link } from "react-router-dom";
const Post = ({ post }) => {
  // const { user } = useContext(Context);
  const { user } = useContext(Context);

  return (
    <div className="flex ">
      <div className="flex flex-col">
        <Link to={"/posts/" + post._id}>
          <a className="text-zinc-100 text-lg lg:text-xl font-bold select-none">
            {post.title}
          </a>
        </Link>
        <div className="text-zinc-100 text-xs lg:text-sm flex gap-x-2">
          {new Date(post.createdAt).toDateString()}
          <p className="gap-x-2 flex">
            <span className="text-emerald-300">::</span>
            {post.username}
          </p>
        </div>
        <div className="flex pt-4 pb-4">
          <div className="flex ">
            <p className="text-zinc-100 flex lg:text-base text-xs line-clamp-3 text-justify">
              {post.desc}
            </p>
          </div>
        </div>
        <a
          href={"/posts/" + post._id}
          className="text-emerald-300 flex lg:text-base text-xs"
        >
          Read More 😍
        </a>
      </div>
    </div>
  );
};

export default Post;
