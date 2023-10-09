import React from 'react';

const Support = () => {
    return (
        <>
            <div className="main w-full flex mb-[50px] flex-col justify-center items-center">
                <div className="main w-[300px] lg:w-[600px] mt-[60px] flex flex-row justify-start">
                    <h3 className='text-white font-bold text-2xl'>Submit a Support Ticket</h3>
                </div>
                <div className="main w-[300px] lg:w-[600px] mt-[30px] flex flex-col justify-center gap-[23px] items-center">
                    <div className='flex flex-col'>
                        <label htmlFor="firstname" className="text-white">First Name</label>
                        <input type="text" id="firstname" className="bg-transparent p-5 mt-[10px] mb-[30px] w-[500px] h-[70px] border border-white outline-none rounded-md text-lg text-white" />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="lastname" className="text-white">Last Name</label>
                        <input type="text" id="lastname" className="bg-transparent p-5 mt-[10px] mb-[30px] w-[500px] h-[70px] border border-white outline-none rounded-md text-lg text-white" />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="email" className="text-white">User Name or ID</label>
                        <input type="text" id="email" className="bg-transparent p-5 mt-[10px] mb-[30px] w-[500px] h-[70px] border border-white outline-none rounded-md text-lg text-white" />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="subject" className="text-white">Title</label>
                        <input type="text" id="subject" className="bg-transparent p-5 mt-[10px] mb-[30px] w-[500px] h-[70px] border border-white outline-none rounded-md text-lg text-white" />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="message" className="text-white">Message</label>
                        <textarea id="message" className="bg-transparent text-white p-5 mt-[10px] mb-[30px] w-[500px] h-[200px] border border-white outline-none rounded-md text-lg " />
                    </div>
                    <button className='w-[500px] h-[85px] font-bold text-white text-2xl rounded-lg' style={{background:"linear-gradient(#29A9E3,#272C36)"}}>Send Message to Admin</button>
                </div>
            </div>
        </>
    )
}

export default Support;
