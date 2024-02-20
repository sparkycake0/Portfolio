import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Pcard(props) {
  return (
    <div className="flex justify-center lg:justify-around items-center flex-col text-center lg:flex-row lg:text-left  border-black rounded-2xl p-5 gap-10 w-4/5 mx-auto mb-20 bg-secondary2 bg-opacity-30">
      <Image src={props.img} width={800} alt="" className="w-max rounded-xl" />
      <div className="flex flex-col items-center gap-11">
        <h1 className="text-6xl bg-gradient-to-r from-indigo-700 w-fit to-purple-800 text-transparent bg-clip-text">
          {props.name}
        </h1>
        <h2 className="text-4xl ">{props.desc}</h2>
        <p className="text-xl ">Click button down there to see project.</p>
        <div className="flex justify-center items-center">
          <Link href={props.link} target="blank">
            <button className="transition-all duration-200 w-36 h-14 rounded-xl bg-button outline-none hover:bg-secondary">
              Open Project
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
