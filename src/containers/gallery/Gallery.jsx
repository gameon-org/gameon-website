import React from "react";
import Logo from "@/assets/LOGO.png";
import Image from "next/image";
import { Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9 } from "@/assets";

const LOGOS = [
  <Image src={Img1} width={500} alt="Facebook" />,
  <Image src={Img2} width={500} alt="Facebook" />,
  //   <Image src={Img3} width={500} alt="Facebook" />,
  //   <Image src={Img4} width={500} alt="Facebook" />,
  //   <Image src={Img5} width={500} alt="Facebook" />,
  <Image src={Img6} width={500} alt="Facebook" />,
  <Image src={Img7} width={500} alt="Facebook" />,
  <Image src={Img8} width={500} alt="Facebook" />,
  //   <Image src={Img9} width={500} alt="Facebook" />,
];

const Gallery = () => {
  return (
    <div id="Gallery" className=" h-screen w-full pt-40">
      <h2 className="text-5xl font-bold mb-20 pl-60">Gallery</h2>

      <div className="h-80">
        <div className="relative m-auto w-10/12 overflow-hidden  before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
          <div className="animate-infinite-slider flex w-[calc(500px*10)] ">
            {/* <div className="slide flex w-[125px] items-center justify-center">
              <Image src={Img1} height={300} alt="Facebook" />
            </div>
            <div className="slide flex w-[125px] items-center justify-center">
              <Image src={Img2} height={300} alt="Facebook" />
            </div>
            <div className="slide flex w-[125px] items-center justify-center">
              <Image src={Img3} height={300} alt="Facebook" />
            </div>
            <div className="slide flex w-[125px] items-center justify-center">
              <Image src={Img4} height={300} alt="Facebook" />
            </div>
            <div className="slide flex w-[125px] items-center justify-center">
              <Image src={Img5} height={300} alt="Facebook" />
            </div>
            <div className="slide flex w-[125px] items-center justify-center">
              <Image src={Img6} height={300} alt="Facebook" />
            </div>
            <div className="slide flex w-[125px] items-center justify-center">
              <Image src={Img7} height={300} alt="Facebook" />
            </div>
            <div className="slide flex w-[125px] items-center justify-center">
              <Image src={Img8} height={300} alt="Facebook" />
            </div>
            <div className="slide flex w-[125px] items-center justify-center">
              <Image src={Img9} height={300} alt="Facebook" />
            </div> */}

            {LOGOS.map((logo, index) => (
              <div
                className="m-4 slide flex w-full items-center justify-center"
                key={index}
              >
                {logo}
              </div>
            ))}
            {LOGOS.map((logo, index) => (
              <div
                className="m-4 slide flex w-full items-center justify-center"
                key={index}
              >
                {logo}
              </div>
            ))}
          </div>
        </div>

        {/* <div
          x-data="{}"
          x-init="$nextTick(() => {
        let ul = $refs.logos;
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
        })"
          class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(200%-128px),transparent_100%)]"
        >
          <ul
            x-ref="logos"
            class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
          >
            <li className="">
              <Image src={Img1} height={300} alt="Facebook" />
            </li>
            <li className="">
              <Image src={Img2} width={300} alt="Facebook" />
            </li>
            <li className="">
              <Image src={Img3} width={200} alt="Facebook" />
            </li>
            <li className="">
              <Image src={Img4} width={200} alt="Facebook" />
            </li>
            <li className="">
              <Image src={Img5} width={200} alt="Facebook" />
            </li>
            <li>
              <Image src={Img6} width={300} alt="Facebook" />
            </li>
            <li>
              <Image src={Img7} width={300} alt="Facebook" />
            </li>
            <li>
              <Image src={Img8} width={300} alt="Facebook" />
            </li>
          </ul>

          <ul
            class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll [mask-image:_linear-gradient(to_left,transparent_0,_black_128px,_black_calc(200%-128px),transparent_100%)]"
            aria-hidden="true"
          >
            <li className="w-5/6">
              <Image src={Img1} height={300} alt="Facebook" />
            </li>
            <li className="w-5/6">
              <Image src={Img2} width={300} alt="Facebook" />
            </li>
            <li className="w-5/6">
              <Image src={Img3} width={200} alt="Facebook" />
            </li>
            <li className="w-5/6">
              <Image src={Img4} width={200} alt="Facebook" />
            </li>
            <li className="w-5/6">
              <Image src={Img5} width={200} alt="Facebook" />
            </li>
            <li>
              <Image src={Img6} width={300} alt="Facebook" />
            </li>
            <li>
              <Image src={Img7} width={300} alt="Facebook" />
            </li>
            <li>
              <Image src={Img8} width={300} alt="Facebook" />
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default Gallery;
