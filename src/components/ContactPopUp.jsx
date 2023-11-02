import React, { useState } from 'react';

const ContactPopUp = ({ isOpen, onClose }) => {
    if (!isOpen) {
        return null;
    }
    const [FormData, setFormData] = useState({
        name: "",
        email:"",
        subject:"",
        message:"",
    });

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...FormData,
            [name]:value
        })
    }

    return (
        <div className="fixed z-[999] inset-0 flex items-center justify-center bg-gray-800 bg-opacity-70">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-md p-10 border rounded-lg max-h-85vh overflow-y-auto w-[300px] md:w-[400px]">
                <button
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none"
                    onClick={onClose}
                >
                    X
                </button>
                <h2 className="text-2xl text-black font-semibold mb-4">Contact Us</h2>
                <div className='w-full'>
                <form className='flex flex-col justify-center items-center'>
                    <div className="mb-4  flex gap-1 flex-col md:flex-row md:gap-2 w-full justify-between items-center">
                        <label htmlFor="name" className="block text-gray-700 font-semibold">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="border rounded w-full md:w-[237px] p-2 outline-none border-[#07bc0c] text-black"
                            value={FormData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4 flex gap-1 flex-col md:flex-row md:gap-2 w-full justify-between items-center">
                        <label htmlFor="email" className="block text-gray-700 font-semibold">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={FormData.email}
                            onChange={handleChange}
                            className="border rounded w-full md:w-[237px] p-2 outline-none border-[#07bc0c] text-black"
                            required
                        />
                    </div>
                    <div className="mb-4 flex gap-1 flex-col md:flex-row md:gap-2 w-full justify-between items-center">
                        <label htmlFor="subject" className="block text-gray-700 font-semibold">
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={FormData.subject}
                            onChange={handleChange}
                            className="border rounded w-full md:w-[237px] p-2 outline-none border-[#07bc0c] text-black"
                            required
                        />
                    </div>
                    <div className="mb-4 flex gap-1 flex-col md:flex-row md:gap-2 w-full justify-between md:items-start items-center">
                        <label htmlFor="message" className="block text-gray-700 font-semibold">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={FormData.message}
                            onChange={handleChange}
                            rows="4"
                            className="border rounded w-full p-2 outline-none border-[#07bc0c] text-black"
                            required
                        ></textarea>
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-[#07bc0c] hover:text-white transition ease-in-out delay-200 text-black font-semibold px-4 py-2 rounded focus:outline-none "
                        >
                            Submit
                        </button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    );
};

export default ContactPopUp;
