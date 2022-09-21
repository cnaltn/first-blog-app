import React, { useContext } from "react";
import Footer from "../components/Footer/Footer";
import Login from "../components/Login/Login";
import Navbar from "../components/navbar/Navbar";
import Context from "../context/Context";

const Loginpage = () => {
  // const { user } = useContext(Context);
  // if (user) {
  //   window.location.pathname = "/";
  // }

  return (
    <>
      <Navbar></Navbar>
      <Login></Login>
      <Footer></Footer>
    </>
  );
};

export default Loginpage;
