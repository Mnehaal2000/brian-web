import React from 'react';
import s1 from "../../assets/dashboard/home/s1.png"

const NotificationsComponent = ({ data }) => {
    // You can customize the rendering of your component here
    return (
        <div className="NotificationsComponent">
            <div className='w-[800px] h-[120px] flex flex-row gap-[30px] rounded-md justify-start items-center' style={{ background: "linear-gradient(#29A9E3, #272C36)" }}>
                <img className='ml-[40px] w-[80px] h-[80px]' src={s1} alt="" />
                <p className='text-white text-center'>You have recieved a bonus of $100</p>
                <span className='text-[#00FFE3] text-[25px] font-bold'>+100</span>
            </div>
        </div>
    );
};

export default NotificationsComponent;
