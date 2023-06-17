import React from "react";
import logo from '../../assets/1.png';

import { SiNetflix } from 'react-icons/si';
import { AiFillBell } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';


export default function Header() {
  return (
    <div className=" flex justify-between items-center px-[40px] py-[24px] ">
      <div className=" flex items-center gap-6  "> 
        <img className=" h-8  " src={logo} alt="netflix" />

        <div className=" flex list-none gap-4  ">
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>People</li>
            <li>Favorite</li>
            <li>About</li>

        </div>
      </div>

      {/* search and icon */}
      <div className=" flex items-center gap- ">
        <div className=" flex items-center border-[5px] ">
            <input type="text" className=" px-[16px] py-[8px] " />
            <AiOutlineSearch className=" w-6 h-6  mx-[10px] " />
        </div>

        <div className=" flex items-center gap-4 ">
            <AiFillBell className=" ml-[20px] h-5 w-6 " />
            <SiNetflix  className=" text-[#991B1B] "/>
            <img className=" w-8 h-8 object-cover " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWIrieZJpevifLEQ5tPnpugFhFgziqusuQhA&usqp=CAU" alt="boy" />

        </div>

      </div>
    </div>
  );
}
