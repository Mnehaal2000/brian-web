import React from 'react';
import cardpic from '../../assets/newspage/cardpic.png';
import userpic from '../../assets/newspage/user.png';

const Newscard = ({ article }) => {
    return (
        <>
            <div className="newscard mt-5 w-[300px] md:w-[300px] h-[620px] bg-white rounded-[20px] flex flex-col items-center shadow-md">
                <img src={cardpic} className='md:w-[300px]' alt="image" />
                <div className='p-4'>
                    <h3 className='text-[#64AA6E] text-sm'>{article.category}</h3>
                    <h2 className='text-black font-bold text-lg mt-1 mb-1'>{article.title}</h2>
                    <span className='mt-1 mb-1'>{article.description}</span>
                    <div className='mt-10 flex gap-2 flex-row'>
                        <img src={userpic} alt="" />
                        <div className='flex flex-col'>
                            <span className='text-black font-bold'>{article.author}</span>
                            <span>{article.date}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Newscard;
