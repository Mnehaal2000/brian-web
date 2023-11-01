import React, { useState } from 'react'
import { db, storage } from '../../firebase';
import { addDoc, collection } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

const Store = () => {
    const [buttonstatus, setbuttonstatus] = useState('Add Item');
    const [imageFile, setImageFile] = useState(null);
    const [FormData, setFormData] = useState({
        itemname: '',
        itemdescription: '',
        itemprice: '',
        itemimg: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...FormData, [name]: value })
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImageFile(file);
    }

    const uploadImageToFirebase = async (imageFile) => {
        try {
            const storageRef = ref(storage, `storeProductImages/${imageFile.name}`);
            await uploadBytes(storageRef, imageFile);
            const downloadURL = await getDownloadURL(storageRef);
            return downloadURL
        } catch (error) {
            console.error('Error uploading image to Firebase Storage:', error);
            return null;
        }
    }

    const addItems = async () => {
        setbuttonstatus("Adding...")
        const downloadURL = await uploadImageToFirebase(imageFile);

        if (downloadURL) {

            const docRef = await addDoc(collection(db, "store"), {
                itemname: FormData.itemname,
                itemdescription: FormData.itemdescription,
                itemprice: FormData.itemprice,
                itemimg: downloadURL,
            })

            setFormData({
                itemname: '',
                itemdescription: '',
                itemprice: '',
                itemimg: '',
            });
            setImageFile(null);
            setbuttonstatus("Add Item")
        }
    }


    return (
        <>
            <div className="main w-[1000px] lg:w-full flex flex-col justify-center items-center">
                <div className="w-full mb-[50px] items-center mt-4 sm:mt-8 md:mt-12 lg:mt-16 xl:mt-20 2xl:mt-24 flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16 justify-center">
                    <h1 className='text-4xl text-white font-bold'>Add Store Item</h1>
                    <div className='flex flex-col gap-3 mt-[5px] mb-[5px]'>
                        <label className='text-white'>Item Name</label>
                        <input
                            className='bg-transparent text-center h-[70px] w-[500px] outline-none text-white rounded-sm pt-2 pl-1 pr-1 pb-2 border border-white'
                            type='text'
                            name='itemname'
                            value={FormData.itemname}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='flex flex-col gap-3 mt-[5px] mb-[5px]'>
                        <label className='text-white'>Item Description</label>
                        <input
                            className='bg-transparent text-center h-[70px] w-[500px] outline-none text-white rounded-sm pt-2 pl-1 pr-1 pb-2 border border-white'
                            type='text'
                            name='itemdescription'
                            value={FormData.itemdescription}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='flex flex-col gap-3 mt-[5px] mb-[5px]'>
                        <label className='text-white'>Item Price</label>
                        <input
                            className='bg-transparent text-center h-[70px] w-[500px] outline-none text-white rounded-sm pt-2 pl-1 pr-1 pb-2 border border-white'
                            type='text'
                            name='itemprice'
                            value={FormData.itemprice}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='flex flex-col gap-3 mt-[5px] mb-[5px]'>
                        <label className="text-white text-lg font-bold mb-4">Item Image</label>
                        <input
                            type="file"
                            accept="image/*"
                            name="itemimg"
                            onChange={handleImageChange}
                            className="p-2 border-2 border-gray-300 rounded-md bg-gray-100 text-gray-700 cursor-pointer transition ease-in-out delay-300 hover:bg-[#408180]"
                        />
                    </div>
                    <div className='flex flex-col gap-3 mt-[5px] mb-[5px]'>
                        <button onClick={addItems} className='w-[199px] h-[68px] bg-[#0AC15F] text-white font-bold text-2xl rounded-lg'>{buttonstatus}</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Store