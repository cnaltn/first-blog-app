import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Context from "../../context/Context";
import axios from "axios";
import { hello } from "../Home/Home";

const SinglePost = () => {
  const { user } = useContext(Context);

  const [post, setPost] = React.useState([]);
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const yesSir = () => {
    if (user) {
      if (user.username === post.username || user.username === "Admin") {
        document
          .getElementById("deleteButton")
          .classList.replace("hidden", "flex");
      }
    }
  };

  useEffect(() => {
    const findPost = async () => {
      const res = await axios.get("/api/posts/" + path);
      setPost(res.data);
    };
    findPost();
    yesSir();
  });

  const deletePost = async () => {
    if (user.username === post.username || user.username === "Admin") {
      try {
        const res = await axios.delete("/api/posts/" + post._id);
        console.log(res.data);
        window.location.pathname = "/posts";
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("You can delete only your own posts!");
    }
  };

  return (
    <div className="h-max justify-between flex flex-col">
      <section className="flex w-full pt-12 pb-10">
        <div className="container_main pl-4 pr-4 xl:pl-0 xl:pr-0">
          <div className="text-emerald-300 pt-10 divide-y-4 divide-zinc-600 divide-dotted divide-opacity-60">
            <h1 className="font-bold text-lg lg:text-xl pb-2">{post.title}</h1>
            <p className="text-emerald-300 pt-2 text-xs lg:text-sm">
              {new Date(post.createdAt).toDateString()} ::{" "}
              <span>{post.username}</span>
            </p>
          </div>
          <div className="flex w-full border-[8px] p-[8px] md:border-[15px] md:p-[15px] mt-8 border-emerald-300">
            <img className="" src={hello}></img>
          </div>
          <div className="text-zinc-100 mt-8">
            <div>
              <p className="pb-10 lg:text-base text-xs">{post.desc}</p>
            </div>
          </div>
          <div>
            <a
              onClick={deletePost}
              id="deleteButton"
              class="p-2 cursor-pointer bg-red-500 rounded text-white hidden w-max lg:text-base text-xs"
            >
              Delete
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SinglePost;
