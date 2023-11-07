import React, { useState, useContext } from 'react';
import carticon from "../../assets/dashboard/cart/carticon.png";
// import itemicon from "../../assets/dashboard/cart/item.png";
import AuthContext from "../../AuthContext"
import { db } from "../../firebase"
import { addDoc, doc, collection } from 'firebase/firestore';
import { toast, ToastContainer } from 'react-toastify';

const Cart = () => {
    const initialCart = JSON.parse(localStorage.getItem('cart')) || [];
    const [items, setItems] = useState(initialCart);
    const { currentUser } = useContext(AuthContext)

    // const handleDecrease = (index) => {
    //     setItems((prevItems) => {
    //         const updatedItems = [...prevItems];
    //         if (updatedItems[index].quantity > 1) {
    //             updatedItems[index] = { ...updatedItems[index], quantity: updatedItems[index].quantity - 1 };
    //         }
    //         return updatedItems;
    //     });
    // };

    // const handleIncrease = (index) => {
    //     setItems((prevItems) => {
    //         const updatedItems = [...prevItems];
    //         updatedItems[index] = { ...updatedItems[index], quantity: updatedItems[index].quantity + 1 };
    //         return updatedItems;
    //     });
    // };

    // console.log(currentUser)

    const totalPrice = items.reduce((total, item) => total + parseInt(item.itemprice) * item.quantity, 0)

    const checkout = async () => {
        if (items.length > 0) {
            try {
                const docRef = await addDoc(collection(db, "purchases"), {
                    email: currentUser.email,
                    user_id: currentUser.uid,
                    cartItems: items,
                    date: new Date().toLocaleDateString(),
                    order_total: totalPrice,
                    sub_total: totalPrice + 160,
                    promo_code: "",
                    status: "pending"
                });
                if (docRef.id) {
                    toast.success('🦄 Order submitted!', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    localStorage.removeItem('cart')
                }
            } catch (error) {
                console.log(error)
            }
        }
        else {
            toast.warn('🦄 Cart Empty!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

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
                                    <img src={item.itemimg} alt="" />
                                </div>
                                <p className='text-white'>{item.itemname.length <= 11 ? item.itemname : item.itemname.slice(0, 10)}...</p>
                                <div className='flex flex-row justify-center items-center gap-3'>
                                    {/* <span
                                        className='text-white text-[30px] hover:cursor-pointer hover:text-blue-600'
                                        onClick={() => handleDecrease(item.id)}
                                    >
                                        -
                                    </span> */}
                                    <div className='w-[40px] h-[40px] items-center justify-center flex-col flex border mb-[7px] mt-[7px] text-white'>
                                        {item.quantity}
                                    </div>
                                    {/* <span
                                        className='text-white text-[30px] hover:cursor-pointer hover:text-blue-600'
                                        onClick={() => handleIncrease(item.id)}
                                    >
                                        +
                                    </span> */}
                                </div>
                                <p className='text-white'>{item.itemprice}$</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white hover:cursor-pointer hover:text-red-600">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                        ))}
                        {items.length === 0 && (<>
                            <div className='items-center h-[400px] justify-center flex gap-5 flex-col'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-white w-[30px] h-[30px]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>
                                <h1 className='text-3xl font-bold text-white'>Cart Empty</h1>
                            </div>
                        </>)}

                    </div>
                    <div className='w-[540px] flex flex-col h-[540px] border rounded-lg border-black' style={{ background: "linear-gradient(to right, #29A9E3, #272C36)" }}>
                        <div className='flex h-[84px] pl-5 flex-start items-center border border-l-0 border-t-0 border-r-0 border-b-1'>
                            <h2 className='font-bold text-white text-2xl'>Summary</h2>
                        </div>
                        <div className='flex pl-5 pr-5 flex-row h-[84px] items-center border border-l-0 border-t-0 border-r-0 border-b-1 justify-between'>
                            <h2 className=' text-white'>Order Total</h2>
                            <h2 className=' text-white'>{totalPrice ? totalPrice : "Nan "}$</h2>
                        </div>
                        <div className='flex pl-5 pr-5 flex-row h-[84px] items-center border border-l-0 border-t-0 border-r-0 border-b-1 justify-between'>
                            <h2 className=' text-white'>Promo Code</h2>
                            <h2 className=' text-white'>None</h2>
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
                            <h2 className=' text-white'>{totalPrice + 160}$</h2>
                        </div>
                    </div>
                </div>

                <div className='main w-full flex mt-[10px] flex-row gap-[25px] justify-center items-center'>
                    <div className='w-[540px] h-[70px]'>

                    </div>
                    <div className='w-[540px] h-[70px] flex flex-row gap-6 justify-center'>
                        <a href="/store"><button className='bg-[#F2A229] rounded-md w-[229px] h-[56px] font-bold text-white'>Continue Shopping</button></a>
                        <button onClick={checkout} className='bg-[#0AC15F] active:bg-green-900 focus:bg-green-900 rounded-md w-[229px] h-[56px] font-bold text-white'>CHECKOUT</button>
                    </div>
                </div>
                <ToastContainer
                    position="top-right"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </div>
        </>
    )
}

export default Cart