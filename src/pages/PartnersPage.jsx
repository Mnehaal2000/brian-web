import React from 'react'
import bg from "../assets/partnerspage/bg.png"
import img1 from "../assets/partnerspage/1.png"
import w1 from "../assets/partnerspage/w1.png"
import w2 from "../assets/partnerspage/w2.png"
import w3 from "../assets/partnerspage/w3.png"
import p1 from "../assets/partnerspage/p1.png"
import p2 from "../assets/partnerspage/p2.png"
import p3 from "../assets/partnerspage/p3.png"
import { Link } from 'react-router-dom'

const PartnersPage = () => {
    return (
        <>
            <div className="min-h-screen gap-10 flex flex-col pt-20" style={{ backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <div className="first w-full mt-[20px] flex flex-col lg:flex-row items-center md:gap-0 gap-10 justify-around">
                    <div className="heading w-[300px] lg:w-[680px]">
                        <h3 className='font-bold text-[40px]'>Partner with Us: Accelerate Sustainability</h3>
                        <p className='w-[300px] lg:w-[680px] font-light text-[24px] mt-[24px]'>At Ecocentury Energy, we're on a mission to revolutionize the energy landscape and create a sustainable future for all. We believe that collaboration is the key to success, and we invite you to join us in this exciting journey towards a greener tomorrow.</p>
                    </div>
                    <img className='w-[300px] h-[300px] xl:w-[440px] xl:h-[396px]' src={img1} alt="1" />
                </div>
                <div className="second w-full mt-[20px] mb-[20px] flex flex-col lg:flex-row items-center justify-around">
                    <div className='lg:w-[680px] w-[355px]'>
                        <h1 className='font-bold text-[30px] md:text-[40px] md:text-start text-center'>Why Partner with US?</h1>
                    </div>
                    <div className='w-[440px] md:block hidden'>
                    </div>
                </div>
                <div className="third w-full mt-[20px] mb-[20px] flex flex-col gap-10 md:gap-0 lg:flex-row items-center justify-around">
                    <div className='flex flex-col gap-3 justify-center items-center'>
                        <img src={w1} alt="" />
                        <p className='text-[28px] font-medium'>Impactful Collaboration</p>
                    </div>
                    <div className='flex flex-col gap-3 justify-center items-center'>
                        <img src={w2} alt="" />
                        <p className='text-[28px] font-medium'>Financial Benefits</p>
                    </div>
                    <div className='flex flex-col gap-3 justify-center items-center'>
                        <img src={w3} alt="" />
                        <p className='text-[28px] font-medium'>Vibrant Community</p>
                    </div>
                </div>
                <div className='fourth w-full mt-[20px] mb-[20px] flex flex-col gap-10 md:gap-0 items-center justify-around'>
                    <h1 className='text-center text-[40px] font-bold'>Partnership Tiers</h1>
                    <p className='font-light text-[24px] text-center'>Choose Your Path to Sustainability</p>
                    
                    <div className='w-full mt-[40px] mb-[20px] flex flex-col lg:flex-row gap-10 md:gap-[60px] items-center justify-center'>
                        <div className='md:w-[490px] flex flex-col justify-center items-center gap-5 w-[300px] h-[550px] md:h-[450px]'>
                            <h1 className='font-semibold text-[28px] text-center'>Trailblazers</h1>
                            <p className='font-light text-[20px] text-center'>This tier is for individuals and small businesses eager to start their sustainable journey. As a Trailblazer, you gain exclusive access to our Trailblazer packages, providing you with unique rewards, special deals, and more. Join the Trailblazers and be part of our vibrant community dedicated to making a positive impact on the environment.</p>
                            <Link to="/signin"><button className='text-xl lg:text-2xl py-4 px-12 rounded-[36px] bg-green-secondary  w-fit text-white'>Partner</button></Link>
                        </div>
                        <div className='md:w-[490px] flex flex-col justify-center items-center gap-5 w-[300px] md:h-[450px] h-[680px]'>
                            <h1 className='font-semibold text-[28px] text-center'>Trailblazers Omega</h1>
                            <p className='font-light text-[20px] text-center'>Taking your commitment to sustainability and business growth to the next level, Trailblazers Omega is designed for larger enterprises. As a Trailblazers Omega partner, you enjoy a host of premium benefits, including access to our exclusive marketplace to list your products, higher rewards, participation in exclusive deals, and much more. Embrace the future of sustainability with Trailblazers Omega.</p>
                            <Link to="/signin"><button className='text-xl lg:text-2xl py-4 px-12 rounded-[36px] bg-green-secondary  w-fit text-white'>Partner</button></Link>
                        </div>
                    </div>
                
                </div>
                <div className="fifth w-full mt-[20px] mb-[20px] flex flex-col lg:flex-row items-center justify-around">
                    <div className='lg:w-[680px] w-[355px]'>
                        <h1 className='font-bold text-[30px] md:text-[40px] md:text-start text-center'>How to Get Started?</h1>
                    </div>
                    <div className='w-[440px] md:block hidden'>
                    </div>
                </div>
                <div className="third w-full mt-[20px] mb-[20px] flex flex-col gap-10 md:gap-0 lg:flex-row items-center justify-around">
                    <div className='flex flex-col gap-3 justify-center items-center'>
                        <img src={p1} alt="" />
                        <p className='text-[28px] font-medium'>Explore Your Options</p>
                    </div>
                    <div className='flex flex-col gap-3 justify-center items-center'>
                        <img src={p2} alt="" />
                        <p className='text-[28px] font-medium'>Complete the Form</p>
                    </div>
                    <div className='flex flex-col gap-3 justify-center items-center'>
                        <img src={p3} alt="" />
                        <p className='text-[28px] font-medium'>Join the Community</p>
                    </div>
                </div>

                <div className="third w-full mt-[60px] mb-[100px] flex flex-col gap-10 md:gap-0 lg:flex-row items-center justify-around">
                <p className='text-center w-[300px] md:w-[1100px] font-light text-[24px]'>
                Ready to take the next step towards a sustainable future? Join us as a partner and become a part of the Ecocentury Energy family today! Once approved, you'll become a valued member of our growing community, ready to make a meaningful impact on our planet.
                </p>
                </div>

            </div>
        </>
    )
}

export default PartnersPage