import React, { useState } from "react";
import logo from '../../assets/1.png';

import { SiNetflix } from 'react-icons/si';
import { AiFillBell } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';


export default function Header() {
const [show, setShow] = useState(false);

const clickHandler =()=>{
  setShow(!show);
}


  return (
    <div className=" flex justify-between items-center px-[40px] py-[24px] ">
      <div className=" flex items-center gap-6  "> 
        <img className=" h-8  " src={logo} alt="netflix" />

        <div className=" flex list-none gap-4 ">
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
            <div className="relative ml-3">
          <div>
            <button onClick={clickHandler} type="button" className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              
              
            <img className="h-8 w-8 rounded-full"  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="pfdhoto" />
            </button>
          </div>

         {show && <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
           
           <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
           <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
           <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
         </div>}
          
        </div>
        </div>

      </div>
    </div>
  );
}
