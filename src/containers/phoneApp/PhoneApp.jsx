import { AppImg } from "@/assets";
import Image from "next/image";
import React from "react";

const PhoneApp = () => {
  return (
    <div className="h-screen p-40">
      <p className="font-Varela text-6xl text-white bg-black w-fit p-2">
        Launching Soon:
      </p>

      <div className="flex p-5">
        <Image src={AppImg} width={500} alt="app image" />

        <div className="font-Varela text-2xl p-10 flex flex-col gap-5">
          <p> An App where you can host your own matches.</p>
          <p>An App from where you can take part in tournaments.</p>
        </div>
      </div>
    </div>
  );
};

export default PhoneApp;
