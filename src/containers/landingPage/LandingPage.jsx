import Image from "next/image";
import React from "react";
import { varela, agbalumo } from "@/app/layout";
import { BatsmanHome } from "@/assets";

const LandingPage = () => {
  return (
    <div className="sm:flex h-screen">
      <div className="pt-6 pl-10 sm:p-40 w-1/2 ">
        <p className="text-3xl sm:text-7xl font-Varela ">Play to</p>
        <span className="text-4xl sm:text-8xl font-extrabold">your</span>
        <p className="text-3xl  pt-2  pb-2 font-Crete sm:text-7xl">
          Fullest with
        </p>
        <span className="font-mono text-5xl sm:text-9xl mt-5 bg-black text-white">
          GameOn
        </span>
      </div>
      <div className=" sm:h-60 sm:w-1/2">
        <Image src={BatsmanHome} />
      </div>
    </div>
  );
};

export default LandingPage;
