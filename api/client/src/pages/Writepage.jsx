import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Write from "../components/Write/Write";

const Writepage = () => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar></Navbar>
      <Write></Write>
      <Footer></Footer>
    </div>
  );
};

export default Writepage;
