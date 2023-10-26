import React from 'react';
import storefirstbg from '../assets/storepage/storefirstbg.png';
import storesecondbg from '../assets/storepage/storesecondbg.png';
import Storecard from '../components/StorePage/Storecard';
import sale from '../assets/storepage/sale.png'
import sale2 from '../assets/storepage/sale2.png'
import sale3 from '../assets/storepage/sale3.png'

const StorePage = () => {
    const StoreCardData = [
        {
            id:1,
            name: "Product Name",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
            price: "246"
        },
        {
            id:2,
            name: "Product Name",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
            price: "246"
        },
        {
            id:3,
            name: "Product Name",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
            price: "246"
        },
        {
            id:4,
            name: "Product Name",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
            price: "246"
        },
        {
            id:5,
            name: "Product Name",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
            price: "246"
        },
        {
            id:6,
            name: "Product Name",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
            price: "246"
        },
        {
            id:7,
            name: "Product Name",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
            price: "246"
        },
        {
            id:8,
            name: "Product Name",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
            price: "246"
        },
        {
            id:9,
            name: "Product Name",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
            price: "246"
        },
        {
            id:10,
            name: "Product Name",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
            price: "246"
        },
        {
            id:11,
            name: "Product Name",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
            price: "246"
        },
        {
            id:12,
            name: "Product Name",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
            price: "246"
        },
        {
            id:13,
            name: "Product Name",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
            price: "246"
        },
        {
            id:14,
            name: "Product Name",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
            price: "246"
        },
        {
            id:15,
            name: "Product Name",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
            price: "246"
        },
        {
            id:16,
            name: "Product Name",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
            price: "246"
        },
        {
            id:17,
            name: "Product Name",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
            price: "246"
        },
        {
            id:18,
            name: "Product Name",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
            price: "246"
        },
    ]

    const firstrowofcards = StoreCardData.slice(0, 3);
    const secondrowofcards = StoreCardData.slice(3, 6);
    const thirdrowofcards = StoreCardData.slice(6, 18);


    return (
        <>
            <div className="main w-full ">
                <div
                    className="h-[622px] flex flex-col relative"
                    style={{
                        background: `url(${storefirstbg}) lightgray 50% / cover no-repeat`,
                    }}
                >
                    <div
                        className="headings flex z-[99] flex-col justify-center items-center gap-5 m-auto w-[300px] lg:w-[700px]"
                        style={{ position: 'relative' }}
                    >
                        <h1 className="text-4xl font-bold text-center text-white">
                            Welcome to the Ecocentury Store
                        </h1>
                        <span className="text-white text-center">
                            Experience a world of sustainable products and eco-friendly solutions
                            at the Ecocentury Store. We bring you a curated selection of products
                            that align with our mission to create a greener, more sustainable future.
                        </span>
                        <span className="text-white text-center">
                            We offer worldwide shipping for your convenience. Our prices already
                            include VAT and mainland transportation. Interested in self-consumption
                            installations? Contact us for a personalized quote today!
                        </span>
                    </div>
                    <div
                        className="absolute inset-0 bg-black opacity-50 z-0"
                    ></div>
                </div>
                <div className="min-h-screen flex flex-col" style={{ backgroundImage: `url(${storesecondbg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                    <div className="items flex flex-col justify-center items-center">
                        <div className="promos flex flex-col justify-center mt-5 mb-3 items-center">
                            <div className="promo flex flex-row px-5 text-center">
                                <span className='text-black p-1  font-bold'>Can’t find a product you’re looking for? Use the search icon to search the category or name of the product.</span>
                            </div>
                        </div>
                        <div className="search flex flex-col justify-center mb-5 items-center">
                            <div className="promo flex flex-row">
                                <input className="w-[300px] lg:w-[800px] mt-2 mb-2 p-4 h-[50px] rounded" type="text" placeholder='Search' />
                                <button className="bg-[#059C4B] hover:bg-[#059C4B] text-white font-bold mt-2 mb-2 h-[50px] w-[62px] lg:w-[100px] rounded flex justify-center items-center">
                                    <span className="hidden m-auto lg:inline">Search</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" className="text-white lg:hidden" fill="currentColor" viewBox="0 0 50 50">
                                        <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <h3 className='text-3xl text-black mt-5 font-bold'>Trending Today</h3>
                        <div className="grid mb-10 grid-cols-1 gap-2 lg:grid-cols-3">
                            {firstrowofcards.map((product) => (
                                <Storecard key={product.id} product={product} />
                            ))}
                        </div>
                        <div className="promos flex w-[300px] lg:w-[800px] flex-col gap-3 justify-center items-start">
                            <div className="promo flex flex-row-reverse items-center gap-4">
                                <span className='text-[#059C4B] font-bold'>Unlimited Savings! Enjoy discounts of as low as 2% on every discounted product.</span>
                                <img className='w-[30px] h-[30px] lg:w-[40px] lg:h-[40px]' src={sale} alt="img" />
                            </div>
                            <div className="promo flex flex-row-reverse items-center gap-4">
                                <span className='text-[#059C4B] font-bold'>Unmatched Discounts! And the best part? The maximum discount you can get is unlimited!</span>
                                <img className='w-[30px] h-[30px] lg:w-[40px] lg:h-[40px]' src={sale2} alt="img2" />
                            </div>
                            <div className="promo flex flex-row-reverse items-center gap-4">
                                <span className='text-[#059C4B] font-bold'>Exclusive Promo Codes! Keep an eye out for limited-time offers with special promo codes.</span>
                                <img className='w-[30px] h-[30px] lg:w-[40px] lg:h-[40px]' src={sale3} alt="img3" />
                            </div>
                        </div>
                        <div className="grid mb-10 grid-cols-1 gap-2 lg:grid-cols-3">
                            {secondrowofcards.map((product) => (
                                <Storecard key={product.id} product={product} />
                            ))}
                        </div>
                        <div className="grid mb-10 grid-cols-1 gap-2 lg:grid-cols-3">
                            {thirdrowofcards.map((product) => (
                                <Storecard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default StorePage;
