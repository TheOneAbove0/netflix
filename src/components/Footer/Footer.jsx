import React from "react";
import { BsGlobe } from 'react-icons/bs';
import { AiFillCaretDown } from 'react-icons/ai';


export default function Footer() {
  return (
    <div className="relative border-t-[10px] border-[#232323] bg-black ">
      <div className=" text-white ">
      <div>
        <p>Questions? Contact us.</p>
        <div>
          <li className=" none ">FAQ</li>
          <li className=" none ">Media Center</li>
          <li className=" none ">Ways to Watch</li>
          <li className=" none ">Cookie Preferences</li>
          <li className=" none ">Speed Test</li>
        </div>

        <div className=" flex gap-1 px-3 py-1 rounded-[3px] border-[1px]  border-white w-fit text-white  items-center">
          <BsGlobe />
          <span>English</span>
          <AiFillCaretDown />

        </div>
        <span>Netflix Nepal</span>
      </div>


      </div>
    </div>
  );
}
