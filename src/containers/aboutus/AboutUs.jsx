import { AboutusImg } from "@/assets";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div id="AboutUs" className="sm:h-screen mt-10 w-full p-1 drop-shadow-2xl  ">
      <div className="sm:flex sm:m-40 sm:p-5 bg-orange-500 text-white">
        <div>
          <p className="font-Crete text-4xl  sm:text-5xl p-2 sm:pb-5">What we Offer!</p>
          <div className="font-Varela text-2xl sm:text-3xl p-2 sm:pb-10">
            Easily find and book sports venues, including school grounds and
            academies, near your location.
          </div>
          <div className="font-Varela w-3/4  sm:text-xl">
            <p className="p-2 pl-5 sm:p-5">
              Connect with like-minded sports enthusiasts and find playing
              partners effortlessly.
            </p>
            <p className="p-2 pl-5 sm:p-5">
              Participate in organized sports tournaments and showcase your
              skills on a professional platform.
            </p>
          </div>
        </div>
        <div className="">
          <Image src={AboutusImg} width={1000}></Image>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
