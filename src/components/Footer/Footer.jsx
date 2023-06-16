import React from "react";
import { BsGlobe } from 'react-icons/bs';
import { AiFillCaretDown } from 'react-icons/ai';


export default function Footer() {
  return (
    <div className="relative border-t-[10px] border-[#232323] bg-black ">
      <div className=" text-white flex mx-44 py-16 text-[14px] items-center ">
      <div className="  ">
        <p className=" mb-7 ">Questions? Contact us.</p>
        <div className=" flex  gap-72 ">
          <div className=" flex flex-col gap-3 ">
          <li className=" list-none ">FAQ</li>
          <li className=" list-none ">Media Center</li>
          <li className=" list-none ">Ways to Watch</li>
          <li className=" list-none ">Cookie Preferences</li>
          <li className=" list-none ">Speed Test</li>
          </div>

          <div className=" flex flex-col gap-3 ">
        <li className=" list-none ">Help Center</li>
        <li className=" list-none ">Investor Relations</li>
        <li className=" list-none ">Terms of Use</li>
        <li className=" list-none ">Corporate Information</li>
        <li className=" list-none ">Legal Notices</li>
      </div>

      <div className=" flex flex-col gap-3 ">
      <li className=" list-none " >Account</li>
        <li className=" list-none ">Jobs</li>
        <li className=" list-none ">Privacy</li>
        <li className=" list-none ">Contact Us</li>
      <li className=" list-none ">Only on Netflix</li>
      </div>
          
        </div>

        <div className=" mt-8 flex gap-2 px-4 py-1 rounded-[3px] border-[1px]  border-white w-fit text-white  items-center">
          <BsGlobe />
          <span>English</span>
          <AiFillCaretDown />

        </div>
        <div className=" mt-6 ">Netflix Nepal</div>
      </div>

      


      </div>
    </div>
  );
}
