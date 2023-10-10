import React, { useState, useEffect } from 'react'
import c1 from "../../assets/dashboard/home/1.png"
import c2 from "../../assets/dashboard/home/2.png"
import c3 from "../../assets/dashboard/home/3.png"
import c4 from "../../assets/dashboard/home/4.png"
import eco1 from "../../assets/dashboard/achievements/1.png"
import Progressform from "../../components/DashboardComponents/Progressform"

const Achievements = () => {
    const [openButton, setOpenButton] = useState(null);

    const handleButtonClick = (buttonId) => {
        setOpenButton(buttonId);
    };
    return (
        <>
            <div className="main w-full flex flex-col mb-[40px] justify-center items-center">

                <div className='w-[900px] mt-[30px] flex flex-row lg:gap-[57px] justify-center'>
                    <div className="w-[320px] h-[168px] flex flex-col justify-center gap-1 items-center p-5 rounded-md" style={{ background: "linear-gradient(#29A9E3, #272C36)" }}>
                        <img src={c1} alt="" />
                        <h3 className='font-bold text-white text-4xl'>$ 1700</h3>
                        <p className='text-white'>Active Portfolio</p>
                    </div>
                    <div className="w-[320px] h-[168px] flex flex-col justify-center gap-1 items-center p-5 rounded-md" style={{ background: "linear-gradient(#29A9E3, #272C36)" }}>
                        <img src={c3} alt="" />
                        <h3 className='font-bold text-white text-4xl'>$ 25,000</h3>
                        <p className='text-white'>Total Team Portfolio</p>
                    </div>
                    <div className="w-[320px] h-[168px] flex flex-col justify-center gap-1 items-center p-5 rounded-md" style={{ background: "linear-gradient(#29A9E3, #272C36)" }}>
                        <img src={c2} alt="" />
                        <h3 className='font-bold text-white text-4xl'>$ 3700</h3>
                        <p className='text-white'>Team Portfolio Level 1</p>
                    </div>
                </div>

                <div className='w-[900px] mt-[30px] flex flex-row justify-center items-center'>
                    <div className="w-[270px] h-[168px] flex flex-col justify-center gap-1 items-center p-5 rounded-md" style={{ background: "linear-gradient(#29A9E3, #272C36)" }}>
                        <img src={c4} alt="" />
                        <h3 className='font-bold text-white text-4xl'>$ 500</h3>
                        <p className='text-white'>Total Rewards</p>
                    </div>
                </div>

                <div className='w-[900px] mt-[40px] flex flex-col lg:gap-[30px] justify-start'>
                {['Alpha', 'Beta', 'Gamma', 'Delta', 'Theta', 'Omega'].map((label, index) => (
                    <div key={index}>
                        {openButton === index ? (
                            <div className='flex flex-col gap-4 justify-start'>
                                <div className='flex flex-row gap-5 justify-start items-center'>
                                    <h3 className={`text-white font-bold text-2xl`}>
                                        {label}
                                    </h3>
                                    <img src={eco1} alt="" />
                                </div>
                                <button
                                    onClick={() => handleButtonClick(null)}
                                    className={`w-[336px] h-[56px] rounded-sm text-white font-bold bg-gradient-to-r from-[#E29723] to-[#A46B0D]`}
                                >
                                    Check Eligibility
                                </button>
                                <Progressform />
                            </div>
                        ) : (
                            <div className='flex flex-col gap-4 justify-start'>
                                <div className='flex flex-row gap-5 justify-start items-center'>
                                    <h3 className={`text-white font-bold text-2xl`}>
                                        {label}
                                    </h3>
                                    <img src={eco1} alt="" />
                                </div>
                                <button
                                    onClick={() => handleButtonClick(index)}
                                    className={`w-[336px] h-[56px] rounded-sm text-white font-bold bg-gradient-to-r from-[#08BD5C] to-[#03AC51]`}
                                >
                                    Check Eligibility
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
              
            </div>
        </>
    )
}

export default Achievements