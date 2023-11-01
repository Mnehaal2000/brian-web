import React from 'react';
import cardpic from '../../assets/newspage/cardpic.png';
import userpic from '../../assets/newspage/user.png';

const Newscard = ({ article }) => {
    return (
        <>
            <div className="newscard relative mt-5 w-[300px] md:w-[300px] h-[620px] bg-white rounded-[20px] flex flex-col items-center shadow-md">
                <img src={article.imgpath?article.imgpath:cardpic} className='md:w-[300px] h-[240px] rounded-t-xl' alt="image" />
                <div className='p-4'>
                    <h3 className='text-[#64AA6E] text-sm'>{article.category}</h3>
                    <h2 className='text-black font-bold text-lg mt-1 mb-1'>
                    {article.title.length <= 30 ? article.title : article.title.slice(0, 40)} ...
                    </h2>

                    <p className='mt-1 mb-1'>
                        {article.description.length <= 40 ? article.description : article.description.slice(0, 200)} ...
                    </p>

                    <div className='mt-10 flex absolute bottom-5 left-5 gap-2 flex-row'>
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
