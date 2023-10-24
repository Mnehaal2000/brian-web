import React from 'react'
import bg from "../assets/energypage/bg.png"
import img1 from "../assets/energypage/1.png"
import img2 from "../assets/energypage/2.png"
import img3 from "../assets/energypage/3.png"

const EnergyPage = () => {
  return (
    <>
     <div className="min-h-screen gap-10 flex flex-col" style={{ backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <div className="first w-full mt-[20px] gap-10 flex flex-col lg:flex-row items-center justify-around">
                    <div>
                        <div className="heading w-[300px] lg:w-[680px]">
                            <h3 className='font-bold text-2xl md:text-3xl'>Energy and Innovation: Powering Progress Through Cutting-Edge Solutions</h3>
                            <p className='w-[300px] lg:w-[580px] mt-[15px]'>Energy is the heartbeat of our modern world, fueling our daily lives and aspirations. In the decades to come, access to energy will elevate living standards for countless individuals. Yet, the imperative to address climate change remains an urgent concern. At EcocenturyEnergy, we are dedicated to igniting the future through boundless human ingenuity, relentless innovation, and state-of-the-art technology, all aimed at unlocking cleaner and more abundant energy sources for the journey ahead.</p>
                            <p className='w-[300px] lg:w-[580px] mt-[15px]'>In an era where the world's energy landscape is rapidly evolving, innovation is our driving force. We are committed to spearheading transformative change in the energy sector by harnessing innovation as a catalyst for progress.</p>
                        </div>
                    </div>
                    <img className='w-[300px] h-[300px] xl:w-[500px] xl:h-[500px]' src={img1} alt="1" />
                </div>
                <div className="second w-full mt-[20px] gap-10 flex flex-col lg:flex-row items-center justify-around">
                <div>
                        <div className="heading w-[300px] lg:w-[680px]">
                            <h3 className='font-bold text-3xl'>Pioneering Sustainable Energy</h3>
                            <p className='w-[300px] lg:w-[580px] mt-[15px]'>Our journey begins with sustainable energy solutions that pave the way for a cleaner, greener future. From the boundless potential of solar and wind power to emerging technologies that hold the key to tomorrow's energy needs, we are actively exploring and implementing renewable solutions that align with our planet's well-being.</p>
                        </div>
                        <div className="heading mt-[20px] w-[300px] lg:w-[680px]">
                            <h3 className='font-bold text-2xl'>Environmental Stewardship</h3>
                            <p className='w-[300px] lg:w-[580px] mt-[15px]'>Environmental responsibility is ingrained in our DNA. We're not just aiming to reduce our carbon footprint; we're setting new standards in environmental stewardship. Our investments in state-of-the-art technologies and sustainable practices are transforming how we interact with our planet, setting an example for the entire industry.</p>
                        </div>
                    </div>
                    <img className='w-[300px] h-[300px] xl:w-[500px] xl:h-[500px]' src={img2} alt="1" />
                </div>

                <div className="third w-full mt-[20px] gap-10 flex flex-col lg:flex-row items-center justify-around">
                <img className='w-[300px] h-[300px] xl:w-[591px] xl:h-[422px]' src={img3} alt="1" />
                    <div>
                        <div className="heading w-[300px] lg:w-[680px]">
                            <h3 className='font-bold text-3xl'>Driving Industry Advancements</h3>
                            <p className='w-[300px] lg:w-[580px] mt-[15px]'>Our journey begins with sustainable energy solutions that pave the way for a cleaner, greener future. From the boundless potential of solar and wind power to emerging technologies that hold the key to tomorrow's energy needs, we are actively exploring and implementing renewable solutions that align with our planet's well-being.</p>
                        </div>
                        <div className="heading mt-[20px] w-[300px] lg:w-[680px]">
                            <h3 className='font-bold text-2xl'>Empowering Sustainable Communities</h3>
                            <p className='w-[300px] lg:w-[580px] mt-[15px]'>Energy innovation isn't just about technology; it's about people. We empower communities to embrace sustainable practices, creating a ripple effect of positive change. Through educational initiatives and community involvement, we're fostering a sustainable mindset that extends far beyond our immediate impact.</p>
                        </div>
                    </div>
                </div>
                <div className="seventh w-full gap-10 flex flex-col items-center justify-around">
                    <h3 className='font-bold text-3xl text-center'>Join Us in Powering Tomorrow</h3>
                    <p className='w-[300px] lg:w-[800px] mt-[10px] text-center'>The energy of the future is sustainable, efficient, and eco-conscious. At EcocenturyEnergy, we invite you to join us on this transformative journey towards a world powered by innovation and fueled by sustainable energy. Together, we can light the path to a brighter, cleaner future for generations to come.</p>
                <button className='cursor-pointer mb-[70px] bg-[#059C4B] py-4 px-20 rounded-[36px] text-white text-2xl'>
                Join Us
                </button>
                </div>
            </div>
    </>
  )
}

export default EnergyPage