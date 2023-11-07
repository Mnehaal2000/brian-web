import React, { useState } from 'react'
import carticon from "../../assets/dashboard/cart/carticon.png"
import itemicon from "../../assets/dashboard/cart/item.png"

const Cart = () => {

    const [items, setItems] = useState([
        { id: 1, name: 'Solar Energy', quantity: 1, price: 30 },
        { id: 2, name: 'Solar Energy', quantity: 1, price: 20 },
        { id: 3, name: 'Solar Energy', quantity: 1, price: 60 },
        { id: 4, name: 'Solar Energy', quantity: 1, price: 40 },
        { id: 5, name: 'Solar Energy', quantity: 1, price: 90 },
    ]);


    const handleDecrease = (id) => {
        setItems((prevItems) => {
            return prevItems.map((item) => {
                if (item.id === id && item.quantity > 1) {
                    return { ...item, quantity: item.quantity - 1 };
                }
                return item;
            });
        });
    };

    const handleIncrease = (id) => {
        setItems((prevItems) => {
            return prevItems.map((item) => {
                if (item.id === id) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
        });
    };

    const totalPrice = items.reduce((acc, item) => acc + item.quantity * item.price, 0);

    return (
        <>
            <div className="main w-[1000px] lg:w-full flex mb-[50px] flex-col justify-center items-center">
                <div className="main w-full flex flex-row justify-start">
                    <div className='flex flex-row mt-[20px] ml-[100px] justify-start border border-l-0 border-t-0 border-r-0 border-b-[#F2A229]'>
                        <h3 className='text-3xl font-bold text-[#F2A229]'>Continue to Checkout</h3>
                        <img className='w-[30px] h-[30px] mt-[3px] ml-[10px]' src={carticon} alt="" />
                    </div>
                </div>
                <div className='main w-full mt-[20px] flex flex-row gap-[25px] justify-center items-center'>
                    <div className='w-[540px] bg-transparent flex flex-col h-[540px] rounded-lg'>

                        {items.map((item) => (
                            <div key={item.id} className='flex pl-5 pr-5 flex-row h-[110px] items-center border border-l-0 border-t-0 border-r-0 border-b-1 justify-between'>
                                <div className='w-[90px] h-[90px] items-center justify-center flex-col flex border rounded-md mb-[7px] mt-[7px]'>
                                    <img src={itemicon} alt="" />
                                </div>
                                <p className='text-white'>{item.name}</p>
                                <div className='flex flex-row justify-center items-center gap-3'>
                                    <span
                                        className='text-white text-[30px] hover:cursor-pointer hover:text-blue-600'
                                        onClick={() => handleDecrease(item.id)}
                                    >
                                        -
                                    </span>
                                    <div className='w-[40px] h-[40px] items-center justify-center flex-col flex border mb-[7px] mt-[7px] text-white'>
                                        {item.quantity}
                                    </div>
                                    <span
                                        className='text-white text-[30px] hover:cursor-pointer hover:text-blue-600'
                                        onClick={() => handleIncrease(item.id)}
                                    >
                                        +
                                    </span>
                                </div>
                                <p className='text-white'>{item.price}$</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white hover:cursor-pointer hover:text-red-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            </div>
                        ))}

                    </div>
                    <div className='w-[540px] flex flex-col h-[540px] border rounded-lg border-black' style={{ background: "linear-gradient(to right, #29A9E3, #272C36)" }}>
                        <div className='flex h-[84px] pl-5 flex-start items-center border border-l-0 border-t-0 border-r-0 border-b-1'>
                            <h2 className='font-bold text-white text-2xl'>Summary</h2>
                        </div>
                        <div className='flex pl-5 pr-5 flex-row h-[84px] items-center border border-l-0 border-t-0 border-r-0 border-b-1 justify-between'>
                            <h2 className=' text-white'>Order Total</h2>
                            <h2 className=' text-white'>{totalPrice?totalPrice:"1,345"}$</h2>
                        </div>
                        <div className='flex pl-5 pr-5 flex-row h-[84px] items-center border border-l-0 border-t-0 border-r-0 border-b-1 justify-between'>
                            <h2 className=' text-white'>Promo Code</h2>
                            <h2 className=' text-white'>Sale31</h2>
                        </div>
                        <div className='flex pl-5 pr-5 flex-row h-[84px] items-center border border-l-0 border-t-0 border-r-0 border-b-1 justify-between'>
                            <h2 className=' text-white'>Shipping</h2>
                            <h2 className=' text-white'>160$</h2>
                        </div>
                        <div className='flex pl-5 pr-5 flex-row h-[84px] items-center border border-l-0 border-t-0 border-r-0 border-b-1 justify-between'>
                            <h2 className=' text-white'>Referral ID (Optional)</h2>
                            <h2 className=' text-white'>________________</h2>
                        </div>
                        <div className='flex pl-5 pr-5 flex-row h-[84px] items-center justify-between'>
                            <h2 className=' text-white'>Subtotal</h2>
                            <h2 className=' text-white'>{totalPrice+160}$</h2>
                        </div>
                    </div>
                </div>

                <div className='main w-full flex mt-[10px] flex-row gap-[25px] justify-center items-center'>
                    <div className='w-[540px] h-[70px]'>

                    </div>
                    <div className='w-[540px] h-[70px] flex flex-row gap-6 justify-center'>
                        <a href="/store"><button className='bg-[#F2A229] rounded-md w-[229px] h-[56px] font-bold text-white'>Continue Shopping</button></a>
                        <button className='bg-[#0AC15F] rounded-md w-[229px] h-[56px] font-bold text-white'>CHECKOUT</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Cart