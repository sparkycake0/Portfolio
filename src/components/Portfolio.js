import React from "react";
import "./portfolio.css";
import Link from "next/link";
export default function() {
  return (
    <div className="sm:flex flex-col p-20 items-center h-screen -m-16 justify-center gap-24">
      <div className="flex flex-col text-center gap-6 justify-center border-b-4 border-white p-12 border-opacity-30">
        <h1 className="drop-shadow-xl   lg:text-9xl text-6xl font-bold text-button bg-gradient-to-r from-indigo-700 to-purple-800 text-transparent bg-clip-text">
          WeCanHackNasa
        </h1>
        <h1 className="lg:text-4xl text-xl drop-shadow-xl w-max">
          Fullstack Web Developers <span className="underscore">_</span>
        </h1>
      </div>
      <div className="flex items-center rounded p-10 text-xl max-w-5xl bg-opacity-20 backdrop-blur-sm bg-secondary2">
        <p>
          WeCanHackNasa, duo web developers. One is fullstack specialized in
          working with backend and backend services, other one is frontend
          master who created this whole design of this page. This portfolio is
          representation of our skill and main page where you can find our every
          project we make and even contact us through our social medias on{" "}
          <Link href={"/contact"} className="text-blue-400 font-bold">
            Contact Page
          </Link>
          . For our work and project you can see on{" "}
          <Link href={"/projects"} className="text-blue-400 font-bold">
            Projects Page
          </Link>{" "}
        </p>
      </div>
    </div>
  );
}
