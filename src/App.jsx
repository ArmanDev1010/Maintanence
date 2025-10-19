import React from "react";
import Logo from "../public/Logo.png";
import Video from "../public/video.mp4";

export default function App() {
  return (
    <div className="relative w-full min-h-screen text-white">
      <div className="absolute z-[2] w-full min-h-screen flex flex-col justify-between items-center">
        <div className="pt-[15%] pointer-events-none max-[650px]:w-[60%] max-[500px]:w-[80%] max-[650px]:pt-[25%]">
          <img
            src={Logo}
            alt="logo"
            className="mx-auto w-[450px] mb-20 max-[1280px]:mb-12 max-[650px]:w-auto max-[500px]:mb-20"
          />
          <div className="text-white text-2xl text-center max-[1280px]:text-2xl max-[650px]:text-xl">
            Under Construction...
          </div>
        </div>
        <ul
          className="pt-20 pb-24 w-full flex justify-center items-center flex-wrap text-lg gap-16 !gap-y-8 px-[5%]
      max-[900px]:gap-12 max-[650px]:text-lg max-[650px]:pb-12"
        >
          <li>
            <a href="mailto:boris@hb-links.com">boris@hb-links.com</a>
          </li>
          <li>
            <a href="tel:+13474290201">+1 (818) 303-3555</a>
          </li>
          <li className="pointer-events-none">California, USA</li>
        </ul>
      </div>
      <div className="absolute z-[0] top-0 left-0 w-full h-full">
        <video
          src={Video}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover bg-primary"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-[1] bg-black/60 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[15px]"></div>
    </div>
  );
}
