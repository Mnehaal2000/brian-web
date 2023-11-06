import React from 'react';
import userimg from "../../assets/dashboard/profile.jpg"

const TopBar = () => {
    return (
        <div className="topBar w-[1000px] lg:w-full flex flex-col shadow-md pb-10">
            {/* <div className="icons w-full flex justify-end">
                <div className="flex flex-row gap-2 items-center mt-5 mb-5 mr-[45px]">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                    <img className='w-[40px] h-[40px] rounded-full' src={userimg} alt="" />
                    <div className="relative">
                        <div className='absolute top-0 left-5 w-3 h-3 rounded-full bg-red-700'></div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                        </svg>
                    </div>


                </div>
            </div> */}
            <div className='flex w-full flex-row mt-[25px] items-center justify-between'>
                <div className="dash flex flex-col gap-1 ml-[40px]">
                    <p className='text-4xl text-white font-bold'>Dashboard</p>
                    <p className=' text-white'>See your account information here</p>
                </div>

                {/* <div className='flex flex-row gap-5 items-center justify-center mr-[40px]'>
                    <div className="relative">
                        <input style={{ background: "linear-gradient(to right, #29A9E3, #00A34C)" }} type="search" name="q" className="py-2 placeholder-white text-sm text-white pl-10 w-[325px] outline-none h-[56px] rounded-[11px]" placeholder="Type here to search something..." autoComplete="off" />
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" className="w-6 text-white h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </button>
                        </span>
                    </div>

                    <div className="relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 cursor-pointer">
                        <button style={{ background: "linear-gradient(to right, #29A9E3, #00A34C)" }} className='w-[231px] h-[56px] rounded-[11px] text-white cursor-pointer'>Make a new deposit</button>
                        <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </span>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default TopBar;
