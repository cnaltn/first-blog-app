import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import axios from "axios";
import Posts from "../components/Posts/Posts";
import Context from "../context/Context";
import Footer from "../components/Footer/Footer";

const Postspage = () => {
  const [posts, setPosts] = React.useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/api/posts/findposts");
      setPosts(res.data);
      console.log(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar></Navbar>
      <Posts posts={posts}></Posts>
      <Footer></Footer>
    </div>
  );
};

export default Postspage;
