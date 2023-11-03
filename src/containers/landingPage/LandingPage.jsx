import Image from "next/image";
import React from "react";

const LandingPage = () => {
  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="">
        <p>Play to</p>
        <span>your</span>
        <p>Fullest with</p>
        <span>GameOn</span>
      </div>
      <div className="">{/* <Image></Image> */}</div>
    </div>
  );
};

export default LandingPage;
