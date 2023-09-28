import React from 'react';
import Newsbg from '../assets/newspage/Newsbg.png';
import Newshead from '../assets/newspage/newshead.png';
import Newsline from '../assets/newspage/newsline.png';
import Newscard from '../components/NewsPage/Newscard';

const NewsPage = () => {
    return (
        <div className="min-h-screen flex flex-col" style={{ backgroundImage: `url(${Newsbg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <div className="heading p-[2.5rem] mt-20 w-[365px] lg:w-[1000px] m-auto flex flex-col gap-5">
                <img src={Newshead} className='w-[469px] h-[49px] lg:h-[72px]' alt="intro" />
                <span>
                    Step into the world of energy and sustainability with our comprehensive News Hub. Stay informed, inspired, and connected with the latest insights, trends, and updates in the ever-evolving energy industry.
                </span>
            </div>
            <div className="flex-grow w-full max-w-6xl mx-auto p-5 lg:p-10 mb-20">
                <img src={Newsline} alt="" />
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
                    <Newscard />
                    <div className='mt-[-25px]'><Newscard /></div>
                    <Newscard />
                    <Newscard />
                    <div className='mt-[-25px]'><Newscard /></div>
                    <Newscard />
                    <Newscard />
                    <div className='mt-[-25px]'><Newscard /></div>
                    <Newscard />
                </div>
            </div>
        </div>
    );
};

export default NewsPage;
