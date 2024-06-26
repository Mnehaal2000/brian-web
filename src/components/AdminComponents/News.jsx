import React, { useState } from 'react'
import { db,storage } from '../../firebase';
import { collection, addDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

const News = () => {

    const [buttonstatus, setbuttonstatus] = useState('Add');
    const [imageFile, setImageFile] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImageFile(file);
    }

    const uploadImageToFirebase = async (imageFile) => {
        try {
            const storageRef = ref(storage, `NewsImages/${imageFile.name}`);
            await uploadBytes(storageRef, imageFile);
            const downloadURL = await getDownloadURL(storageRef);
            return downloadURL
        } catch (error) {
            console.error('Error uploading image to Firebase Storage:', error);
            return null;
        }
    }

    const [FormData, setFormData] = useState({
        category: '',
        title: '',
        description: '',
        author: '',
        date: '',
        imgpath:''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...FormData, [name]: value })
    }

    const addNews = async () => {
        try {
            setbuttonstatus("Adding...")
            const downloadURL = await uploadImageToFirebase(imageFile);
            if(downloadURL){
            const docRef = await addDoc(collection(db, "news"),
                {
                    category: FormData.category,
                    title: FormData.title,
                    description: FormData.description,
                    author: FormData.author,
                    date: FormData.date,
                    imgpath: downloadURL,
                })
                console.log("doc: ", docRef.id)
            }
            setbuttonstatus('Add')
            setFormData({
                category: '',
                title: '',
                description: '',
                author: '',
                date: '',
                imgpath:'',
            });
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="main w-[300px] lg:w-full flex flex-col justify-center items-center">
                <div className="lg:w-full mb-[50px] items-center mt-4 sm:mt-8 md:mt-12 lg:mt-16 xl:mt-20 2xl:mt-24 flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16 justify-center">
                    <h1 className='md:text-4xl text-[20px] text-white font-bold'>Add News</h1>
                    <div className='flex flex-col gap-3 mt-[5px] mb-[5px]'>
                        <label className='text-white'>Category</label>
                        <input
                            className='bg-transparent text-center h-[70px] w-[220px] lg:w-[500px] outline-none text-white rounded-sm pt-2 pl-1 pr-1 pb-2 border border-white'
                            type='text'
                            name='category'
                            value={FormData.category}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='flex flex-col gap-3 mt-[5px] mb-[5px]'>
                        <label className='text-white'>Title</label>
                        <input
                            className='bg-transparent text-center h-[70px] w-[220px] lg:w-[500px] outline-none text-white rounded-sm pt-2 pl-1 pr-1 pb-2 border border-white'
                            type='text'
                            name='title'
                            value={FormData.title}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='flex flex-col gap-3 mt-[5px] mb-[5px]'>
                        <label className='text-white'>Description</label>
                        <input
                            className='bg-transparent text-center h-[70px] w-[220px] lg:w-[500px] outline-none text-white rounded-sm pt-2 pl-1 pr-1 pb-2 border border-white'
                            type='text'
                            name='description'
                            value={FormData.description}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='flex flex-col gap-3 mt-[5px] mb-[5px]'>
                        <label className='text-white'>Author</label>
                        <input
                            className='bg-transparent text-center h-[70px] w-[220px] lg:w-[500px] outline-none text-white rounded-sm pt-2 pl-1 pr-1 pb-2 border border-white'
                            type='text'
                            name='author'
                            value={FormData.author}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='flex flex-col gap-3 mt-[5px] mb-[5px]'>
                        <label className='text-white'>Date</label>
                        <input
                            className='bg-transparent text-center h-[70px] w-[220px] lg:w-[500px] outline-none text-white rounded-sm pt-2 pl-1 pr-1 pb-2 border border-white'
                            type='date'
                            name='date'
                            value={FormData.date}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='flex flex-col gap-3 mt-[5px] mb-[5px]'>
                        <label className="text-white text-lg font-bold mb-4">News Image</label>
                        <input
                            type="file"
                            accept="image/*"
                            name="itemimg"
                            onChange={handleImageChange}
                            className="p-2 border-2 w-[220px] lg:w-[500px] border-gray-300 rounded-md bg-gray-100 text-gray-700 cursor-pointer transition ease-in-out delay-300 hover:bg-[#408180]"
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