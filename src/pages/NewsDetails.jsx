import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Newsbg from '../assets/newsdetailpage/bg.png';
import Newsheader from '../assets/newsdetailpage/newsheader.png';
import Newsline from '../assets/newspage/newsline.png';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import userpic from '../assets/newspage/user.png';

const NewsDetails = () => {
    const { Id } = useParams()
    const [Title, setTitle] = useState('');
    const [Description, setDescription] = useState('');
    const [Author, setAuthor] = useState('');
    const [Date, setDate] = useState('');
    const [Category, setCategory] = useState('');
    const [Image, setImage] = useState('');
    

    const getNewsArticle = async () => {
        try {
            const docRef = doc(db, "news", Id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setTitle(docSnap.data().title)
                setDescription(docSnap.data().description)
                setAuthor(docSnap.data().author)
                setDate(docSnap.data().date)
                setCategory(docSnap.data().category)
                setImage(docSnap.data().imgpath)
            } else {
                // docSnap.data() will be undefined in this case
                console.log("No such document!");
            }
        } catch (error) {

        }
    }

    useEffect(() => {
        getNewsArticle()
    }, [])
    return (
        <>
            <div className="min-h-screen flex flex-col" style={{ backgroundImage: `url(${Newsbg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <div className='w-full h-[718px]' style={{ backgroundImage: `url(${Image})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}></div>
                <div className="heading p-[38px] mt-20 w-[365px] lg:w-[1000px] m-auto flex flex-col gap-5">
                    <div className='w-[300px] lg:w-[569px] h-[49px] lg:h-[72px] mb-[60px]'>
                        <h1 className='font-bold text-[22px] lg:text-[40px] text-[#135256]'>{Title ? Title : "News & Resources: Welcome to Our News Hub"}</h1>
                    </div>
                    <p>
                        Step into the world of energy and sustainability with our comprehensive News Hub. Stay informed, inspired, and connected with the latest insights, trends, and updates in the ever-evolving energy industry.
                    </p>
                    <p className='text-[#64AA6E] text-sm'>{Category?Category:"Energy Investments"}</p>
                </div>
                <div className="flex-grow w-full max-w-6xl mx-auto p-[38px] lg:p-10">
                    <img className='mb-[30px]' src={Newsline} alt="" />
                </div>
                <div className='p-[38px] w-[365px] lg:w-[1000px] m-auto flex flex-col gap-5'>
                    <p>
                        {Description?Description:"Step into the world of energy and sustainability with our comprehensive News Hub. Stay informed, inspired, and connected with the latest insights, trends, and updates in the ever-evolving energy industry."}
                    </p>
                </div>
                <div className='p-[38px] items-center w-[365px] lg:w-[1000px] m-auto flex flex-row justify-between'>
                    <div className='flex gap-3 flex-row items-center'>
                        <img className='' src={userpic} alt="" />
                    <p className='font-bold'>{Author?Author:"Muhammad Nehaal"}</p>
                    </div>
                    <p className='font-bold'>{Date?Date:"Date"}</p>
                </div>
            </div>
        </>
    )
}

export default NewsDetails