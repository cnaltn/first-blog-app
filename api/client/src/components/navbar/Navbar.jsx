import React, { useContext, useEffect, useState } from "react";
import Context from "../../context/Context";
import { AiOutlineAppstore } from "react-icons/ai";

const Navbar = () => {
  const { user, dispatch } = useContext(Context);

  // useEffect(() => {
  //   const Deneme = () => {
  //     if (user) {
  //       document
  //         .getElementById("admin_write")
  //         .classList.replace("hidden", "flex");
  //       document.getElementById("adminLogin").innerText = "Logout";
  //       document.getElementById("adminDrop").innerText = "Logout";
  //       document
  //         .getElementById("writeButton")
  //         .classList.replace("hidden", "block");
  //     }
  //   };
  //   Deneme();
  // });

  const handleLogout = () => {
    if (user) {
      dispatch({ type: "LOGOUT" });
    }
  };

  const dropMenu = () => {
    document.getElementById("dropdown").classList.toggle("hidden");
  };

  return (
    <section className="h-16 bg-zinc-800 items-center flex w-full fixed z-50 shadow-xl">
      <div className="container_main mx-auto flex items-center justify-between pl-4 pr-4 xl:pl-0 xl:pr-0">
        <div className="cursor_">
          <a className="text-emerald-300 font-bold text-lg" href="/">
            > Mr.Robot
          </a>
        </div>
        <div className="">
          <ul className="hidden md:flex gap-x-8 text-zinc-100">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/posts">Posts</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li id="admin_write" className={user ? "flex" : "hidden"}>
              <a href="/write">Write</a>
            </li>
            <li className="">
              <a
                id="adminLogin"
                className="bg-emerald-300 font-bold pt-1 pb-1 pl-4 pr-4 rounded hover:bg-orange-300 transition-all text-zinc-900"
                href="/admin"
                onClick={handleLogout}
              >
                {user ? "Logout" : "Admin Login"}
              </a>
            </li>
            {/* <li className="" id="adminLogout">
              <a
                className="bg-emerald-300 font-bold pt-1 pb-1 pl-4 pr-4 rounded hover:bg-orange-300 transition-all text-zinc-900"
                href="/"
              >
                Logout
              </a>
            </li> */}
          </ul>
          <div>
            <AiOutlineAppstore
              id="dropButton"
              onClick={dropMenu}
              class="flex md:hidden text-emerald-300 text-2xl cursor-pointer"
            ></AiOutlineAppstore>
          </div>
          <div className="hidden md:hidden absolute right-5" id="dropdown">
            <div class=" w-40 text-center justify-center bg-zinc-700 rounded divide-y divide-gray-100 shadow ">
              <ul
                class="py-1 text-sm text-emerald-300 w-full pl-1 pr-1 "
                aria-labelledby="dropdownDefault"
              >
                <li>
                  <a
                    href="/"
                    class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-zinc-500 dark:hover:text-white transition-all"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/posts"
                    class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-zinc-500 dark:hover:text-white transition-all"
                  >
                    Posts
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-zinc-500 dark:hover:text-white transition-all"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/write"
                    id="writeButton"
                    class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-zinc-500 dark:hover:text-white transition-all"
                  >
                    Write
                  </a>
                </li>
                <li>
                  <a
                    href="/admin"
                    class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-zinc-500 dark:hover:text-white transition-all"
                    id="adminDrop"
                    onClick={handleLogout}
                  >
                    {user ? "Logout" : "Admin Login"}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
