import React from 'react'
import usericon from "../../assets/dashboard/settings/usericon.png"

const Settings = () => {
    return (
        <>
            <div className="main w-[1000px] lg:w-full flex mb-[50px] flex-col justify-center items-center">



                <div className='w-[900px] items-center mt-[30px] rounded-lg h-[846px] border border-white flex flex-col gap-[23px]' style={{ background: "linear-gradient(#29A9E3,#272C36)" }}>
                    <div className='w-[750px] mt-[20px] flex flex-col gap-5 justify-start'>
                        <img className='w-[100px] h-[100px]' src={usericon} alt="" />
                        <button className='bg-transparent text-white w-[269px] h-[41px] rounded-lg border border-white'>UPLOAD A NEW PROFILE PHOTO</button>
                    </div>
                    <div className='w-[750px] mt-[20px]'>
                        <div className='grid grid-cols-3 gap-5'>
                            {/* Input Box 1 */}
                            <div className='flex flex-col'>
                                <label className='text-white'>First Name</label>
                                <input
                                    className='bg-transparent outline-none text-white rounded-sm pt-2 pl-1 pr-1 pb-2 border border-white'
                                    type='text'
                                />
                            </div>

                            {/* Input Box 2 */}
                            <div className='flex flex-col'>
                                <label className='text-white'>Last Name</label>
                                <input
                                    className='bg-transparent outline-none text-white rounded-sm pt-2 pl-1 pr-1 pb-2 border border-white'
                                    type='text'
                                />
                            </div>

                            {/* Input Box 3 */}
                            <div className='flex flex-col'>
                                <label className='text-white'>Email</label>
                                <input
                                    className='bg-transparent outline-none text-white rounded-sm pt-2 pl-1 pr-1 pb-2 border border-white'
                                    type='text'
                                />
                            </div>

                            {/* Input Box 4 */}
                            <div className='flex flex-col'>
                                <label className='text-white'>Contact No.</label>
                                <input
                                    className='bg-transparent outline-none text-white rounded-sm pt-2 pl-1 pr-1 pb-2 border border-white'
                                    type='text'
                                />
                            </div>

                            {/* Input Box 5 */}
                            <div className='flex flex-col'>
                                <label className='text-white'>Membership Type</label>
                                <input
                                    className='bg-transparent outline-none text-white rounded-sm pt-2 pl-1 pr-1 pb-2 border border-white'
                                    type='text'
                                />
                            </div>

                            {/* Input Box 6 */}
                            <div className='flex flex-col'>
                                <label className='text-white'>Partner (Individual/Business)</label>
                                <input
                                    className='bg-transparent outline-none text-white rounded-sm pt-2 pl-1 pr-1 pb-2 border border-white'
                                    type='text'
                                />
                            </div>

                            {/* Input Box 7 */}
                            <div className='flex flex-col'>
                                <label className='text-white'>Account No.</label>
                                <input
                                    className='bg-transparent outline-none text-white rounded-sm pt-2 pl-1 pr-1 pb-2 border border-white'
                                    type='text'
                                />
                            </div>

                            {/* Input Box 8 */}
                            <div className='flex flex-col'>
                                <label className='text-white'>Balance</label>
                                <input
                                    className='bg-transparent outline-none text-white rounded-sm pt-2 pl-1 pr-1 pb-2 border border-white'
                                    type='text'
                                />
                            </div>

                            {/* Input Box 9 */}
                            <div className='flex flex-col'>
                                <label className='text-white'>Investments</label>
                                <input
                                    className='bg-transparent outline-none text-white rounded-sm pt-2 pl-1 pr-1 pb-2 border border-white'
                                    type='text'
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-white'>Amount Withdrawn</label>
                                <input
                                    className='bg-transparent outline-none text-white rounded-sm pt-2 pl-1 pr-1 pb-2 border border-white'
                                    type='text'
                                />
                            </div>

                            {/* Input Box 2 */}
                            <div className='flex flex-col'>
                                <label className='text-white'>Available For Withdrawal</label>
                                <input
                                    className='bg-transparent outline-none text-white rounded-sm pt-2 pl-1 pr-1 pb-2 border border-white'
                                    type='text'
                                />
                            </div>

                            {/* Input Box 3 */}
                            <div className='flex flex-col'>
                                <label className='text-white'>Pending Status</label>
                                <input
                                    className='bg-transparent outline-none text-white rounded-sm pt-2 pl-1 pr-1 pb-2 border border-white'
                                    type='text'
                                />
                            </div>

                            {/* Input Box 4 */}
                            <div className='flex flex-col'>
                                <label className='text-white'>Referrals</label>
                                <input
                                    className='bg-transparent outline-none text-white rounded-sm pt-2 pl-1 pr-1 pb-2 border border-white'
                                    type='text'
                                />
                            </div>

                            {/* Input Box 5 */}
                            <div className='flex flex-col'>
                                <label className='text-white'>Achievements</label>
                                <input
                                    className='bg-transparent outline-none text-white rounded-sm pt-2 pl-1 pr-1 pb-2 border border-white'
                                    type='text'
                                />
                            </div>

                            {/* Input Box 6 */}
                            <div className='flex flex-col'>
                                <label className='text-white'>Support Tickets</label>
                                <input
                                    className='bg-transparent outline-none text-white rounded-sm pt-2 pl-1 pr-1 pb-2 border border-white'
                                    type='text'
                                />
                            </div>

                            {/* Input Box 7 */}
                            <div className='flex flex-col'>
                                <label className='text-white'>Purchases</label>
                                <input
                                    className='bg-transparent outline-none text-white rounded-sm pt-2 pl-1 pr-1 pb-2 border border-white'
                                    type='text'
                                />
                            </div>

                            {/* Input Box 8 */}
                            <div className='flex flex-col'>
                                <label className='text-white'>Amount Spent</label>
                                <input
                                    className='bg-transparent outline-none text-white rounded-sm pt-2 pl-1 pr-1 pb-2 border border-white'
                                    type='text'
                                />
                            </div>

                            {/* Input Box 9 */}
                            <div className='flex flex-col'>
                                <label className='text-white'>Currency</label>
                                <input
                                    className='bg-transparent outline-none text-white rounded-sm pt-2 pl-1 pr-1 pb-2 border border-white'
                                    type='text'
                                />
                            </div>
                        </div>
                    </div>

                    <div className='w-[750px] mt-[20px] flex flex-row items-center gap-5 justify-end'>
                        <button className='text-white font-bold w-[186px] h-[56px] rounded-lg' style={{ background: "linear-gradient(#BB000E,#212121)" }}>Reset</button>
                        <button className='text-white font-bold w-[186px] h-[56px] rounded-lg' style={{ background: "linear-gradient(#29A9E3,#272C36)" }}>Save Changes</button>
                    </div>
                </div>





                <div className='w-[900px] items-center mt-[30px] rounded-lg h-[346px] border border-white flex flex-col gap-[23px]' style={{ background: "linear-gradient(#29A9E3,#272C36)" }}>
                    <div className='w-[750px] mt-[20px] flex flex-col gap-5 justify-start'>
                        <div className='w-[750px] mt-[20px] flex flex-col gap-5 justify-start'>
                            <h3 className='text-white text-2xl font-bold'>Update Password</h3>
                            <h3 className='text-white'>Ensure your account is using a long, random password to stay secure.</h3>
                        </div>
                        <div className='w-[750px] mt-[20px]'>
                            <div className='grid grid-cols-3 gap-5'>
                                {/* Input Box 1 */}
                                <div className='flex flex-col'>
                                    <label className='text-white'>Current Password</label>
                                    <input
                                        className='bg-transparent outline-none text-white rounded-sm pt-2 pl-1 pr-1 pb-2 border border-white'
                                        type='text'
                                    />
                                </div>

                                {/* Input Box 2 */}
                                <div className='flex flex-col'>
                                    <label className='text-white'>New Password</label>
                                    <input
                                        className='bg-transparent outline-none text-white rounded-sm pt-2 pl-1 pr-1 pb-2 border border-white'
                                        type='text'
                                    />
                                </div>

                                {/* Input Box 3 */}
                                <div className='flex flex-col'>
                                    <label className='text-white'>Confirm Password</label>
                                    <input
                                        className='bg-transparent outline-none text-white rounded-sm pt-2 pl-1 pr-1 pb-2 border border-white'
                                        type='text'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='w-[750px] mt-[20px] flex flex-row items-center gap-5 justify-end'>
                            <button className='text-white font-bold w-[186px] h-[56px] rounded-lg' style={{ background: "linear-gradient(#BB000E,#212121)" }}>Reset</button>
                            <button className='text-white font-bold w-[186px] h-[56px] rounded-lg' style={{ background: "linear-gradient(#29A9E3,#272C36)" }}>Save Changes</button>
                        </div>
                    </div>
                </div>







                <div className='w-[900px] items-center mt-[30px] rounded-lg h-[346px] border border-white flex flex-col gap-[23px]' style={{ background: "linear-gradient(#29A9E3,#272C36)" }}>
                    <div className='w-[750px] mt-[20px] flex flex-col gap-5 justify-start'>
                        <div className='w-[750px] mt-[20px] flex flex-col gap-5 justify-start'>
                            <h3 className='text-white text-2xl font-bold'>Two Factor Authentication</h3>
                            <h3 className='text-white'>Add additional security to your account using two factor authentication</h3>
                        </div>
                        <div className='w-[750px] mt-[20px] flex flex-col gap-5 justify-start'>
                            <h3 className='text-white text-2xl font-bold'>You have not enabled two factor authentication</h3>
                            <h3 className='text-white'>When two factor authentication is enabled, you will be promoted for a secure, random token during authentication. You may retrieve this token from your phone’s Google Authenticator application</h3>
                        </div>
                        <div className='w-[750px] mt-[10px] flex flex-row items-center gap-5 justify-start'>
                            <button className='text-white font-bold w-[186px] h-[56px] rounded-lg' style={{ background: "linear-gradient(#0E504C,#032C28)" }}>Enable</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Settings