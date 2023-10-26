import React from 'react'
import bg from "../assets/whopage/bg.png"
import img1 from "../assets/whopage/1.png"
import img2 from "../assets/whopage/2.png"
import img3 from "../assets/whopage/3.png"
import img4 from "../assets/whopage/4.png"


const WhoPage = () => {
    return (
        <>
            <div className="min-h-screen gap-10 flex flex-col pt-20" style={{ backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <div className="first w-full mt-[20px] flex flex-col lg:flex-row items-center justify-around">
                    <div className="heading w-[300px] lg:w-[680px]">
                        <h3 className='font-bold text-3xl'>WHO WE ARE</h3>
                        <p className='w-[300px] lg:w-[680px] mt-[15px]'>At Ecocentury Energy we are more than just an energy company; we are a global force for positive change. Our organization is built on a foundation of innovation, sustainability, and a deep commitment to shaping a brighter future for all.</p>
                        <button className='w-[200px]  mt-[10px] py-4 px-12 rounded-[36px] bg-[#12664F] text-white'>Join Us Now</button>
                    </div>
                    <img className='w-[300px] h-[300px] xl:w-[591px] xl:h-[445px]' src={img1} alt="1" />
                </div>
                <div className="second w-full lg:gap-0 gap-10 flex flex-col lg:flex-row items-center justify-around">
                    <img className='w-[293px] h-[293px] xl:w-[407px] xl:h-[367px] transform: rotate(3deg);' src={img2} alt="1" />
                    <div className="heading w-[300px] lg:w-[680px]">
                        <h3 className='font-bold text-3xl'>Our Global Organization</h3>
                        <p className='w-[300px] lg:w-[680px] mt-[15px]'>Ecocentury Energy operates on a global scale, with a presence in diverse markets and regions worldwide. Our reach extends far and wide, allowing us to make a meaningful impact on a global scale while catering to local needs and opportunities.</p>
                    </div>
                </div>


                <div className="third w-full mt-[20px] gap-10 flex flex-col lg:flex-row items-center justify-around">
                    <div className="heading w-[300px] lg:w-[680px]">
                        <h3 className='font-bold text-3xl'>Our Vision</h3>
                        <p className='w-[300px] lg:w-[680px] mt-[15px]'>Our vision is to see a world powered by better energy solutions. We envision a future where energy is clean, affordable, and accessible to all. We strive for a world where the environment is protected, communities are thriving, and opportunities abound.</p>
                    </div>
                    <img className='w-[300px] h-[300px] xl:w-[454px] xl:h-[409px]' src={img3} alt="1" />
                </div>


                <div className="fourth w-full lg:gap-0 gap-10 flex flex-col lg:flex-row items-center justify-around">
                    <img className='w-[293px] h-[293px] xl:w-[407px] xl:h-[367px] transform: rotate(3deg);' src={img4} alt="1" />
                    <div className="heading w-[300px] lg:w-[680px]">
                        <h3 className='font-bold text-3xl'>Our Mission:</h3>
                        <p className='w-[300px] lg:w-[680px] mt-[15px]'>We are on a mission to create an enabling environment for all, fostering a harmonious coexistence between humanity, nature, and the environment. Our dedication is to revolutionize the energy landscape, bringing sustainable and accessible energy solutions to every corner of the globe. Through our efforts, we empower people to live their best lives while contributing to a more sustainable and prosperous future.</p>
                    </div>
                </div>


                <div className="fifth w-full mt-[20px] gap-10 flex flex-col lg:flex-row items-center justify-around">
                    <div className="heading w-[300px] lg:w-[680px]">
                        <h3 className='font-bold text-3xl'>Our Approach</h3>
                        <p className='w-[300px] lg:w-[680px] mt-[15px]'>Our approach is rooted in transparency, innovation, and collaboration. We leverage cutting-edge technology to drive progress and efficiency in the energy sector. We actively collaborate with communities, businesses, and startups to co-create solutions that benefit everyone.</p>
                    </div>
                    <img className='w-[300px] h-[300px] xl:w-[454px] xl:h-[409px]' src={img3} alt="1" />
                </div>

                <div className="sixth w-full gap-10 flex flex-col items-center justify-around">
                    <h3 className='font-bold text-3xl text-center'>Technology and Collaboration</h3>
                    <p className='w-[300px] lg:w-[1100px] mt-[10px] text-center text-xl'>Technology is at the heart of our operations. We embrace innovation to develop and implement advanced energy solutions. Collaboration is the key to our success, and we actively seek partnerships and alliances to accelerate our mission.</p>
                    <p className='w-[300px] lg:w-[1100px] mt-[10px] text-center text-xl'>As a global organization with a clear purpose, mission, and vision, [Your Company Name] is committed to making a lasting impact. Together with our partners, employees, and stakeholders, we are driving the transformation of the energy industry and creating a sustainable world for generations to come.
                        Join us on this remarkable journey towards a brighter, more sustainable future.</p>
                    <button className='cursor-pointer mb-[70px] bg-[#059C4B] py-4 px-12 rounded-[36px] text-white text-2xl'>
                        Join Us
                    </button>
                </div>


                <div className="seventh w-full gap-10 flex flex-col items-center justify-around">
                    <h3 className='font-bold text-3xl text-center'>Ecocentury Lifestyle Community</h3>
                    <p className='w-[300px] lg:w-[1100px] mt-[10px] text-center text-xl'>At Ecocentury Energy, we believe in the power of community, united by a common purpose: to ignite change and create a sustainable, thriving world. Our commitment to sustainability isn't just a movement; it's a lifestyle we embrace wholeheartedly.</p>
                    <p className='w-[300px] lg:w-[1100px] mt-[10px] text-center text-xl'>When you become a member of Ecocentury Energy, you're not just joining a company; you're becoming part of an extraordinary community that shares a deep passion for a brighter future. Our community is a testament to the values we hold dear, and together, we embark on a journey to make a meaningful impact on our lives, the lives of our children, future generations, and the world at large.</p>
                    <p className='w-[300px] lg:w-[1100px] mt-[10px] text-center text-xl'>In our community, sustainability isn't merely a trend; it's a way of life. We strive to live our best lives today while working diligently to secure a sustainable and prosperous future for all. Every step we take today, every decision we make, brings us closer to creating a world where environmental consciousness, innovation, and compassion flourish.</p>
                    <p className='w-[300px] lg:w-[1100px] mt-[10px] text-center text-xl'>As a member of the Ecocentury Lifestyle Community, you are not just a witness to change – you are a catalyst for it. Together, we are champions of progress, advocates for environmental stewardship, and champions of a future we are proud to pass on. Join us in shaping a world where sustainable living isn't just a choice; it's our collective legacy. Welcome to our community- where your passion, your voice, and your actions matter. Together, we are the driving force behind a brighter and more sustainable future for all.</p>
                    <h3 className='font-bold text-center'>Join us in creating a world of lasting change!</h3>
                    <button className='cursor-pointer mb-[70px] bg-[#059C4B] py-4 px-12 rounded-[36px] text-white text-2xl'>
                    Become a Member
                    </button>
                </div>

            </div>
        </>
    )
}

export default WhoPage