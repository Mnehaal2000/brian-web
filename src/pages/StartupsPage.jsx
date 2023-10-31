import bg from "../assets/startupspage/bg.png"
import img1 from "../assets/startupspage/1.png"
import img2 from "../assets/startupspage/2.png"

const StartupsPage = () => {
    return (
        <>
            <div className="min-h-screen gap-10 flex flex-col pt-20" style={{ backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <div className="first w-full mt-[20px] gap-10 flex flex-col lg:flex-row items-center justify-around">
                    <div>
                        <div className="heading w-[300px] lg:w-[680px]">
                            <h3 className='font-bold text-3xl'>Ecocentury Startups and Ventures</h3>
                            <p className='w-[300px] lg:w-[580px] mt-[15px]'>At Ecocentury Energy, we're not just pioneers in the energy industry; we're also champions of innovation and entrepreneurship. Our commitment to a sustainable future extends beyond our core operations – it includes nurturing and supporting the growth of startups and ventures that share our vision.</p>
                        </div>
                        <div className="heading mt-[20px] w-[300px] lg:w-[680px]">
                            <h3 className='font-bold text-2xl'>Investing in Startups</h3>
                            <p className='w-[300px] lg:w-[580px] mt-[15px]'>We recognize the transformative potential of innovation and the driving force of startups in shaping a brighter future. At Ecocentury Energy, we are committed to investing in startups that resonate with our mission and values. We actively support these startups in translating their groundbreaking ideas into reality, creating a better world for all.</p>
                        </div>
                    </div>
                    <img className='w-[300px] h-[300px] xl:w-[500px] xl:h-[500px]' src={img1} alt="1" />
                </div>
                <div className="second w-full mt-[20px] gap-10 flex flex-col lg:flex-row items-center justify-around">
                <img className='w-[300px] h-[300px] xl:w-[591px] xl:h-[422px]' src={img2} alt="1" />
                    <div>
                        <div className="heading w-[300px] lg:w-[680px]">
                            <h3 className='font-bold text-3xl'>Startups Investing in Us</h3>
                            <p className='w-[300px] lg:w-[580px] mt-[15px]'>But our partnership with startups doesn't end with our investments. We also welcome startups to invest in us, becoming part of the Ecocentury Energy ecosystem. This mutually beneficial relationship fosters collaboration, creativity, and growth.</p>
                        </div>
                        <div className="heading mt-[20px] w-[300px] lg:w-[680px]">
                            <h3 className='font-bold text-2xl'>Empowering Startups</h3>
                            <p className='w-[300px] lg:w-[580px] mt-[15px]'>Our commitment to startups goes beyond financial investment. We provide startups with the tools and unwavering support they need to flourish</p>
                        </div>
                    </div>
                </div>
                <div className="seventh w-full gap-10 flex flex-col items-center justify-around">
                    <h3 className='font-bold text-3xl text-center'>Partner with Us as a Business</h3>
                    <p className='w-[300px] lg:w-[800px] mt-[10px] text-center'>If you're a business looking to align with our mission and tap into our ecosystem of innovation, there's no better time to join us. By partnering with Ecocentury Energy, you become part of a dynamic community that's shaping the future of sustainable energy.</p>
                    <p className='w-[300px] lg:w-[800px] mt-[10px] text-center'>[redirecting link Partner with Us as a Business] to explore the possibilities of collaboration and growth. Our dedicated partnership page provides all the information you need to get started, including how to apply and the benefits of becoming a part of the Ecocentury Energy family.</p>
                    <p className='w-[300px] lg:w-[800px] mt-[10px] text-center'>Join us on this exciting journey of innovation, sustainability, and growth. Together, we can create a brighter and more sustainable future for our planet and generations to come.</p>
                <button className='cursor-pointer mb-[70px] bg-[#059C4B] py-4 px-20 rounded-[36px] text-white text-2xl'>
                Partner With Us
                </button>
                </div>
            </div>
        </>
    )
}

export default StartupsPage