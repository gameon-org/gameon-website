import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div id="AboutUs" className="h-screen p-1 drop-shadow-2xl  ">
      <div className="flex m-40 p-5 w-1/2 bg-orange-500 text-white">
        <div>
          <p className="font-Crete text-5xl pb-5">What we Offer!</p>
          <div className="font-Varela text-3xl pb-10">
            Easily find and book sports venues, including school grounds and
            academies, near your location.
          </div>
          <div className="font-Varela w-3/4 text-xl">
            <p className="p-5">
              Connect with like-minded sports enthusiasts and find playing
              partners effortlessly.
            </p>
            <p className="p-5">
              Participate in organized sports tournaments and showcase your
              skills on a professional platform.
            </p>
          </div>
        </div>
        <div className="w-1/2">{/* <Image></Image> */}</div>
      </div>
    </div>
  );
};

export default AboutUs;
