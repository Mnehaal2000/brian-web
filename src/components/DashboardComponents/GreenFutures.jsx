import React, { useState, useEffect } from 'react'

const GreenFutures = () => {
    const [isInvest, setisInvest] = useState(false);

    useEffect(() => {
        setisInvest(false)
    }, [])

    return (
        <>
            <div className="main w-[full] mt-[20px] mb-[50px] flex flex-col justify-center items-center">
                <div className='w-[900px] flex flex-col justify-start'>
                    <h3 className='font-bold text-white text-2xl'>Your Eco-Friendly Retirement Path</h3>
                    <p className='text-white mt-[20px] font-light'>Our retirement portfolio options are meticulously curated to align with your retirement goals while contributing to a greener planet. By choosing Green Futures, you're making a statement – one that resonates with eco-consciousnes s and financial prudence</p>
                    <p className='text-white mt-[20px] font-bold'><span className='font-light'>Minimum Start:</span> $5,500</p>
                    <p className='text-white mt-[20px] font-bold'><span className='font-light'>Maximum:</span> N/A</p>
                    <p className='text-white mt-[20px] font-bold'><span className='font-light'>Term:</span> 7 Years</p>
                    <p className='text-white mt-[20px] font-bold'><span className='font-light'>Profit:</span> 70% calculated Annually - X5 of Capital</p>
                    <p className='text-white mt-[20px] mb-[50px]'>Invest in Tomorrow, Sustain for Life</p>
                    <button className='w-[200px] h-[50px] text-2xl font-bold text-white rounded-lg' onClick={() => setisInvest(true)} style={{ background: "linear-gradient(#08BD5C,#03AC51)" }}>Invest</button>
                    {isInvest &&
                        <div className='w-[900px] flex flex-col mt-[20px] justify-center items-center'>
                            <div className='flex flex-row gap-[99px]'>
                                <div className='flex flex-col'>
                                    <label className="text-white" htmlFor="payment">
                                        Select Investment Method
                                    </label>
                                    <select
                                        className="bg-transparent p-5 mt-[10px] mb-[30px] w-[400px] h-[70px] border border-white outline-none rounded-md text-lg text-white"
                                        name="payment"
                                        id="payment"
                                    >
                                        <option className='text-black' value="credit-card">Account balance</option>
                                        <option className='text-black' value="bank-transfer">Bank Transfer</option>
                                        <option className='text-black' value="paypal">PayPal</option>
                                    </select>
                                </div>
                                <div className='flex flex-col'>
                                    <label className="text-white" htmlFor="payment">
                                        Amount in (USD)
                                    </label>
                                    <input
                                        className="bg-transparent p-5 mt-[10px] mb-[30px] w-[400px] h-[70px] border border-white outline-none rounded-md text-lg text-white"
                                        name="payment"
                                        id="payment"
                                        type='number'
                                    />
                                </div>
                            </div>

                            <div className='flex flex-col justify-center items-center'>
                                <button className='w-[200px] h-[50px] text-2xl font-bold text-white rounded-lg' style={{ background: "linear-gradient(#29A9E3,#272C36)" }}>Invest</button>
                            </div>
                        </div>}
                </div>
            </div>
        </>
    )
}

export default GreenFutures