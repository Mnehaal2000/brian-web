import React, { useState,useContext } from 'react'
import { db } from "../../firebase"
import { addDoc, collection } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import {AuthContext} from "../../AuthContext"

const Feedbacks = () => {
    const {currentUser} = useContext(AuthContext)
    const [FormData, setFormData] = useState({
        feedback_subject: '',
        feedback: '',
        status: 'pending'
    });
    const handleChange = (e) => {
        const { value, name } = e.target;
        setFormData({
            ...FormData,
            [name]: value
        });
    }

    const addaFeedback = async () => {
        try {
            const docRef = await addDoc(collection(db, "feedbacks"), {
                feedback_subject: FormData.feedback_subject,
                feedback: FormData.feedback,
                status: 'pending',
                user: currentUser.email
            })
            if (docRef.id) {
                toast.success('🦄 Feedback added!', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        } catch (error) {
            toast.error('🦄 Error adding feedback', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    return (
        <>
            <div className="main w-[1000px] lg:w-full flex mb-[50px] flex-col justify-center items-center">
                <div className="main w-[300px] lg:w-[600px] mt-[60px] flex flex-row justify-start">
                    <h3 className='text-white font-bold text-2xl'>Add a valuable feedback</h3>
                </div>
                <div className="main w-[300px] lg:w-[600px] mt-[30px] flex flex-col justify-center gap-[23px] items-center">
                    <div className='flex flex-col'>
                        <label htmlFor="feedback_subject" className="text-white">Feedback subject</label>
                        <input type="text" id="feedback_subject" onChange={handleChange} name='feedback_subject' className="bg-transparent p-5 mt-[10px] mb-[30px] w-[500px] h-[70px] border border-white outline-none rounded-md text-lg text-white" />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="feedback" className="text-white">Feedback</label>
                        <input type="text" id="feedback" onChange={handleChange} name='feedback' className="bg-transparent p-5 mt-[10px] mb-[30px] w-[500px] h-[70px] border border-white outline-none rounded-md text-lg text-white" />
                    </div>
                    <button onClick={addaFeedback} className='w-[500px] h-[85px] font-bold text-white text-2xl rounded-lg' style={{ background: "linear-gradient(#29A9E3,#272C36)" }}>Add Feedback</button>
                    <ToastContainer
                        position="top-right"
                        autoClose={2000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />
                </div>
            </div>
        </>
    )
}

export default Feedbacks