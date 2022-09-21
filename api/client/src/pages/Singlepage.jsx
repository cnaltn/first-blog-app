import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/navbar/Navbar";
import SinglePost from "../components/SinglePost/SinglePost";

const Singlepage = () => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar></Navbar>
      <SinglePost></SinglePost>
      <Footer></Footer>
    </div>
  );
};

export default Singlepage;
