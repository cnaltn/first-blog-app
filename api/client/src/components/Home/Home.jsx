import React from "react";
import hello from "../../images/hello.jpg";

const Home = () => {
  return (
    <section className="flex w-full pt-24 pb-10">
      <div className="container_main pl-4 pr-4 xl:pl-0 xl:pr-0">
        <div className="text-zinc-100 text-justify w-full border-emerald-300 border p-2 md:p-5">
          <h1 className="text-lg md:text-2xl font-bold">Hello there!</h1>
          <p className=" text-sm md:text-base">
            Welcome to my very first blog page. This is a simple blog page that
            has a{" "}
            <span className="text-emerald-300 bg-emerald-100 pl-2 pr-2 bg-opacity-30">
              Terminal
            </span>{" "}
            theme. Please, look around and check whether this is what you are
            looking for.
          </p>
        </div>
        <div className="text-emerald-300 pt-10 divide-y-4 divide-zinc-600 divide-dotted divide-opacity-60">
          <h1 className="post-title font-bold text-lg md:text-2xl pb-2">
            Hello Friend
          </h1>
          <p className="text-sm md:text-base text-emerald-300 pt-2">
            17.08.2022 :: <span>Can Altun</span>
          </p>
        </div>
        <div className="">
          <img
            className="flex border-[8px] p-[8px] md:border-[15px] md:p-[15px] mt-8 border-emerald-300"
            src={hello}
          ></img>
        </div>
        <div className="text-zinc-100 mt-8 text-sm md:text-base">
          <div>
            <p className="pb-5">
              Hi! This is my first post and it's a quote from my one of the
              favourite drama serie, Mr.Robot.
            </p>
          </div>
          <blockquote className="bg-zinc-500 text-justify bg-opacity-20 p-5 border-emerald-300 border-l-8 border-opacity-50 shadow-xl">
            "Hello, friend. Hello, friend? That's lame. Maybe I should give you
            a name, but that's a slippery slope. You're only in my head. We have
            to remember that. Shit."
            <figcaption className="mt-3 text-xs text-start md:text-sm">
              -Elliot Alderson // eps1.0_hellofriend.mov
            </figcaption>
          </blockquote>
          <p className="pt-5">
            This is my favourite line from the first episode which name is
            "eps1.0_hellofriend.mov".
          </p>
          {/* <a className="mt-5 flex" href="/">
            Read More ->
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default Home;
export { hello };
