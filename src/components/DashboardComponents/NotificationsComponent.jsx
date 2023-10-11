import React from 'react';

const NotificationsComponent = ({ data }) => {
    const amount = data.amount?data.amount:0
    return (
        <div className="NotificationsComponent">
            <div className='w-[800px] h-[120px] flex flex-row gap-[30px] rounded-md justify-start items-center' style={{ background: "linear-gradient(to right ,#29A9E3, #272C36)" }}>
                <img className='ml-[40px] w-[80px] h-[80px]' src={data.image} alt="" />
                <p className='text-white text-[20px] font-medium text-center'>{data.message}</p>
                <span className='text-[25px] font-bold'
                style={{color:amount >= 0 ?"#0AC15F":"#FF0000"}}>
                {amount>=0?(<span>+</span>):null}{data.amount?data.amount:""}</span>
            </div>
           
        </div>
    );
};

export default NotificationsComponent;
