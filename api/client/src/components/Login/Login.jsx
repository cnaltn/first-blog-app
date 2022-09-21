import React, { useRef, useContext } from "react";
import axios from "axios";
import { Context } from "../../context/Context";
import Navbar from "../navbar/Navbar";

const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching, user } = useContext(Context);

  const handleSubmit = async () => {
    console.log("hi");
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/api/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });

      document
        .getElementById("success_log")
        .classList.replace("hidden", "flex");
      document.getElementById("failed_log").classList.replace("flex", "hidden");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
      document
        .getElementById("success_log")
        .classList.replace("flex", "hidden");
      document.getElementById("failed_log").classList.replace("hidden", "flex");
    }
  };
  console.log(isFetching);

  return (
    <section className="flex w-full items-center h-screen ">
      <div className="container_main pl-4 pr-4 xl:pl-0 xl:pr-0">
        <div className="flex justify-center pb-20">
          <div className="bg-white w-[350px] md:w-[480px] xl:w-[480px] h-max flex flex-col rounded-lg shadow-xl p-10 gap-y-8">
            <div className=" flex flex-col gap-y-1">
              <h2 className=" text-sm font-bold text-gray-700 text-center ">
                Admin Login Section
              </h2>
            </div>

            <div className="h-[0.125rem] w-full bg-gray-300 rounded-xl"></div>
            <form className="flex flex-col gap-y-5">
              <input
                className="appearance-none border-2 border-gray-200 rounded-md w-full py-2 px-4 text-gray-700 placeholder:text-gray-500 leading-tight focus:outline-none focus:bg-white focus:border-emerald-300"
                id="inline-full-name"
                type="text"
                placeholder="Username"
                ref={userRef}
              ></input>
              {/* <input
        className="appearance-none border-2 border-gray-200 rounded-md w-full py-2 px-4 text-gray-700 placeholder:text-gray-500  leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
        placeholder="Mobile number or e-mail"
        onChange={(e) => setEmail(e.target.value)}
      ></input> */}
              <input
                className="appearance-none border-2 border-gray-200 rounded-md w-full py-2 px-4 text-gray-700 placeholder:text-gray-500 leading-tight focus:outline-none focus:bg-white focus:border-emerald-300"
                placeholder="Password"
                type="password"
                ref={passwordRef}
              ></input>
            </form>
            <button
              onClick={handleSubmit}
              className="flex bg-emerald-300 justify-center rounded pb-2 pt-2 text-gray-800 hover:bg-orange-300 transition-all"
            >
              Login
            </button>
            <p
              id="success_log"
              className=" justify-center text-indigo-500 text-sm font-semibold hidden"
            >
              Succesfully logged in!
            </p>
            <p
              id="failed_log"
              className=" justify-center text-red-500 text-sm font-semibold hidden"
            >
              Log in failed, Username or Password Wrong!
            </p>
            <div className="h-[0.125rem] w-full bg-gray-300 rounded-xl"></div>
            <div className="flex flex-col gap-y-1">
              <h3 className=" text-xs opacity-100 leading-normal text-justify">
                <span className="opacity-70">
                  This is Terminal's Admin login page,{" "}
                </span>
                <span className=" font-bold opacity-100">
                  only Admin's can log in!
                  {/* <span className="font-bold opacity-70"> and</span> Cookies
                Policy. */}
                </span>
              </h3>
              {/* <a
              href="/"
              className="text-xs text-indigo-500 font-semibold hover:underline transition-all"
            >
              You dont have an account? Register here.
            </a> */}
            </div>
          </div>
        </div>

        <div className="">
          <section className="flex w-full border-t-4 border-dotted border-opacity-60 border-zinc-600 mt-5">
            <div className="container-main  ">
              <div className="divide-y divide-dashed divide-zinc-500 flex flex-col">
                <div className="flex flex-col text-emerald-300 pt-5">
                  {/* <a href="/">Automad</a>
                  <a href="/">Based on Terminal CSS</a>
                  <a href="/">Images by Unsplash</a> */}
                  <p className="text-zinc-100 pt-5">
                    © 2022 Terminal / Can Altun Edition.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Login;
