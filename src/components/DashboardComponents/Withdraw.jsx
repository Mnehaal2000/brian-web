import React from 'react';

const Withdraw = () => {
    return (
        <div className="main w-full flex flex-col justify-center items-center">
            <div className="w-[1000px] mt-[30px] flex flex-col gap-[20px] justify-center">
                <p className="text-3xl font-bold text-white">Withdraw Money</p>
                <div
                    className="w-[783px] h-[352px] flex flex-col p-5 rounded-md"
                    style={{ background: "linear-gradient(#29A9E3, #272C36)" }}
                >
                    <label className="text-white" htmlFor="payment">
                        Select a Withdraw Method *
                    </label>
                    <select
                        className="bg-transparent p-5 mt-[10px] mb-[30px] w-[600px] h-[70px] border border-white outline-none rounded-md text-lg text-white"
                        name="payment"
                        id="payment"
                    >
                        <option className='text-black' value="credit-card">Credit Card</option>
                        <option className='text-black' value="bank-transfer">Bank Transfer</option>
                        <option className='text-black' value="paypal">PayPal</option>
                    </select>
                    <label className="text-white" htmlFor="payment">
                        Amount in (USD)
                    </label>
                    <input
                        className="bg-transparent p-5 mt-[10px] mb-[30px] w-[600px] h-[70px] border border-white outline-none rounded-md text-lg text-white"
                        name="payment"
                        id="payment"
                        type='number'
                    />
                    <button className='w-[199px] h-[68px] bg-[#0AC15F] text-white font-bold text-2xl rounded-lg'>Confirm</button>
                </div>
            </div>
        </div>
    );
};

export default Withdraw;
