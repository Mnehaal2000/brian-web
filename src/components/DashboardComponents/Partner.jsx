import React, { useState, useEffect } from 'react';
import icon1 from "../../assets/dashboard/partner/1.png";
import icon2 from "../../assets/dashboard/partner/2.png";
import PartnerInd from './PartnerInd';
import PartnerBus from './PartnerBus';

const Partner = () => {
    const [isInd, setisInd] = useState(false);
    const [isBus, setisBus] = useState(false);

    useEffect(() => {
        setisBus(false)
        setisInd(false)
    }, [])

    return (
        <div className="main w-full flex mb-[50px] flex-col justify-center items-center">
            {!isInd && !isBus && (
                <div className="main w-full mt-[20px] flex flex-row justify-center gap-[23px] items-center">
                    <div
                        className='w-[465px] h-[537px] flex flex-col rounded-lg justify-center items-center gap-4 '
                        style={{ backgroundImage: `url(${icon1})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
                    >
                        <button
                            onClick={() => {
                                setisInd(true);
                                setisBus(false);
                            }}
                            className='w-[310px]  hover:bg-blue-600 hover:text-white transition-all duration-150 hover:ring-4 hover:ring-blue-400 cursor-pointer rounded-lg h-[85px] font-bold text-white text-3xl'
                            style={{ background: "linear-gradient(to right, #29A9E3, #272C36)" }}
                        >
                            Individual
                        </button>
                    </div>
                    <div
                        className='w-[465px] h-[537px] flex flex-col rounded-lg justify-center items-center gap-4 '
                        style={{ backgroundImage: `url(${icon2})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
                    >
                        <button
                            onClick={() => {
                                setisInd(false);
                                setisBus(true);
                            }}
                            className='w-[310px] hover:bg-blue-600 hover:text-white transition-all duration-150 hover:ring-4 hover:ring-blue-400 cursor-pointer rounded-lg h-[85px] font-bold text-white text-3xl'
                            style={{ background: "linear-gradient(to right, #29A9E3, #272C36)" }}
                        >
                            Business
                        </button>
                    </div>
                </div>
            )}
            {isInd && <PartnerInd />}
            {isBus && <PartnerBus />}
        </div>
    );
};

export default Partner;
