import img1 from "../../assets/dashboard/portfolio/1.png"
import img2 from "../../assets/dashboard/portfolio/2.png"
import img3 from "../../assets/dashboard/portfolio/3.png"
import img4 from "../../assets/dashboard/portfolio/4.png"
import img5 from "../../assets/dashboard/portfolio/5.png"
import React, { useState, useContext } from 'react'
import { db } from '../../firebase'
import { collection, addDoc,doc,getDoc } from 'firebase/firestore'
import PaymentOptions from "../PaymentOptions"
import AuthContext from "../../AuthContext"

const Portfolio = () => {
    const [selectedPortfolio, setSelectedPortfolio] = useState('eco-innovation');
    const [selectedMethod, setSelectedMethod] = useState('amount-balance');
    const [selectedAmount, setSelectedAmount] = useState('');
    const { currentUser } = useContext(AuthContext)

    const handlePortfolioChange = (event) => {
        setSelectedPortfolio(event.target.value);
    };

    const handleMethodChange = (event) => {
        setSelectedMethod(event.target.value);
    };

    const handleAmountChange = (event) => {
        setSelectedAmount(event.target.value);
    };

    const handleInvest = async () => {
        try {
            const docRef = doc(db, "users", currentUser.uid);
            const docSnap = await getDoc(docRef);

            const portfolioData = {
                portfolio: selectedPortfolio,
                method: selectedMethod,
                amount: selectedAmount,
                name: docSnap.data().Name,
                email: docSnap.data().Email
            };

            addDoc(collection(db, 'portfolios'), portfolioData)
                .then(() => {
                    console.log('portfolio added to Firebase');
                })
                .catch((error) => {
                    console.error('Error adding portfolio to Firebase: ', error);
                });
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <>
            <div className="main w-[full] mt-[20px] mb-[50px] flex flex-col justify-center items-center">
                <div className='w-[900px] flex flex-col justify-start'>
                    <PaymentOptions />
                    <div className='flex flex-col'>
                        <label className="text-white font-bold text-2xl" htmlFor="payment">
                            Select Investment Portfolio
                        </label>
                        <select
                            className="text-white text-center font-bold p-5 mt-[10px] mb-[30px] w-[340px] h-[65px] outline-none rounded-md text-lg "
                            name="payment"
                            id="payment"
                            value={selectedPortfolio}
                            onChange={handlePortfolioChange}
                            style={{ background: "linear-gradient(#0AC15F,#00A34C)" }}
                        >
                            <option className='text-black' value="eco-innovation">Eco Innovation</option>
                            <option className='text-black' value="bank-transfer">Bank Transfer</option>
                            <option className='text-black' value="paypal">PayPal</option>
                        </select>
                    </div>
                    <div className='flex mt-[20px] flex-col'>
                        <h3 className='text-white mb-[20px] font-bold text-2xl'>Enter Amount*</h3>
                        <label className="text-white font-light" htmlFor="payment">
                            Select Method of Investment
                        </label>
                        <select
                            className="text-white text-center font-bold p-5 mt-[10px] mb-[30px] w-[340px] h-[65px] outline-none rounded-md text-lg "
                            name="payment"
                            id="payment"
                            value={selectedMethod}
                            onChange={handleMethodChange}
                            style={{ background: "linear-gradient(#0AC15F,#00A34C)" }}
                        >
                            <option className='text-black' value="amount-balance">Amount Balance</option>
                            <option className='text-black' value="bank-transfer">Bank Transfer</option>
                            <option className='text-black' value="paypal">PayPal</option>
                        </select>
                    </div>
                    <div className='flex flex-col'>
                        <label className="text-white" htmlFor="payment">
                            Enter Amount
                        </label>
                        <input
                            className="bg-transparent p-5 mt-[10px] mb-[30px] w-[340px] h-[50px] border border-white outline-none rounded-md text-lg text-white"
                            name="payment"
                            id="payment"
                            type='number'
                            min={0}
                            placeholder='1343 $'
                            value={selectedAmount}
                            onChange={handleAmountChange}
                        />
                    </div>
                    <div className="flex flex-col gap-4 mb-[50px]">
                        <button onClick={handleInvest} className='w-[231px] h-[66px] outline-none text-white font-bold text-2xl rounded-md' style={{ background: "linear-gradient(#29A9E3,#272C36)" }}>Invest</button>
                        <div className='flex flex-row items-center gap-4'>
                            <h3 className='font-semibold text-[24px] text-white'>Eco-Innovation Portfolio</h3>
                            <img className='w-[70px] h-[70px]' src={img1} alt="" />
                        </div>
                        <p className='text-white'>Invest in cutting-edge green technologies and innovations.</p>
                        <p className='text-white'>Minimum Start:<span className='font-semibold text-white'> $500</span></p>
                        <p className='text-white'>Maximum:<span className='font-semibold text-white'> N/A</span></p>
                        <p className='text-white'>Annual Interest:<span className='font-semibold text-white'> 60%</span></p>
                        <p className='text-white'>4 Years Investment Term:<span className='font-semibold text-white'> x3 Of Capital</span></p>
                    </div>
                    <div className="flex flex-col gap-4 mb-[50px]">
                        <button onClick={handleInvest} className='w-[231px] h-[66px] outline-none text-white font-bold text-2xl rounded-md' style={{ background: "linear-gradient(#29A9E3,#272C36)" }}>Invest</button>
                        <div className='flex flex-row items-center gap-4'>
                            <h3 className='font-semibold text-[24px] text-white'>Eco-carbon Free</h3>
                            <img className='w-[70px] h-[70px]' src={img2} alt="" />
                        </div>
                        <p className='text-white'>Invest in cutting-edge green technologies and innovations.</p>
                        <p className='text-white'>Minimum Start:<span className='font-semibold text-white'> $500</span></p>
                        <p className='text-white'>Maximum:<span className='font-semibold text-white'> N/A</span></p>
                        <p className='text-white'>Annual Interest:<span className='font-semibold text-white'> 60%</span></p>
                        <p className='text-white'>4 Years Investment Term:<span className='font-semibold text-white'> x3 Of Capital</span></p>
                    </div>
                    <div className="flex flex-col gap-4 mb-[50px]">
                        <button onClick={handleInvest} className='w-[231px] h-[66px] outline-none text-white font-bold text-2xl rounded-md' style={{ background: "linear-gradient(#29A9E3,#272C36)" }}>Invest</button>
                        <div className='flex flex-row items-center gap-4'>
                            <h3 className='font-semibold text-[24px] text-white'>Lower Emissions</h3>
                            <img className='w-[70px] h-[70px]' src={img3} alt="" />
                        </div>
                        <p className='text-white'>Invest in cutting-edge green technologies and innovations.</p>
                        <p className='text-white'>Minimum Start:<span className='font-semibold text-white'> $500</span></p>
                        <p className='text-white'>Maximum:<span className='font-semibold text-white'> N/A</span></p>
                        <p className='text-white'>Annual Interest:<span className='font-semibold text-white'> 60%</span></p>
                        <p className='text-white'>4 Years Investment Term:<span className='font-semibold text-white'> x3 Of Capital</span></p>
                    </div>
                    <div className="flex flex-col gap-4 mb-[50px]">
                        <button onClick={handleInvest} className='w-[231px] h-[66px] outline-none text-white font-bold text-2xl rounded-md' style={{ background: "linear-gradient(#29A9E3,#272C36)" }}>Invest</button>
                        <div className='flex flex-row items-center gap-4'>
                            <h3 className='font-semibold text-[24px] text-white'>Net-Zero Emissions</h3>
                            <img className='w-[70px] h-[70px]' src={img4} alt="" />
                        </div>
                        <p className='text-white'>Invest in cutting-edge green technologies and innovations.</p>
                        <p className='text-white'>Minimum Start:<span className='font-semibold text-white'> $500</span></p>
                        <p className='text-white'>Maximum:<span className='font-semibold text-white'> N/A</span></p>
                        <p className='text-white'>Annual Interest:<span className='font-semibold text-white'> 60%</span></p>
                        <p className='text-white'>4 Years Investment Term:<span className='font-semibold text-white'> x3 Of Capital</span></p>
                    </div>
                    <div className="flex flex-col gap-4 mb-[50px]">
                        <button onClick={handleInvest} className='w-[231px] h-[66px] outline-none text-white font-bold text-2xl rounded-md' style={{ background: "linear-gradient(#29A9E3,#272C36)" }}>Invest</button>
                        <div className='flex flex-row items-center gap-4'>
                            <h3 className='font-semibold text-[24px] text-white'>Eco-Power</h3>
                            <img className='w-[70px] h-[70px]' src={img5} alt="" />
                        </div>
                        <p className='text-white'>Invest in cutting-edge green technologies and innovations.</p>
                        <p className='text-white'>Minimum Start:<span className='font-semibold text-white'> $500</span></p>
                        <p className='text-white'>Maximum:<span className='font-semibold text-white'> N/A</span></p>
                        <p className='text-white'>Annual Interest:<span className='font-semibold text-white'> 60%</span></p>
                        <p className='text-white'>4 Years Investment Term:<span className='font-semibold text-white'> x3 Of Capital</span></p>
                    </div>
                    <h3 className='text-white text-[16px] font-light'>Each portfolio offers a unique path to make a positive impact while growing your investment. Join us in building a greener, more sustainable tomorrow.</h3>
                </div>
            </div>
        </>
    )
}

export default Portfolio