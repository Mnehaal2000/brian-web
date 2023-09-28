import React from 'react'
import storecardpic from "../../assets/storepage/storecardpic.png"

const Storecard = ({ product }) => {
    return (
        <>
            <div className="newscard mt-5 w-[300px] md:w-[300px] h-[400px] bg-white flex flex-col items-center shadow-md">
                <img src={storecardpic} className='md:w-[300px]' alt="image" />
                <div className='p-4'>
                    <h3 className='text-[#64AA6E] mb-2 font-bold text-md'>{product.name}</h3>
                    <span className='mt-3 mb-1'>{product.description}</span>
                    <div className='mt-10 flex gap-2 flex-row'>
                        <div className='flex flex-row justify-between gap-20'>
                            <span className='text-[#64AA6E] font-bold'>${product.price}</span>
                            <button className='rounded-md text-white w-[150px] h-[40px] bg-[#64AA6E]'>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Storecard