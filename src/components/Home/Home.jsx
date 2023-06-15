import logo from '../../assets/1.png'
export default function Home() {
    return (
      
        <div className=" min-h-full bg-[url('https://cdn.arstechnica.net/wp-content/uploads/2022/07/netflix.jpg')]">
      <div className="bg-black h-screen bg-opacity-70">
        <div className='  flex justify-between  py-10 items-center text-white text-[24px] mx-9 '>
            <img className=' w-[185px] '  src={logo} alt="netflix-logo" />
            <div className=' flex gap-10 '>
                <div className=' border-white px-2 border-[1px] rounded-sm  '>English</div>
                <span className=' text-white bg-red-500 px-2 rounded-[4px] '>Sign in</span>
            </div>
        </div>



      </div>
      </div>
    );
  }
  