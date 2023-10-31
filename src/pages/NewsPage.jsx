import React, { useState, useEffect } from 'react';
import Newsbg from '../assets/newspage/Newsbg.png';
import Newshead from '../assets/newspage/newshead.png';
import Newsline from '../assets/newspage/newsline.png';
import Newscard from '../components/NewsPage/Newscard';
import { collection, getDocs } from "firebase/firestore";
import {db} from "../firebase"

const NewsPage = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [newsArticles, setnewsArticles] = useState([]);
    

    const cardsPerPage = 9;

    let newsArticlesDummy = []

    const getNews = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "news"));
            querySnapshot.forEach((doc) => {
                newsArticlesDummy.push(doc.data())
              });
              setnewsArticles(newsArticlesDummy)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getNews()
    },[])

    // const newsArticles = [
    //     {
    //         category: 'Energy Investment',
    //         title: 'Cum socis natoque penatibus et magnis...',
    //         description: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec Cum sociis natoque penatibus et magnis dis parturient montes, nascetur',
    //         author: 'Nehaal',
    //         date: 'July 7, 2023',
    //     },
    //     {
    //         category: 'Energy Investment',
    //         title: 'Cum socis natoque penatibus et magnis...',
    //         description: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec Cum sociis natoque penatibus et magnis dis parturient montes, nascetur',
    //         author: 'Nehaal',
    //         date: 'July 7, 2023',
    //     },
    //     {
    //         category: 'Energy Investment',
    //         title: 'Cum socis natoque penatibus et magnis...',
    //         description: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec Cum sociis natoque penatibus et magnis dis parturient montes, nascetur',
    //         author: 'Nehaal',
    //         date: 'July 7, 2023',
    //     },
    //     {
    //         category: 'Energy Investment',
    //         title: 'Cum socis natoque penatibus et magnis...',
    //         description: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec Cum sociis natoque penatibus et magnis dis parturient montes, nascetur',
    //         author: 'Nehaal',
    //         date: 'July 7, 2023',
    //     },
    //     {
    //         category: 'Energy Investment',
    //         title: 'Cum socis natoque penatibus et magnis...',
    //         description: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec Cum sociis natoque penatibus et magnis dis parturient montes, nascetur',
    //         author: 'Nehaal',
    //         date: 'July 7, 2023',
    //     },
    //     {
    //         category: 'Energy Investment',
    //         title: 'Cum socis natoque penatibus et magnis...',
    //         description: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec Cum sociis natoque penatibus et magnis dis parturient montes, nascetur',
    //         author: 'Nehaal',
    //         date: 'July 7, 2023',
    //     },
    //     {
    //         category: 'Energy Investment',
    //         title: 'Cum socis natoque penatibus et magnis...',
    //         description: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec Cum sociis natoque penatibus et magnis dis parturient montes, nascetur',
    //         author: 'Nehaal',
    //         date: 'July 7, 2023',
    //     },
    //     {
    //         category: 'Energy Investment',
    //         title: 'Cum socis natoque penatibus et magnis...',
    //         description: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec Cum sociis natoque penatibus et magnis dis parturient montes, nascetur',
    //         author: 'Nehaal',
    //         date: 'July 7, 2023',
    //     },
    //     {
    //         category: 'Energy Investment',
    //         title: 'Cum socis natoque penatibus et magnis...',
    //         description: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec Cum sociis natoque penatibus et magnis dis parturient montes, nascetur',
    //         author: 'Nehaal',
    //         date: 'July 7, 2023',
    //     },
    //     {
    //         category: 'Energy Investment',
    //         title: 'Cum socis natoque penatibus et magnis...',
    //         description: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec Cum sociis natoque penatibus et magnis dis parturient montes, nascetur',
    //         author: 'Nehaal',
    //         date: 'July 7, 2023',
    //     },
    //     {
    //         category: 'Energy Investment',
    //         title: 'Cum socis natoque penatibus et magnis...',
    //         description: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec Cum sociis natoque penatibus et magnis dis parturient montes, nascetur',
    //         author: 'Nehaal',
    //         date: 'July 7, 2023',
    //     },
    //     {
    //         category: 'Energy Investment',
    //         title: 'Cum socis natoque penatibus et magnis...',
    //         description: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec Cum sociis natoque penatibus et magnis dis parturient montes, nascetur',
    //         author: 'Nehaal',
    //         date: 'July 7, 2023',
    //     },
    // ];
    
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const currentNewsArticles = newsArticles.slice(startIndex, endIndex);

    return (
        <div className="min-h-screen flex flex-col" style={{ backgroundImage: `url(${Newsbg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <div className="heading p-[38px] mt-20 w-[365px] lg:w-[1000px] m-auto flex flex-col gap-5">
                <img src={Newshead} className='w-[469px] h-[49px] lg:h-[72px]' alt="intro" />
                <span>
                    Step into the world of energy and sustainability with our comprehensive News Hub. Stay informed, inspired, and connected with the latest insights, trends, and updates in the ever-evolving energy industry.
                </span>
            </div>
            <div className="flex-grow w-full max-w-6xl mx-auto p-[38px] lg:p-10 mb-20">
                <img className='mb-[30px]' src={Newsline} alt="" />
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
                    {currentNewsArticles.map((article, index) => (
                        <div key={index} className={index === 1 || index === 4 || index === 7 ? 'mt-[-25px]' : ''}>
                            <Newscard article={article} />
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-4">
                    {Array.from({ length: Math.ceil(newsArticles.length / cardsPerPage) }).map((_, index) => (
                        <button
                            key={index}
                            className={`mx-2 py-2 px-4 border ${currentPage === index + 1 ? 'bg-green-500 text-white' : 'bg-white text-black'} rounded`}
                            onClick={() => setCurrentPage(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewsPage;
