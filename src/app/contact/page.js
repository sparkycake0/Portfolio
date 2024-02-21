import React from "react";
import Link from "next/link";
import Image from "next/image";
import tiktok from "../../components/icons/tiktok.svg";
import instagram from "../../components/icons/instagram.svg";
import telegram from "../../components/icons/telegram.svg";
import "./page.css";
export default function page() {
  return (
    <div className="flex flex-row justify-center items-center h-screen">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4 h-max bg-secondary bg-opacity-40  rounded-xl p-8 ">
        <div className="flex flex-col justify-center items-center gap-8 h-max  p-0 ">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <div className="flex flex-col lg:flex-row gap-2">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="flex flex-col lg:flex-row gap-2">
            <input type="text" placeholder="Email Address" />
            <input type="text" placeholder="Phone number" />
          </div>
          <div className="flex lg:flex-row gap-2 w-full">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
              className="h-24 w-full "
            ></textarea>
          </div>
          <button className="bg-button w-36 h-12 rounded-xl  hover:bg-opacity-60">
            Send Message
          </button>
        </div>
        <div className="flex flex-col items-center justify-between text-left gap-2 ml-10 mb-10  ">
          <h1> - Or With - </h1>
          <Link
            href={"/"}
            className="flex flex-row items-center border-2  w-40 h-14 justify-between px-2 rounded-2xl m-2"
          >
            Tiktok<Image src={tiktok} width={35}></Image>
          </Link>
          <Link
            href={"/"}
            className="flex flex-row items-center border-2  w-40 h-14 justify-between px-2 rounded-2xl m-2"
          >
            Instagram<Image src={instagram} width={35}></Image>
          </Link>
          <Link
            href={"/"}
            className="flex flex-row items-center border-2   w-40 h-14 justify-between px-2 rounded-2xl m-2"
          >
            Telegram<Image src={telegram} width={35}></Image>
          </Link>
        </div>
      </div>
    </div>
  );
}
