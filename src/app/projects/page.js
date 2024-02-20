import React from "react";
import Pcard from "./Pcard.js";
import socialize from "./Wed_Feb_21_122056_AM_CET_2024.png";
export default function page() {
  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="m-10 text-2xl"> - All of out projects are here - </h1>
      <Pcard
        img={socialize}
        name="Socialize"
        desc="Social media application"
        link="https://socialize-chat-app.vercel.app"
      />
    </div>
  );
}
