import React, { useState } from "react";
import { AiFillPlayCircle, AiOutlinePlus } from "react-icons/ai";
import { FaRegThumbsUp } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";

export default function Body() {
  const [show, setShow] = useState(false);

  return (
    <div className=" flex gap-5 ">
      <div className=" mx-20 w-64 min-h-full  hover:scale-150 ease-in-out duration-700 ">
        <div className=" ease-in-out duration-700 ">
          <img
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
            src="data:image/jpeg;base64,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"
            alt="fdsa"
          />
        </div>
        {show && (
          <div
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
            className="  bg-[#140A04] py-[24px] px-[16px] ease-in-out duration-700   flex flex-col gap-3 "
          >
            <div className=" flex gap-16  items-center  bg-[#140A04]  ">
              <div className=" flex text-white gap-2 ">
                <AiFillPlayCircle className=" w-[36px] h-[36px] p-1   rounded-full border-gray-500 hover:border-white border-[3px] " />
                <AiOutlinePlus className=" w-[36px] h-[36px] p-1  rounded-full border-gray-500 hover:border-white border-[3px] " />
                <FaRegThumbsUp className=" w-[36px] h-[36px] rounded-full border-gray-500 hover:border-white border-[3px] p-1 " />
              </div>
              <div>
                <BsChevronDown className=" w-[36px] h-[36px] p-1  rounded-full border-gray-500 hover:border-white border-[3px] text-white   " />
              </div>
            </div>

            <div className=" flex text-white gap-2 text-[12px] items-center ">
              <p className=" text-green-600 ">76% Match</p>
              <span className=" border-gray-500 border-[2px]   ">4+</span>
              <p className=" text-[white] ">2h 4m</p>
              <span className=" border-gray-500 border-[2px]  ">HD</span>
            </div>

            <p className=" text-white ">Crime.Drama</p>
          </div>
        )}

        
      </div>


      
    </div>
  );
}
