import logo from "../../assets/1.png";
export default function Home() {
  return (
    <div className=" object-cover  min-h-[690px] bg-[url('https://cdn.arstechnica.net/wp-content/uploads/2022/07/netflix.jpg')]">
      <div className="  bg-black min-h-[690px] bg-opacity-70">
        <div className="  flex justify-between  py-5 items-center text-white text-[24px] mx-32 ">
          <img className=" w-[185px] " src={logo} alt="netflix-logo" />
          <div className=" flex gap-10 items-center justify-center ">
            
            <span className=" text-white  cursor-pointer text-[16px] bg-red-600 hover:bg-red-700 px-3 py-1 rounded-[4px] ">
              Sign in
            </span>
          </div>
        </div>

        <div className=" flex flex-col items-center mt-28 text-white ">
          <h1 className=" text-[49px] font-bold  text-center ">
            Unlimited movies, TV shows, and more
          </h1>
          <p className=" text-[24px] font-semibold mb-5  text-center ">
            Plans now start at USD2.99/month.
          </p>
          <p className=" text-[20px] font-semibold   ">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className=" flex mt-12 gap-4  ">
            <input
              placeholder="Email address"
              className=" border px-4 rounded-sm bg-black bg-opacity-70 w-[400px] font-semibold text-gray-500  "
              type="text"
            />
            <span className=" text-white font-bold text-[18px] cursor-pointer bg-red-600 hover:bg-red-700 py-4 px-10  rounded-[5px] ">
              Get Started 
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
