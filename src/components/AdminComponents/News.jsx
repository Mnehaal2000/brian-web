import React, { useState } from 'react'
import { db } from '../../firebase';
import { collection, addDoc } from "firebase/firestore";

const News = () => {

    const [buttonstatus, setbuttonstatus] = useState('Add');


    const [FormData, setFormData] = useState({
        category: '',
        title: '',
        description: '',
        author: '',
        date: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...FormData, [name]: value })
    }

    const addNews = async () => {
        try {
            setbuttonstatus("Adding...")
            const docRef = await addDoc(collection(db, "news"),
                {
                    category: FormData.category,
                    title: FormData.title,
                    description: FormData.description,
                    author: FormData.author,
                    date: FormData.date,
                })
            console.log("doc: ", docRef.id)
            setbuttonstatus('Add')
            setFormData({
                category: '',
                title: '',
                description: '',
                author: '',
                date: '',
            });
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="main w-[1000px] lg:w-full flex flex-col justify-center items-center">
                <div className="w-full mb-[50px] items-center mt-4 sm:mt-8 md:mt-12 lg:mt-16 xl:mt-20 2xl:mt-24 flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16 justify-center">
                    <h1 className='text-4xl text-white font-bold'>Add News</h1>
                    <div className='flex flex-col gap-3 mt-[5px] mb-[5px]'>
                        <label className='text-white'>Category</label>
                        <input
                            className='bg-transparent text-center h-[70px] w-[500px] outline-none text-white rounded-sm pt-2 pl-1 pr-1 pb-2 border border-white'
                            type='text'
                            name='category'
                            value={FormData.category}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='flex flex-col gap-3 mt-[5px] mb-[5px]'>
                        <label className='text-white'>Title</label>
                        <input
                            className='bg-transparent text-center h-[70px] w-[500px] outline-none text-white rounded-sm pt-2 pl-1 pr-1 pb-2 border border-white'
                            type='text'
                            name='title'
                            value={FormData.title}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='flex flex-col gap-3 mt-[5px] mb-[5px]'>
                        <label className='text-white'>Description</label>
                        <input
                            className='bg-transparent text-center h-[70px] w-[500px] outline-none text-white rounded-sm pt-2 pl-1 pr-1 pb-2 border border-white'
                            type='text'
                            name='description'
                            value={FormData.description}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='flex flex-col gap-3 mt-[5px] mb-[5px]'>
                        <label className='text-white'>Author</label>
                        <input
                            className='bg-transparent text-center h-[70px] w-[500px] outline-none text-white rounded-sm pt-2 pl-1 pr-1 pb-2 border border-white'
                            type='text'
                            name='author'
                            value={FormData.author}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='flex flex-col gap-3 mt-[5px] mb-[5px]'>
                        <label className='text-white'>Date</label>
                        <input
                            className='bg-transparent text-center h-[70px] w-[500px] outline-none text-white rounded-sm pt-2 pl-1 pr-1 pb-2 border border-white'
                            type='date'
                            name='date'
                            value={FormData.date}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='flex flex-col gap-3 mt-[5px] mb-[5px]'>
                        <button onClick={addNews} className='w-[199px] h-[68px] bg-[#0AC15F] text-white font-bold text-2xl rounded-lg'>{buttonstatus}</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default News