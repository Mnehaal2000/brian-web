import React from 'react'
import Empowerbg from "../assets/empowerpage/empowerbg.png"
import img1 from "../assets/empowerpage/1.png"
import img2 from "../assets/empowerpage/2.png"
import img3 from "../assets/empowerpage/3.png"
import img4 from "../assets/empowerpage/4.png"
import img5 from "../assets/empowerpage/5.png"
import img6 from "../assets/empowerpage/6.png"
import img7 from "../assets/empowerpage/7.png"
import { Link } from 'react-router-dom'

const EmpowerPage = () => {
    return (
        <>
            <div className="min-h-screen gap-10 flex flex-col" style={{ backgroundImage: `url(${Empowerbg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <div className="first w-full mt-[20px] flex flex-col lg:flex-row items-center justify-around">
                    <div className="heading w-[300px] lg:w-[680px]">
                        <h3 className='font-bold text-3xl'>Empowering Minds for a Sustainable Future</h3>
                        <p className='w-[300px] lg:w-[680px] mt-[15px]'>Welcome to Ecocentury Energy's Energy Education hub. We believe that knowledge is the foundation of change, and in the realm of sustainable energy, understanding is key. Explore the resources below to broaden your understanding of energy, sustainability, and the impact you can make.</p>
                        <p className='w-[300px] lg:w-[680px]'>• Learn the fundamentals of sustainable energy sources like solar, wind, hydro, and more.</p>
                    </div>
                    <img className='w-[300px] h-[300px] xl:w-[500px] xl:h-[500px]' src={img1} alt="1" />
                </div>
                <div className="second w-full lg:gap-0 gap-10 flex flex-col lg:flex-row items-center justify-around">
                    <img className='w-[293px] h-[293px] xl:w-[407px] xl:h-[367px] transform: rotate(3deg);' src={img2} alt="1" />
                    <div className="heading w-[300px] lg:w-[680px]">
                        <h3 className='font-bold text-3xl'>Solar Energy</h3>
                        <p className='w-[300px] lg:w-[680px] mt-[15px]'>Refers to the radiant energy emitted by the Sun, which can be harnessed and converted into usable forms of energy for various applications.
                            How it Works: Solar panels capture sunlight and convert it into electricity through photovoltaic cells.</p>
                        <p className='w-[300px] lg:w-[680px]'>Pros: Abundant, clean, renewable, reduces electricity bills.</p>
                        <p className='w-[300px] lg:w-[680px]'>Cons: Intermittent (daylight-dependent), initial installation costs.
                            Applications: Residential, commercial, and industrial electricity generation, solar heating systems.</p>
                    </div>
                </div>
                <div className="third w-full flex flex-col lg:flex-row items-center justify-around">
                    <div className="heading w-[300px] lg:w-[680px]">
                        <h3 className='font-bold text-3xl'>Wind Energy</h3>
                        <p className='w-[300px] lg:w-[550px] mt-[15px]'>Wind turbines harness wind power to generate electricity.Pros: Clean, renewable, reduces greenhouse gas emissions. Cons: Intermittent, location-dependent, visual and noise impact. Applications: Wind farms, onshore and offshore, for electricity generation.</p>
                    </div>
                    <img className='w-[293px] h-[293px]' src={img3} alt="1" />
                </div>
                <div className="fourth w-full flex flex-col lg:flex-row items-center justify-around">
                    <img className='w-[520px] h-[520px]' src={img4} alt="1" />
                    <div className="heading  w-[300px] lg:w-[680px]">
                        <h3 className='font-bold text-3xl'>Hydropower</h3>
                        <p className='w-[300px] lg:w-[550px] mt-[15px]'>How it Works: The energy of moving water, like rivers or tides, is used to generate electricity.</p>
                        <p className='w-[300px] lg:w-[550px]'>Pros: Reliable, renewable, large-scale electricity production.</p>
                        <p className='w-[300px] lg:w-[550px]'>Cons: Environmental impact, requires specific geography.</p>
                        <p className='w-[300px] lg:w-[550px]'>Applications: Hydroelectric dams, run-of-river systems, tidal energy.</p>
                    </div>
                </div>
                <div className="fifth w-full flex gap-10 lg:gap-0 flex-col lg:flex-row items-center justify-around">
                    <div className="heading w-[300px] lg:w-[680px]">
                        <h3 className='font-bold text-3xl'>Biomass Energy</h3>
                        <p className='w-[300px] lg:w-[550px] mt-[15px]'>How it Works: Organic materials, like wood or crop waste, are burned or converted into biofuels.</p>
                        <p className='w-[300px] lg:w-[550px]'>Pros: Renewable, reduces waste, versatile.</p>
                        <p className='w-[300px] lg:w-[550px]'>Cons: Emission of greenhouse gases, resource-intensive.</p>
                        <p className='w-[300px] lg:w-[550px]'>Applications: Bioenergy plants, wood stoves, biogas production.</p>
                    </div>
                    <img className='w-[293px] h-[293px] xl:w-[434px] xl:h-[391px]' src={img5} alt="1" />
                </div>
                <div className="sixth w-full flex flex-col lg:flex-row items-center justify-around">
                    <img className='w-[435px] h-[361px]' src={img6} alt="1" />
                    <div className="heading w-[300px] lg:w-[680px]">
                        <h3 className='font-bold text-3xl'>Geothermal Energy</h3>
                        <p className='w-[300px] lg:w-[550px] mt-[15px]'>How it Works: Heat from the Earth's core is harnessed for electricity and heating.</p>
                        <p className='w-[300px] lg:w-[550px]'>Pros: Renewable, reliable, low emissions.</p>
                        <p className='w-[300px] lg:w-[550px]'>Cons: Location-dependent, drilling costs.</p>
                        <p className='w-[300px] lg:w-[550px]'>Applications: Geothermal power plants, residential heating and cooling.</p>
                    </div>
                </div>
                <div className="seventh w-full flex flex-col lg:flex-row items-center justify-around">
                    <div className="heading w-[300px] xl:w-[680px]">
                        <h3 className='font-bold text-3xl'>Tidal and Wave Energy</h3>
                        <p className='w-[300px] lg:w-[550px] mt-[15px]'>How it Works: Energy from tides and ocean waves is captured to generate electricity.</p>
                        <p className='w-[300px] lg:w-[550px]'>Pros: Predictable, renewable, minimal environmental impact.</p>
                        <p className='w-[300px] lg:w-[550px]'>Cons: Location-dependent, infrastructure challenges.</p>
                        <p className='w-[300px] lg:w-[550px]'>Applications: Tidal stream generators, wave energy devices.</p>
                        <p className='w-[300px] lg:w-[550px]'>Understanding these sustainable energy sources is the first step in embracing a more eco-friendly energy future. Each has its unique advantages and challenges, and their adoption plays a vital role in reducing our reliance on fossil fuels and combating climate change.</p>
                    </div>
                    <img className='w-[452px] h-[452px]' src={img7} alt="1" />
                </div>
                <div className="seventh w-full gap-10 flex flex-col items-center justify-around">
                    <h3 className='font-bold text-3xl text-center'>Conclusion</h3>
                    <p className='w-[300px] lg:w-[800px] mt-[10px] text-center'>Education is the first step towards creating a sustainable future. Whether you're new to the world of energy or a seasoned enthusiast, our Energy Education resources are here to empower you with knowledge and inspire positive change. Together, we can build a brighter, greener tomorrow.
                        Empower Your Future with Sustainable Investments! Take the first step toward a brighter, more prosperous tomorrow!</p>
                    <Link to="/signup"><button className='cursor-pointer mb-[70px] bg-[#059C4B] w-[280px] h-[51px] text-white text-2xl'>
                        Join Us
                    </button></Link>
                </div>
            </div>
        </>
    )
}

export default EmpowerPage