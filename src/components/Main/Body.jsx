import React from "react";
import SS from "../../assets/ss.mp4";

// import { AiFillPlayCircle, AiOutlinePlus } from "react-icons/ai";
// import { FaRegThumbsUp } from "react-icons/fa";
// import { BsChevronDown } from "react-icons/bs";

export default function Body() {
  return (
    <div className=" relative">
      <video className="absolute  w-[100%] min-h-[70vh]  " autoPlay loop>
        <source src={SS} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className=" absolute text-white mx-[40px]  top-40"> 
      <h1 className=" text-[60px] font-normal ">Spider-Man: Across... </h1>
      <p className=" text-[24px] w-[550px] mt-6 ">After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he</p>
      <div>
        <span>Play</span>
      </div>
      </div>
      <div className="absolute top-[550px] ">
        <div className="flex flex-col">
          <div className="text-[20px] mx-[40px]  font-semibold text-white my-2 ">
            {" "}
            Trending Now
          </div>
          <div className=" mt-2  mx-[40px] px-1  flex gap-2 overflow-x-hidden scrollbar-hidden shrink-0 ">
            <img
              alt="fsd"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzECRU983y8tpDNUKG46T1eD9g0DSMv5iRXw&usqp=CAU"
              className=" w-[260px] h-[144px] rounded-[5px] object-cover shrink-0  "
            />
            <img
              alt="fsd"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiAuGe6CRvODytDYrG6d77q6OLAcMz_3XELg&usqp=CAU"
              className=" w-[260px] h-[144px] rounded-[5px] object-cover shrink-0  "
            />
            <img
              alt="fsd"
              src="https://media.designrush.com/tinymce_images/205878/conversions/2.-Wendy-content.jpg"
              className=" w-[260px] h-[144px] rounded-[5px] object-cover shrink-0  "
            />
            <img
              alt="fsd"
              src="https://variety.com/wp-content/uploads/2023/04/Fs3w6bIaYAA0TEb.jpeg?w=800"
              className=" w-[260px] h-[144px] rounded-[5px] object-cover shrink-0  "
            />
            <img
              alt="fsd"
              src="https://filmfare.wwmindia.com/content/2022/dec/pathaan21669878743.jpg"
              className=" w-[260px] h-[144px] rounded-[5px] object-cover shrink-0  "
            />
            <img
              alt="fsd"
              src="https://lumiere-a.akamaihd.net/v1/images/p_blackwidow_21043_v2_6d1b73b8.jpeg"
              className=" w-[260px] h-[144px] rounded-[5px] object-cover shrink-0  "
            />
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="text-[20px] mx-[40px]  font-semibold text-white my-2 ">
            {" "}
            New Releases
          </div>
          <div className=" mt-2  mx-[40px] px-1  flex gap-2 overflow-x-hidden scrollbar-hidden shrink-0 ">
            <img
              alt="fsd"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPMsPlomYpL-O7UR-BzziSKvhAQqex-4YNsg&usqp=CAU"
              className=" w-[260px] h-[144px] rounded-[5px] object-cover shrink-0  "
            />
            <img
              alt="fsd"
              src="https://media.designrush.com/tinymce_images/205878/conversions/2.-Wendy-content.jpg"
              className=" w-[260px] h-[144px] rounded-[5px] object-cover shrink-0  "
            />
            <img
              alt="fsd"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzECRU983y8tpDNUKG46T1eD9g0DSMv5iRXw&usqp=CAU"
              className=" w-[260px] h-[144px] rounded-[5px] object-cover shrink-0  "
            />
            <img
              alt="fsd"
              src="https://timesofindia.indiatimes.com/photo/92037704.cms"
              className=" w-[260px] h-[144px] rounded-[5px] object-cover shrink-0  "
            />
            <img
              alt="fsd"
              src="https://filmfare.wwmindia.com/content/2022/dec/pathaan21669878743.jpg"
              className=" w-[260px] h-[144px] rounded-[5px] object-cover shrink-0  "
            />
            <img
              alt="fsd"
              src="https://lumiere-a.akamaihd.net/v1/images/p_blackwidow_21043_v2_6d1b73b8.jpeg"
              className=" w-[260px] h-[144px] rounded-[5px] object-cover shrink-0  "
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-[20px] mx-[40px]  font-semibold text-white my-2 ">
            {" "}
            Only on Netflix
          </div>
          <div className=" mt-2  mx-[40px] px-1  flex gap-2 overflow-x-hidden scrollbar-hidden shrink-0 ">
            <img
              alt="fsd"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzECRU983y8tpDNUKG46T1eD9g0DSMv5iRXw&usqp=CAU"
              className=" w-[260px] h-[144px] rounded-[5px] object-cover shrink-0  "
            />
            <img
              alt="fsd"
              src="https://variety.com/wp-content/uploads/2023/04/Fs3w6bIaYAA0TEb.jpeg?w=800"
              className=" w-[260px] h-[144px] rounded-[5px] object-cover shrink-0  "
            />
            <img
              alt="fsd"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiAuGe6CRvODytDYrG6d77q6OLAcMz_3XELg&usqp=CAU"
              className=" w-[260px] h-[144px] rounded-[5px] object-cover shrink-0  "
            />
            <img
              alt="fsd"
              src="https://media.designrush.com/tinymce_images/205878/conversions/2.-Wendy-content.jpg"
              className=" w-[260px] h-[144px] rounded-[5px] object-cover shrink-0  "
            />
            <img
              alt="fsd"
              src="https://filmfare.wwmindia.com/content/2022/dec/pathaan21669878743.jpg"
              className=" w-[260px] h-[144px] rounded-[5px] object-cover shrink-0  "
            />
            <img
              alt="fsd"
              src="https://lumiere-a.akamaihd.net/v1/images/p_blackwidow_21043_v2_6d1b73b8.jpeg"
              className=" w-[260px] h-[144px] rounded-[5px] object-cover shrink-0  "
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-[20px] mx-[40px]  font-semibold text-white my-2 ">
            {" "}
            Hollywood Movies
          </div>
          <div className=" mt-2  mx-[40px] px-1  flex gap-2 overflow-x-hidden scrollbar-hidden shrink-0 ">
            <img
              alt="fsd"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiAuGe6CRvODytDYrG6d77q6OLAcMz_3XELg&usqp=CAU"
              className=" w-[260px] h-[144px] rounded-[5px] object-cover shrink-0  "
            />
            <img
              alt="fsd"
              src="https://variety.com/wp-content/uploads/2023/04/Fs3w6bIaYAA0TEb.jpeg?w=800"
              className=" w-[260px] h-[144px] rounded-[5px] object-cover shrink-0  "
            />
            <img
              alt="fsd"
              src="https://lumiere-a.akamaihd.net/v1/images/p_blackwidow_21043_v2_6d1b73b8.jpeg"
              className=" w-[260px] h-[144px] rounded-[5px] object-cover shrink-0  "
            />
            <img
              alt="fsd"
              src="https://media.designrush.com/tinymce_images/205878/conversions/2.-Wendy-content.jpg"
              className=" w-[260px] h-[144px] rounded-[5px] object-cover shrink-0  "
            />
            <img
              alt="fsd"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzECRU983y8tpDNUKG46T1eD9g0DSMv5iRXw&usqp=CAU"
              className=" w-[260px] h-[144px] rounded-[5px] object-cover shrink-0  "
            />
            <img
              alt="fsd"
              src="https://filmfare.wwmindia.com/content/2022/dec/pathaan21669878743.jpg"
              className=" w-[260px] h-[144px] rounded-[5px] object-cover shrink-0  "
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-[20px] mx-[40px]  font-semibold text-white my-2 ">
            {" "}
            Watch It Again
          </div>
          <div className=" mt-2  mx-[40px] px-1  flex gap-2 overflow-x-hidden scrollbar-hidden shrink-0 ">
            <img
              alt="fsd"
              src="https://lumiere-a.akamaihd.net/v1/images/p_20cs_amsterdam_1026_a1f05d4b.jpeg?region=0%2C0%2C540%2C810"
              className=" w-[260px] h-[144px] rounded-[5px] object-cover shrink-0  "
            />
            <img
              alt="fsd"
              src="https://filmfare.wwmindia.com/content/2022/dec/pathaan21669878743.jpg"
              className=" w-[260px] h-[144px] rounded-[5px] object-cover shrink-0  "
            />
            <img
              alt="fsd"
              src="https://media.designrush.com/tinymce_images/205878/conversions/2.-Wendy-content.jpg"
              className=" w-[260px] h-[144px] rounded-[5px] object-cover shrink-0  "
            />
            <img
              alt="fsd"
              src="https://variety.com/wp-content/uploads/2023/04/Fs3w6bIaYAA0TEb.jpeg?w=800"
              className=" w-[260px] h-[144px] rounded-[5px] object-cover shrink-0  "
            />
            <img
              alt="fsd"
              src="https://lumiere-a.akamaihd.net/v1/images/p_blackwidow_21043_v2_6d1b73b8.jpeg"
              className=" w-[260px] h-[144px] rounded-[5px] object-cover shrink-0  "
            />
            <img
              alt="fsd"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiAuGe6CRvODytDYrG6d77q6OLAcMz_3XELg&usqp=CAU"
              className=" w-[260px] h-[144px] rounded-[5px] object-cover shrink-0  "
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-[20px] mx-[40px]  font-semibold text-white my-2 ">
            {" "}
            Movies Based On Real Life
          </div>
          <div className=" mt-2 mx-[40px] px-1  flex gap-2 overflow-x-hidden scrollbar-hidden shrink-0 ">
            <img
              alt="fsd"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiAuGe6CRvODytDYrG6d77q6OLAcMz_3XELg&usqp=CAU"
              className=" w-[260px] h-[144px] rounded-[5px] object-cover shrink-0  "
            />
            <img
              alt="fsd"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzECRU983y8tpDNUKG46T1eD9g0DSMv5iRXw&usqp=CAU"
              className=" w-[260px] h-[144px] rounded-[5px] object-cover shrink-0  "
            />
            <img
              alt="fsd"
              src="https://media.designrush.com/tinymce_images/205878/conversions/2.-Wendy-content.jpg"
              className=" w-[260px] h-[144px] rounded-[5px] object-cover shrink-0  "
            />
            <img
              alt="fsd"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNY_tQ8Xx6yHcQ1vyNc43hBn2bcWhpcEfa7Q&usqp=CAU"
              className=" w-[260px] h-[144px] rounded-[5px] object-cover shrink-0  "
            />
            <img
              alt="fsd"
              src="https://variety.com/wp-content/uploads/2023/04/Fs3w6bIaYAA0TEb.jpeg?w=800"
              className=" w-[260px] h-[144px] rounded-[5px] object-cover shrink-0  "
            />
            <img
              alt="fsd"
              src="https://filmfare.wwmindia.com/content/2022/dec/pathaan21669878743.jpg"
              className=" w-[260px] h-[144px] rounded-[5px] object-cover shrink-0  "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Spider-Man: Across the Spider-Verse
// After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged
