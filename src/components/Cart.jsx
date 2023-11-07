import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../redux/actions'; // Import the action creators


const Cart = () => {
    const [ishidecart, setishidecart] = useState(true);
    const cartItems = useSelector((state) => state.cart.cart); // Get cart items from the Redux store
    const dispatch = useDispatch();
    const increaseItemQuantity = (id) => {
        dispatch(increaseQuantity(id)); // Dispatch the increase quantity action
    };

    const decreaseItemQuantity = (id) => {
        dispatch(decreaseQuantity(id)); // Dispatch the decrease quantity action
    };

    const removeCartItem = (id) => {
        dispatch(removeFromCart(id)); // Dispatch the remove from cart action
    };
    return (
        <>
            {ishidecart ?
                (<>
                    <div className="mx-auto cursor-pointer fixed top-10 right-0 z-[99999] mt-8 max-w-2xl md:mt-12">
                        <div onClick={(e) => setishidecart(false)} className="bg-white shadow rounded-l-lg hover:bg-[#059C4B] transition ease-in-out delay-200 flex flex-row items-center justify-evenly w-[90px] h-[50px]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hover:text-white w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                            <p className='hover:text-white text-[20px] text-black font-semibold'>{cartItems.length}</p>
                        </div>
                    </div>
                </>) : (
                    <>
                        <div className="mx-auto fixed top-10 right-0 z-[99999] mt-8 max-w-2xl md:mt-12">
                            <div className="bg-white shadow">
                                <div className="px-4 py-6 sm:px-8 sm:py-10">
                                    <div className="flow-root">
                                        <ul className="-my-8 h-[300px] overflow-y-auto pr-5">
                                            {cartItems?.map((item, index) => (<li key={index} className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                                                <div className="shrink-0">
                                                    <img className="h-24 w-24 max-w-full rounded-lg object-cover" src={item.itemimg} alt="" />
                                                </div>

                                                <div className="relative flex flex-1 flex-col justify-between">
                                                    <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                                                        <div className="pr-8 sm:pr-5">
                                                            <p className="text-base font-semibold text-gray-900">{item.itemname}</p>
                                                            {/* <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">36EU - 4US</p> */}
                                                        </div>

                                                        <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                                                            <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">{item.itemprice}$</p>

                                                            <div className="sm:order-1">
                                                                <div className="mx-auto flex h-8 items-stretch text-gray-600">
                                                                    <button onClick={() => decreaseItemQuantity(item.id)} className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">-</button>
                                                                    <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">{item.quantity || 1}</div>
                                                                    <button onClick={() => increaseItemQuantity(item.id)} className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">+</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                                                        <button onClick={() => removeCartItem(item.id)} type="button" className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900">
                                                            <svg className="block h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" className=""></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </li>))}
                                            {cartItems.length === 0 && (<><p className='font-medium mt-[40px] text-black'>Your cart is empty.</p></>)}

                                        </ul>
                                    </div>

                                    {/* <div className="mt-6 border-t border-b py-2">
                                        <div className="flex items-center justify-between">
                                            <p className="text-sm text-gray-400">Subtotal</p>
                                            <p className="text-lg font-semibold text-gray-900">$ {cartItems.reduce((total, item) => total + parseInt(item.itemprice), 0)}</p>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <p className="text-sm text-gray-400">Shipping</p>
                                            <p className="text-lg font-semibold text-gray-900">$8.00</p>
                                        </div>
                                    </div> */}
                                    <div className="mt-12 flex items-center justify-between">
                                        <p className="text-sm font-medium text-gray-900">Total</p>
                                        <p className="text-2xl font-semibold text-gray-900"><span className="text-xs font-normal text-gray-400">USD </span>{cartItems.reduce((total, item) => total + parseInt(item.itemprice) * item.quantity, 0)}</p>
                                    </div>

                                    {cartItems.length > 0 && (<div className="mt-6 text-center">
                                        <a href="/dashboard/cart">
                                            <button type="button" className="group inline-flex w-full items-center justify-center rounded-md bg-green-600 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
                                                Checkout
                                                <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:ml-8 ml-4 h-6 w-6 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                </svg>
                                            </button>
                                        </a>
                                    </div>)}
                                    <div className="mt-6 text-center">
                                        <button onClick={(e) => setishidecart(true)} type="button" className="group inline-flex w-full items-center justify-center rounded-md bg-yellow-500 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
                                            Hide
                                            <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:ml-8 ml-4 h-6 w-6 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>)}
        </>
    )
}

export default Cart