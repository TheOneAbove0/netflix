import React from "react";
import Tv1 from "../../assets/tv.png";
import Tv2 from "../../assets/tv-video.m4v";
import Mobile from "../../assets/mobile.gif";
import { AiOutlineDownload } from "react-icons/ai";
import child from "../../assets/children.png";

export default function Tv() {
  return (
    <div>
      <div className=" Tv relative border-y-[10px] border-[#232323] bg-black ">
        <div className=" flex items-center mx-44 my-16 ">
          <div className=" text-white  ">
            <span className=" text-[48px] font-bold ">Enjoy on your TV</span>
            <p className=" text-[24px]  ">
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </p>
          </div>

          <img className=" w-[550px] z-20 h-[400px] " src={Tv1} alt="Tv" />
          <video className=" absolute w-[390px] h-[310px]  right-[250px] "  autoPlay loop >
            <source src={Tv2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className=" Mobile  relative border-b-[10px]  border-t-[1px] border-[#232323] bg-black ">
        <div className=" flex items-center mx-44 my-16 ">
          <img className=" w-[550px]  h-[400px] " src={Mobile} alt="Tv" />

          {/* <div className=" w-[307px] h-[95px] flex absolute top-[360px] left-[280px] gap-3 px-2 z-5 items-center border-2  border-[#232323] rounded-[10px] bg-black  ">
            <img
              className=" w-[57px] h-[80px] "
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
              alt="book"
            />
            <div className="  ">
              <span className=" font-medium text-white ">Stranger Things</span>
              <p className=" text-[14px] text-[#0032d5] ">Downloading...</p>
            </div>
            <AiOutlineDownload className=" text-white ml-12 text-[20px] " />
          </div> */}

          <div className=" text-white  ">
            <span className=" text-[48px] font-bold ">
              Download your shows to watch offline
            </span>
            <p className=" text-[24px]  ">
              Save your favorites easily and always have something to watch.
            </p>
          </div>
        </div>
      </div>

      <div className=" Children  relative border-b-[10px]  border-t-[1px] border-[#232323] bg-black ">
        <div className=" flex items-center mx-52 my-16 ">
          <img
            className=" w-[550px] object-cover  h-[450px] "
            src={child}
            alt="Tv"
          />

          <div className=" text-white  ">
            <span className=" text-[48px] font-bold ">
              Create profiles for kids
            </span>
            <p className=" text-[24px]  ">
              Send kids on adventures with their favorite characters in a space
              made just for them—free with your membership.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
