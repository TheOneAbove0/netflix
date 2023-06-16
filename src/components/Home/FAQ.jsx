import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';


export default function FAQ() {
  return (
    <div className=' bg-black flex flex-col items-center py-16 '>
        <h1 className='  text-white font-bold text-[48px] mb-5 '>Frequently Asked Questions</h1>
        <div className=' flex flex-col gap-3 '>
            <div className=' bg-[#2D2D2D] text-[24px] text-white hover:bg-[#4E4E4E] p-[24px] flex items-center justify-between w-[1213px]  mx-auto '>
                <p>What is Netflix?</p>
                <AiOutlinePlus className=' text-[38px] ' />

            </div>

            <div className=' bg-[#2D2D2D] text-[24px] text-white hover:bg-[#4E4E4E] p-[24px] flex items-center justify-between w-[1213px]  mx-auto '>
                <p>How much does Netflix cost?</p>
                <AiOutlinePlus className=' text-[38px] ' />

            </div>

            <div className=' bg-[#2D2D2D] text-[24px] text-white hover:bg-[#4E4E4E] p-[24px] flex items-center justify-between w-[1213px]  mx-auto '>
                <p>Where can I watch?</p>
                <AiOutlinePlus className=' text-[38px] '/>

            </div>

            <div className=' bg-[#2D2D2D] text-[24px] text-white hover:bg-[#4E4E4E] p-[24px] flex items-center justify-between w-[1213px]  mx-auto '>
                <p>How do I cancel?</p>
                <AiOutlinePlus className=' text-[38px] ' />

            </div>

            <div className=' bg-[#2D2D2D] text-[24px] text-white hover:bg-[#4E4E4E] p-[24px] flex items-center justify-between w-[1213px]  mx-auto '>
                <p>What can I watch on Netflix?</p>
                <AiOutlinePlus className=' text-[38px] ' />

            </div>

            <div className=' bg-[#2D2D2D] text-[24px] text-white hover:bg-[#4E4E4E] p-[24px] flex items-center justify-between w-[1213px]  mx-auto '>
                <p>Is Netflix good for kids?</p>
                <AiOutlinePlus className=' text-[38px] ' />

            </div>
        </div>

        <p className=' text-[20px] mt-9 mb-5 text-white '>Ready to watch? Enter your email to create or restart your membership.</p>
        <div className=' flex gap-4 '> 
            <input placeholder='Email address' className='  border  px-4 rounded-sm bg-black bg-opacity-70 w-[400px] font-semibold text-gray-500 border-[#236E52]' type="text" />
            <p className='  text-white font-bold text-[18px] cursor-pointer bg-red-600 hover:bg-red-700 py-4 px-10  rounded-[5px] ' >Get Started</p>
        </div>
    
    </div>
  )
}
