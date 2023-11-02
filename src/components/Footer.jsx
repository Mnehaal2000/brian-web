import { Link } from "react-router-dom"
import fb from "../assets/social-logos/facebook.png"
import insta from "../assets/social-logos/insta.png"
import twitter from "../assets/social-logos/twitter.png"
import ContactPopUp from "./ContactPopUp"
import React, { useState } from "react"


const Footer = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const openContactForm = () => {
    setIsContactFormOpen(true);
  };

  const closeContactForm = () => {
    setIsContactFormOpen(false);
  };

  return (
    <>
      <div className=" bg-footer w-full flex flex-col items-center justify-center gap-8 md:gap-12">

        <div className=" bg-green-primary rounded-br-[40px] w-full max-w-[986px] md:px-0 px-4 pt-7 pb-7 md:pb-12 flex flex-col gap-8 md:gap-12 items-center justify-center text-white ">
          <div className=" w-full max-w-[730px] flex md:flex-row flex-col md:justify-between justify-center md:items-start items-center gap-4 md:gap-0">
            <div className=" flex items-start ">
              <div className=" rounded-lg text-xs py-2 px-3 text-center border border-white">Year Founded</div>
              <p className=" text-2xl md:text-4xl ml-[-6px] pt-2 pl-12  border-t border-white">2023</p>
            </div>
            <div className=" flex items-start ">
              <div className=" rounded-lg text-xs py-2 px-3 text-center border border-white">Location</div>
              <p className=" text-2xl md:text-4xl ml-[-6px] pt-2 pl-12  border-t border-white">United States</p>
            </div>
          </div>
          <div className=" w-full max-w-[730px] flex md:flex-row flex-col md:justify-between items-center gap-4 md:gap-0">
            <div>
              <h3 className=" text-base">Want to get in touch? We will reach out to you.</h3>
              <div className=" flex gap-3 mt-4">
                <input type=" email" className=" px-2 py-2 rounded border border-white text-[#B7B7B7] text-xs bg-transparent" placeholder="Your E-Mail"></input>
                <button onClick={openContactForm} className=" rounded text-center px-10 py-2 bg-[#F2AF29] ">Contact</button>
                {isContactFormOpen && (
                  <ContactPopUp isOpen={isContactFormOpen} onClose={closeContactForm} />
                )}
              </div>
            </div>
            <div className=" flex gap-7 items-center">
              <div className=" flex items-center justify-center w-[60px] h-[60px] rounded-full border border-white"><img src={fb} /></div>
              <div className=" flex items-center justify-center w-[60px] h-[60px] rounded-full border border-white"><img src={insta} /></div>
              <div className=" flex items-center justify-center w-[60px] h-[60px] rounded-full border border-white"><img src={twitter} /></div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-16  gap-y-2 md:max-h-[174px] text-black text-xs md:text-base accent-black underline mb-10">
          <Link>Our Globalization</Link>
          <Link>Our Globalization</Link>
          <Link>Our Globalization</Link>
          <Link>Our Globalization</Link>
          <Link>Our Globalization</Link>
          <Link>Our Globalization</Link>
          <Link>Our Globalization</Link>
          <Link>Our Globalization</Link>
          <Link>Our Globalization</Link>
          <Link>Our Globalization</Link>
          <Link>Our Globalization</Link>
          <Link>Our Globalization</Link>
          <Link>Our Globalization</Link>
          <Link>Our Globalization</Link>
          <Link>Our Globalization</Link>
          <Link>Our Globalization</Link>
          <Link>Our Globalization</Link>
          <Link>Our Globalization</Link>
          <Link>Our Globalization</Link>
          <Link>Our Globalization</Link>
          <Link>Our Globalization</Link>
          <Link>Our Globalization</Link>
          <Link>Our Globalization</Link>
          <Link>Our Globalization</Link>
        </div>
      </div>
    </>
  )
}

export default Footer