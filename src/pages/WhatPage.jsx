import React from 'react'
import bg from "../assets/whatpage/bg.png"
import img1 from "../assets/whatpage/1.png"
import img2 from "../assets/whatpage/2.png"
import img3 from "../assets/whatpage/3.png"

const WhatPage = () => {
    return (
        <>
            <div className="min-h-screen flex flex-col" style={{ backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <div className="first w-full mt-[20px] flex flex-col lg:flex-row items-center justify-around">
                    <div className="heading w-[300px] lg:w-[580px]">
                        <h3 className='font-bold text-3xl'>WHAT WE DO</h3>
                        <p className='w-[300px] lg:w-[580px] mt-[15px]'>At EcocenturyEnergy, our commitment to sustainability and innovation drives our core activities, making us a catalyst for positive change. We strive to set new standards and make the world a better place through our core activities:</p>
                        <h3 className='font-bold mt-[90px] text-3xl'>Renewable and Energy Solutions</h3>
                        <p className='w-[300px] lg:w-[580px] mt-[15px]'>Innovation in Action: In an ever-evolving energy landscape, we stand at the forefront of renewable and energy solutions. Our commitment to innovation drives us to harness the full potential of sustainable energy sources. From solar power to wind energy, our aim is to provide the world with clean, reliable, and sustainable energy options.</p>
                    </div>
                    <img className='w-[300px] h-[300px] xl:w-[500px] xl:h-[500px]' src={img1} alt="1" />
                </div>
                <div className="second w-full lg:gap-0 gap-10 flex flex-col lg:flex-row items-center justify-around">
                    <img className='w-[293px] h-[293px] xl:w-[500px] xl:h-[500px]' src={img2} alt="1" />
                    <div className="heading w-[300px] lg:w-[680px]">
                        <h3 className='font-bold text-3xl'>Lower-Emission Initiatives</h3>
                        <p className='w-[300px] lg:w-[680px] mt-[15px]'>Leading Environmental Stewardship: Our dedication to reducing emissions sets us apart. We invest in state-of-the-art technologies and sustainable practices that not only lower emissions but also inspire industry-wide change. We're on a mission to redefine environmental stewardship by pioneering lower-emission solutions.</p>
                    </div>
                </div>
                <div className="third w-full md:mt-[0px] mt-[10px] flex flex-col lg:flex-row items-center justify-around">
                    <div className="heading w-[300px] lg:w-[580px]">
                        <h3 className='font-bold text-3xl'>Oil and Natural Gas</h3>
                        <p className='w-[300px] lg:w-[580px] mt-[15px]'>Balancing Energy Needs and Responsibility: While we're committed to renewable energy, we recognize the significance of responsible oil and natural gas production. Our approach to fossil fuels combines efficient extraction with environmental responsibility, ensuring a sustainable and balanced energy portfolio.</p>
                    </div>
                    <div className='w-[300px] h-[300px] md:block hidden xl:w-[200px] xl:h-[200px]'></div>
                </div>
                <div className="fourth w-full mt-[20px] gap-10 flex flex-col lg:flex-row items-center justify-around">
                    <img className='w-[300px] h-[300px] xl:w-[564px] xl:h-[508px] transform:rotate(5deg);' src={img3} alt="1" />
                    <div>
                        <div className="heading w-[300px] lg:w-[680px]">
                            <h3 className='font-bold text-3xl'>Achieving Net Zero Emissions</h3>
                            <p className='w-[300px] lg:w-[580px] mt-[15px]'>The Road to a Healthier Planet: Our unwavering goal is to achieve net-zero emissions. We actively engage in initiatives that reduce our carbon footprint and make significant contributions to a cleaner, healthier planet. Our relentless pursuit of sustainability drives us to redefine industry standards</p>
                            <p className='w-[300px] lg:w-[580px] mt-[15px]'>Our commitment is clear: we are actively working with our customers and partners across sectors to accelerate the transition to a net-zero emissions world.</p>
                            <p className='w-[300px] lg:w-[580px] mt-[15px]'>We believe that true change happens through collaboration. EcocenturyEnergy actively partners with customers, businesses, and industry sectors</p>
                            <p className='w-[300px] lg:w-[580px] mt-[15px]'>Our journey towards a sustainable tomorrow is also marked by a relentless commitment to innovation and a dedication to being a driving force in achieving a net-zero emissions world.</p>
                        </div>
                    </div>
                </div>
                <div className="fifth w-full gap-10 mt-[20px] flex flex-col items-center justify-around">
                    <h3 className='font-bold text-3xl text-center'>Empowering Lives</h3>
                    <p className='w-[300px] lg:w-[800px] mt-[-20px] text-center'>Empowerment Through Opportunities: Empowering lives is our mantra. We invest in communities, foster startups, and create opportunities that empower individuals and organizations alike. Through our initiatives, we aim to elevate lives, making them more prosperous and self-reliant.</p>
                    <p className='w-[300px] lg:w-[800px] mt-[10px] text-center'>Our commitment goes beyond words; it's a tangible force driving change in the world. EcocenturyEnergy is dedicated to setting industry benchmarks, reducing environmental impact, and uplifting communities. Join us on this transformative journey toward a sustainable, prosperous, and equitable future</p>
                    <button className='cursor-pointer mb-[70px] bg-[#059C4B] py-4 px-20 rounded-[36px] text-white text-2xl'>
                        Join Us
                    </button>
                </div>
            </div>
        </>
    )
}

export default WhatPage