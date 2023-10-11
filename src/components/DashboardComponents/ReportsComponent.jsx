import React from 'react';

const ReportsComponent = ({ data }) => {
    const amount = data.amount?data.amount:0
    return (
        <div className="ReportsComponent">
            <div className='w-[800px] h-[120px] flex flex-row gap-[30px] rounded-md justify-start items-center' style={{ background: "linear-gradient(to right ,#29A9E3, #272C36)" }}>
                <img className='ml-[40px] w-[80px] h-[80px]' src={data.image} alt="" />
                <p className='text-white text-[20px] font-medium text-center'>Report No. {data.id} {data.message}</p>
            </div>
           
        </div>
    );
};

export default ReportsComponent;
