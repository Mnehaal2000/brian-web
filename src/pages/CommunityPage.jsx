import React, { useState } from 'react'
import img1 from "../assets/communitypage/1.png"
// slick images
import img2 from "../assets/communitypage/2.png"
// slick images end
import bg from "../assets/communitypage/bg.png"
import AsyncSelect from 'react-select/async';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CommunityPage = () => {

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows:false,
    };

    const [Country, setCountry] = useState('');

    const loadCountries = async (inputValue) => {
        if (inputValue) {
            try {
                const response = await fetch(`https://restcountries.com/v3.1/name/${inputValue}`);
                if (!response.ok) {
                    throw new Error(`Failed to fetch data: ${response.statusText}`);
                }
                const data = await response.json();

                // Map the API response to an array of country options
                const countryOptions = data.map((country) => ({
                    label: country.name.common,
                    value: country.cca2,
                }));

                return countryOptions;
            } catch (error) {
                console.error('Error loading countries:', error);
                return [];
            }
        }
    };
    return (
        <>
            <div className="main w-full">
                <div
                    className="h-[622px] flex flex-col relative"
                    style={{
                        background: `url(${img1}) lightgray 50% / cover no-repeat`,
                    }}
                >
                    <div
                        className="headings flex z-[99] flex-col justify-center items-center gap-5 m-auto w-[300px] lg:w-[700px]"
                        style={{ position: 'relative' }}
                    >
                        <h1 className="text-4xl font-bold text-center text-white">
                            Together we can empower lives and ignite change
                        </h1>
                        <span className="text-white text-center">
                            Join us in making a lasting impact. At Ecocentury Energy, we are committed to creating a meaningful impact beyond our core mission. Our philanthropic endeavors extend globally, reaching out to countries and communities in need. Together, we can empower lives and ignite change.
                        </span>
                    </div>
                    <div
                        className="absolute inset-0 bg-black opacity-50 z-0"
                    ></div>
                </div>
                <div className="min-h-screen flex flex-col" style={{ backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                    <h3 className='mb-10 mt-10 text-center font-bold text-3xl'>Supporting Communities Globally</h3>
                    {/* <div className="h-[622px] flex flex-col relative"
                        style={{
                            background: `url(${img2}) lightgray 50% / cover no-repeat`,
                        }}>

                    </div> */}
                    <div className="h-[622px] flex flex-col relative">
                        <Slider {...settings}>
                            <div className="h-[622px] flex flex-col relative">
                                <img src={img1} alt="Slide 1" className="w-full h-full object-cover" />
                            </div>
                            <div className="h-[622px] flex flex-col relative">
                                <img src={img2} alt="Slide 2" className="w-full h-full object-cover" />
                            </div>
                            <div className="h-[622px] flex flex-col relative">
                                <img src={img1} alt="Slide 3" className="w-full h-full object-cover" />
                            </div>
                        </Slider>
                    </div>
                    <div className='w-full flex flex-col gap-7 justify-center items-center'>
                        <h3 className='font-bold text-center mt-[20px] text-2xl'>Brazil</h3>
                        <p className='text-center w-[300px] xl:w-[590px]'>In Brazil, we found hope in the smiles of children who inspired us with their dreams. Together, we're creating brighter futures</p>
                        <Link to="/signup"><button className='mb-[30px] bg-[#059C4B] w-[350px] xl:w-[500px] h-[51px] md:text-normal text-xs sm:text-small text-white'>
                            Join us in our journey of compassion and change in Brazil
                        </button></Link>
                    </div>
                    <div className='w-full flex flex-col gap-7 justify-center items-center'>
                        <h3 className='font-bold text-center mt-[20px] text-1xl'>Empower Lives Through Your Donation Today - Bring Smiles to the Less Privileged</h3>
                        <p className='text-center w-[300px] xl:w-[800px]'>Make a difference with us. You have the power to contribute to our global charity efforts. Choose to donate to specific countries or select unique charity and non-profit organizations from our list. Every contribution you make supports impactful projects worldwide.</p>
                    </div>
                    <div className='w-full flex flex-col md:flex-row gap-7 mt-[40px] justify-center items-center'>
                        <div className='mb-[10px] md:mb-[30px]'>
                            <AsyncSelect
                                name="Country"
                                id="Country"
                                cacheOptions
                                defaultOptions
                                placeholder="Select a Country to Donate"
                                loadOptions={loadCountries}
                                onChange={(selectedOption) => {
                                    setCountry(selectedOption?.value || '');
                                }}
                                value={Country}
                            />
                            {Country && <p className='text-xs text-center'>Country: {Country}</p>}
                            <p className='text-xs text-center'>(Your support helps us continue our mission in this region)</p>
                        </div>
                        <div className='mb-[30px]'>
                            <button className=' bg-[#00A4D4] w-[350px] xl:w-[300px] h-[51px] md:text-normal text-xs sm:text-small text-white'>
                                Select a cause to donate to
                            </button>
                            <p className='text-xs text-center'>Donate to a Unique Cause</p>
                        </div>
                    </div>
                    <h3 className='mb-[30px] font-bold text-center mt-[20px] text-1xl'>Together, we can make the world a better place. Join us in empowering lives and igniting change today.</h3>
                </div>
            </div>
        </>
    )
}

export default CommunityPage