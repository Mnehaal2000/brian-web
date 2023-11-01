import  { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import user from "../assets/homepage/profile-user.png"

export default class FeedbackSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      cssEase: "linear",
      pauseOnHover: true

    };
    return (
      <div className=" w-full max-w-[455px] text-center">
        <Slider {...settings}>
            <div className=" lg:pb-0 pb-6 border-b lg:border-b-0 border-gray-300 flex flex-col items-center text-center  gap-5 w-full max-w-[455px] text-xl lg:text-[28px] text-black">
              <p className=" text-[24px] lg:text-[32px] font-semibold">Investing with Impact </p>
              <p className="">Ecocentury Energy isn't just about returns, it's about investing with impact. I've found a partner that cares about the planet!! and my portfolio!!! </p>
              <div className=" flex items-center gap-3  mt-1 lg:mt-2 text-start">
                <img src={user} className=" w-12 lg:w-16 h-12 lg:h-16"/>
                <div>
                  <p className=" font-semibold mb-1 lg:mb-2">Nate Springfield</p>
                  <p className=" text-base lg:text-xl">Ecocentury Energy Investor</p>
                </div>

              </div>
            </div>
            <div className=" lg:pb-0 pb-6 border-b lg:border-b-0 border-gray-300 flex flex-col items-center text-center  gap-5 w-full max-w-[455px] text-xl lg:text-[28px] text-black">
              <p className=" text-[24px] lg:text-[32px] font-semibold">Impressed by Sustainable Returns</p>
              <p className="">I invested in Ecocentury Energy seeking both financial returns and a greener future. Their consistent and sustainable returns are exceptionally impressive </p>
              <div className=" flex items-center gap-3  mt-1 lg:mt-2 text-start">
                <img src={user} className=" w-12 lg:w-16 h-12 lg:h-16"/>
                <div>
                  <p className=" font-semibold mb-1 lg:mb-2">Natalie Gillen</p>
                  <p className=" text-base lg:text-xl">Ecocentury Energy Investor</p>
                </div>

              </div>
            </div>
            <div className=" lg:pb-0 pb-6 border-b lg:border-b-0 border-gray-300 flex flex-col items-center text-center  gap-5 w-full max-w-[455px] text-xl lg:text-[28px] text-black">
              <p className=" text-[24px] lg:text-[32px] font-semibold">Energizing Investments!</p>
              <p className="">Investing with Ecocentury Energy feels like plugging into a brighter future. Their returns are not just numbers, they're sparks of innovation</p>
              <div className=" flex items-center gap-3  mt-1 lg:mt-2 text-start">
                <img src={user} className=" w-12 lg:w-16 h-12 lg:h-16"/>
                <div>
                  <p className=" font-semibold mb-1 lg:mb-2">Salina J.</p>
                  <p className=" text-base lg:text-xl">Ecocentury Energy Investor</p>
                </div>

              </div>
            </div>
        </Slider>
      </div>
    );
  }
}