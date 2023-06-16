import React from "react";
import Tv1 from '../../assets/tv.png'

export default function Tv() {
  return (
    <div className=" border-y-[10px] border-[#232323] bg-black ">
      <div className=" flex items-center mx-44 my-10 ">
        <div className=" text-white  ">
          <span className=" text-[48px] font-bold ">Enjoy on your TV</span>
          <p className=" text-[24px]  ">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </p>
        </div>
        
        <img className=" w-[550px] h-[400px] " src={Tv1} alt="Tv" />
      </div>
    </div>
  );
}
