import React from 'react'
import cardpic from "../../assets/newspage/cardpic.png"
import userpic from "../../assets/newspage/user.png"

const Newscard = () => {
    return (
        <>
            <div className="newscard mt-5 w-[300px] md:w-[300px] h-[650px] bg-white rounded-[20px] flex flex-col items-center shadow-md">
            <img src={cardpic} className='md:w-[300px]' alt="image" />
            <div className='p-4'>
            <h3 className='text-[#64AA6E] text-sm'>Energy Investment</h3>
            <h2 className='text-black font-bold text-lg mt-1 mb-1'>Cum socis natoque penatibus et magnis is partiretn montes anfs diasf kaeignt</h2>
            <span className='mt-1 mb-1'>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur</span>
            <div className='mt-3 flex gap-2 flex-row'>
                <img src={userpic} alt="" />
                <div className='flex flex-col'>
                    <span className='text-black font-bold'>Nehaal</span>
                    <span>July 7, 2023</span>
                </div>
            </div>
            </div>
            </div>
        </>
    )
}

export default Newscard