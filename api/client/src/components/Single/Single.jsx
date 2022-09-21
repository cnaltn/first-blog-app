import React from "react";
import { hello } from "../Home/Home";
import Image from "next/image";

const Single = ({ post }) => {
  return (
    <section className="flex w-full">
      <div className="">
        <div className="text-emerald-300 pt-10 divide-y-4 divide-zinc-600 divide-dotted divide-opacity-60">
          <h1 className="post-title font-bold text-2xl pb-2">{post.title}</h1>
          <p className="text-emerald-300 pt-2">
            {new Date(post.createdAt).toDateString()} ::{" "}
            <span>{post.username}</span>
          </p>
        </div>
        <div className="flex w-full border-[15px] p-[15px] mt-8 border-emerald-300">
          <Image className="" src={hello}></Image>
        </div>
        <div className="text-zinc-100 mt-8">
          <div>
            <p className="pb-5">{post.desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Single;
