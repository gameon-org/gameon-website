import Image from "next/image";
import React from "react";
import { varela, agbalumo } from "@/app/layout";
import { BatsmanHome } from "@/assets";

const LandingPage = () => {
  return (
    <div className="flex h-screen">
      <div className=" p-40 w-1/2 ">
        <p className="text-7xl font-Varela ">Play to</p>
        <span className="text-8xl font-extrabold">your</span>
        <p className="text-5xl pt-2  pb-2 font-Crete text-7xl">Fullest with</p>
        <span className="font-mono text-9xl mt-5 bg-black text-white">
          GameOn
        </span>
      </div>
      <div className="h-60 w-1/2">
        <Image src={BatsmanHome} />
      </div>
    </div>
  );
};

export default LandingPage;
