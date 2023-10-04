import React from 'react'
import bg from "../assets/environmentpage/bg.png"
import img1 from "../assets/environmentpage/1.png"
import img2 from "../assets/environmentpage/2.png"

const EnvironmentPage = () => {
    return (
        <>
            <div className="min-h-screen gap-10 flex flex-col" style={{ backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <div className="first w-full mt-[20px] gap-10 flex flex-col lg:flex-row items-center justify-around">
                    <div>
                        <div className="heading w-[300px] lg:w-[680px]">
                            <h3 className='font-bold text-2xl md:text-3xl'>Environment and Sustainability at EcocenturyEnergy</h3>
                            <h3 className='font-bold text-2xl md:text-2xl'>(Our Commitment to a Greener Tomorrow)</h3>
                            <p className='w-[300px] lg:w-[580px] mt-[15px]'>At EcocenturyEnergy, we are deeply committed to preserving and protecting our planet. Our dedication to sustainability is a driving force behind every decision we make. We believe that a sustainable future is possible when we work together to address environmental challenges and create lasting solutions.</p>
                        </div>
                    </div>
                    <img className='w-[300px] h-[300px] xl:w-[465px] xl:h-[419px]' src={img1} alt="1" />
                </div>
                <div className="second w-full mt-[20px] gap-10 flex flex-col lg:flex-row items-center justify-around">
                    <div>
                        <div className="heading w-[300px] lg:w-[680px]">
                            <h3 className='font-bold mb-[20px] text-2xl md:text-3xl'>Our Environmental Responsibility</h3>
                            <h3 className='font-bold'>Reducing Our Carbon Footprint:</h3>
                            <p className='w-[300px] lg:w-[580px] mb-[15px]'>We actively invest in renewable energy sources and implement energy-efficient practices to minimize our impact on the environment.</p>
                        </div>
                        <div className="heading w-[300px] lg:w-[680px]">
                            <h3 className='font-bold'>Conservation Initiatives:</h3>
                            <p className='w-[300px] lg:w-[580px] mb-[15px]'>We support conservation efforts to protect natural habitats and promote biodiversity. Our projects aim to create a harmonious balance between human progress and nature's wellbeing.</p>
                        </div>
                        <div className="heading w-[300px] lg:w-[680px]">
                            <h3 className='font-bold'>Community Engagement:</h3>
                            <p className='w-[300px] lg:w-[580px]'>We collaborate with local communities to raise environmental awareness, educate, and drive positive change.</p>
                        </div>
                    </div>
                    <img className='w-[300px] lg:relative lg:left-[-300px] h-[300px] xl:w-[500px] xl:h-[500px]' src={img2} alt="1" />
                </div>
                <div className="third w-full gap-10 flex flex-col items-center justify-around">
                    <h3 className='font-bold text-3xl text-center'>Bring Environmental Concerns to Our Notice</h3>
                    <p className='w-[300px] lg:w-[800px] mt-[10px] text-center'>We invite you to be part of our mission to protect the environment. If you have concerns or issues related to the environment in your area, we want to hear from you. Together, we can address these concerns and work towards sustainable solutions. Please use the form below to report environmental concerns in your locality:</p>

                    <div className="form w-[300px] md:w-[700px] lg:w-auto">
                        <div className="lg:flex lg:flex-row items-center justify-center gap-10">
                            <div className="w-full lg:w-3/4 text-center">
                                <label htmlFor="country">Country</label>
                                <input
                                    className="input-field bg-[#edeff1]"
                                    type="text"
                                    name="country"
                                    id="country"
                                />
                            </div>
                            <div className="w-full lg:w-3/4 text-center">
                                <label htmlFor="zip">ZIP Code</label>
                                <input
                                    className="input-field bg-[#edeff1]"
                                    type="text"
                                    name="zip"
                                    id="zip"
                                />
                            </div>
                        </div>
                        <div className="lg:flex lg:flex-row items-center justify-center gap-10">
                            <div className="w-full lg:w-3/4 text-center">
                                <label htmlFor="address">Address</label>
                                <input
                                    className="input-field bg-[#edeff1]"
                                    type="text"
                                    name="address"
                                    id="address"
                                />
                            </div>
                            <div className="w-full lg:w-3/4 text-center">
                                <label htmlFor="des">Description of Concern</label>
                                <input
                                    className="input-field bg-[#edeff1]"
                                    type="text"
                                    name="des"
                                    id="des"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col md:justify-start">
                        <button className='cursor-pointer mb-[10px] rounded-md bg-[#B4E272] w-[238px] h-[50px] text-black text-1xl'>
                        Attach Photos
                    </button>
                        <button className='cursor-pointer mb-[70px] rounded-md bg-[#059C4B] w-[280px] h-[51px] text-white text-2xl'>
                        Submit
                    </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EnvironmentPage