import React from "react";
import logo from "../../assets/1.png";
import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <div className=' bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/39f3c979-c105-4948-9c51-611eedf3a6fd/f5efd389-78b9-4862-8dfa-862bdfef9de7/NP-en-20230612-popsignuptwoweeks-perspective_alpha_website_large.jpg")] '>
      <div className="  bg-black  bg-opacity-60">
        <Link to="/">
          <img src={logo} className=" w-[200px] ml-9 pt-4 " alt="netflix" />
        </Link>
        <div className=" flex  gap-4 items-center  flex-col text-white  ">
          <div className=" flex flex-col item-start p-16  rounded-md bg-black  bg-opacity-50 ">
            <span className=" text-[32px] font-medium mb-5 ">Sign in</span>
            <input
              className=" w-[300px] p-3 my-4 rounded-md "
              type="text"
              placeholder=" Email or phone number "
            />
            <input
              className=" w-[300px] p-3 rounded-md "
              type="password"
              placeholder=" password"
            />
            <span className=" w-[300px] bg-[#E50914] rounded-md  text-white mt-10 text-center p-3 ">
              Sign In
            </span>
            <div className=" flex justify-between items-center mt-2 text-[#737373]  ">
              <div className=" flex items-center gap-1 text-[#737373]  ">
                <input
                  className=" bg-gray-600 text-gray-600 "
                  type="checkbox"
                />
                <span>Remember me</span>
              </div>
              <p>Need help?</p>
            </div>

            <div className=" mt-20  mb-24 ">
              <p className=" mb-2 ">
                <span className=" text-[#737373] ">New to Netflix?</span> Sign
                up now.
              </p>
              <p className=" w-[310px] text-[13px] text-[#737373]  ">
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot <span className=" text-[#066FEB]">Learn more.</span>
              </p>
            </div>
          </div>
        </div>

        <div className=" mt-20 text-[13px] text-[#737373] bg-black bg-opacity-70 px-64 pt-8 ">
          <p>Questions? Contact us.</p>
          <div className=" pt-7 flex gap-36 pb-7 ">
            <div className=" flex flex-col gap-2 ">
              <p>FAQ</p>
              <span>Cookie Preferences</span>
            </div>

            <div className=" flex flex-col gap-2 ">
              <p>Help Center</p>
              <span>Corporate Information</span>
            </div>

            <div className=" flex flex-col gap-2 ">
              <p>Terms of Use</p>
            </div>

            <div className=" flex flex-col gap-2 ">
              <p>Privacy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
