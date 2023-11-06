import React, { useState, useEffect } from 'react';
import userimg from "../../assets/dashboard/profile.jpg"

const AdminTopBar = () => {

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 60000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="topBar w-[300px] lg:w-full items-center justify-center flex flex-col shadow-md pb-10">
            <div className="icons w-full flex justify-end">
                <div className="flex flex-row gap-2 items-center mt-5 mb-5 mr-[45px]"></div>
            </div>
            {/* <div className='flex w-full flex-row items-center justify-center'> */}
                <div className="dash flex flex-col items-center justify-center gap-1">
                    <p className='md:text-4xl text-[20px] text-white font-bold'>Admin Dashboard</p>
                    <div className="bg-black p-4 w-full mt-[10px] rounded-lg shadow-lg">
                        <p className="text-green-400 text-2xl text-center">{currentTime.toLocaleTimeString().slice(0, 5)} PM</p>
                    </div>
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
            {/* </div> */}
        </div>
    );
}

export default AdminTopBar;
