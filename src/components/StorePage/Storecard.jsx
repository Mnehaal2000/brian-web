import React from 'react'
import storecardpic from "../../assets/storepage/storecardpic.png"
import { Link } from 'react-router-dom'

const Storecard = ({ product }) => {
    return (
        <>
            <div className="newscard relative mt-5 w-[300px] md:w-[300px] h-[400px] bg-white flex flex-col items-center shadow-md">
                <img src={product.itemimg?product.itemimg:storecardpic} className='md:w-[300px] h-[169px]' alt="image" />
                <div className='p-4 flex flex-col justify-start'>
                    <h3 className='text-[#059C4B] mb-2 font-extrabold text-[20px]'>{product.itemname}</h3>
                    <p className='mt-3 mb-1'>{product.itemdescription.length <= 79 ? product.itemdescription : product.itemdescription.slice(0, 79)} ...</p>
                    <div className='mt-10 flex gap-2 flex-row absolute bottom-5 left-5'>
                        <div className='flex flex-row justify-between items-center gap-[20px]'>
                            <span className='text-[#64AA6E] font-extrabold text-[20px]'>${product.itemprice}</span>
                            <Link to="/signin"><button className='rounded-md font-semibold text-white w-[150px] h-[40px] bg-[#059C4B]'>Add to Cart</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Storecard