import { useState } from "react"
import { Link } from "react-router-dom"
import { Transition } from '@headlessui/react'
import img1a from "../assets/homepage/img-1a.png"
import img1b from "../assets/homepage/img-1b.png"
import img2 from "../assets/homepage/img-2.png"
import img3 from "../assets/homepage/img-3.png"
import img4 from "../assets/homepage/img-4.png"
import img5 from "../assets/homepage/hand-with-light-bulb-money-3d-render-set-removebg-preview 1.png"
import efficiency from "../assets/homepage/optimization 1.png"
import energy from "../assets/homepage/mobile 1.png"
import plant from "../assets/homepage/photosynthesis 1.png"
import earth from "../assets/homepage/planet-earth 1.png"
import hands from "../assets/homepage/ecology 1.png"
import money from "../assets/homepage/earning 1.png"
import tag from "../assets/homepage/tag 1.png"
import sale from "../assets/homepage/sale 1.png"
import coupon from "../assets/homepage/coupon 1.png"
import plus from "../assets/homepage/plus 5.png"


const HomePage =()=> {
  const [faqStates, setFaqStates] = useState(Array(8).fill(false)); // Adjust the size based on the number of FAQs

  // Function to toggle the FAQ item
  const toggleAnswer = (index) => {
    const newFaqStates = [...faqStates];
    newFaqStates[index] = !newFaqStates[index];
    setFaqStates(newFaqStates);
  };


  const faqs = [
    {
      question: "When should I start looking for a student room in London?",
      answer: "It's great to start looking for student accommodation in London as soon as you decide you want to go to uni here. This gives you longer to do your research and find the best-suited accommodation for you. You don't need to place a booking until your place at the university you applied for has been confirmed. We can help you with your booking and we have plenty of information on our website that tells you everything you need to know about our London locations and local amenities.",
    },
    {
      question: "When should I start looking for a student room in London?",
      answer: "It's great to start looking for student accommodation in London as soon as you decide you want to go to uni here. This gives you longer to do your research and find the best-suited accommodation for you. You don't need to place a booking until your place at the university you applied for has been confirmed. We can help you with your booking and we have plenty of information on our website that tells you everything you need to know about our London locations and local amenities.",
    },
    {
      question: "When should I start looking for a student room in London?",
      answer: "It's great to start looking for student accommodation in London as soon as you decide you want to go to uni here. This gives you longer to do your research and find the best-suited accommodation for you. You don't need to place a booking until your place at the university you applied for has been confirmed. We can help you with your booking and we have plenty of information on our website that tells you everything you need to know about our London locations and local amenities.",
    },
    {
      question: "When should I start looking for a student room in London?",
      answer: "It's great to start looking for student accommodation in London as soon as you decide you want to go to uni here. This gives you longer to do your research and find the best-suited accommodation for you. You don't need to place a booking until your place at the university you applied for has been confirmed. We can help you with your booking and we have plenty of information on our website that tells you everything you need to know about our London locations and local amenities.",
    },
    {
      question: "When should I start looking for a student room in London?",
      answer: "It's great to start looking for student accommodation in London as soon as you decide you want to go to uni here. This gives you longer to do your research and find the best-suited accommodation for you. You don't need to place a booking until your place at the university you applied for has been confirmed. We can help you with your booking and we have plenty of information on our website that tells you everything you need to know about our London locations and local amenities.",
    },
    {
      question: "When should I start looking for a student room in London?",
      answer: "It's great to start looking for student accommodation in London as soon as you decide you want to go to uni here. This gives you longer to do your research and find the best-suited accommodation for you. You don't need to place a booking until your place at the university you applied for has been confirmed. We can help you with your booking and we have plenty of information on our website that tells you everything you need to know about our London locations and local amenities.",
    },
    {
      question: "When should I start looking for a student room in London?",
      answer: "It's great to start looking for student accommodation in London as soon as you decide you want to go to uni here. This gives you longer to do your research and find the best-suited accommodation for you. You don't need to place a booking until your place at the university you applied for has been confirmed. We can help you with your booking and we have plenty of information on our website that tells you everything you need to know about our London locations and local amenities.",
    },
    {
      question: "Another FAQ question",
      answer: "Answer to another FAQ question.",
    },
    // Add more FAQs here
  ];

  return (
    <>
      <div className=" home-bg1 w-full min-h-[750px] flex justify-center items-center relative text-white text-2xl">
        <div className=" flex flex-col gap-8 items-center w-full max-w-[520px] -mt-6 text-center">
          <h2 className=" text-[44px] font-bold">Energizing Today, Empowering Tomorrow!</h2>
          <p>Join us today to revolutionize the world`s ecosystem by bringing sustainable and accessible energy to all. Together, we empower people to live their best lives!</p>
          <Link className=" text-3xl py-5 px-14 rounded bg-green-secondary font-semibold w-fit">Join Us Now</Link>
        </div>
        <img src={img1a} className=" absolute left-0" />
        <img src={img1b} className=" absolute right-0" />
      </div>
      <div className=" home-bg2 w-full min-h-[700px] flex justify-start items-center relative text-black text-2xl px-32">
        <div className=" flex flex-col gap-8 items-start w-full max-w-[614px]">
          <p>While the need for energy is universal, our approach is distinctive. At Ecocentury Energy, we're not just meeting energy needs; we're transforming the energy landscape. We're not only reducing emissions; we're pioneering the path to a net-zero future. Our relentless pursuit of sustainable solutions ensures a cleaner, healthier planet for generations to come</p>
          <Link className=" text-3xl py-5 px-14 rounded bg-green-secondary font-semibold w-fit text-white">Learn More</Link>
        </div>
        <img src={img2} className=" absolute right-[110px]" />
      </div>
      <div className=" home-bg3 w-full min-h-[1480px] px-32 pb-32 pt-12 relative text-black text-2xl">
        <img src={img3} className=" absolute top-[30px] left-1/2 transform -translate-x-1/2" />
        <div className=" flex justify-between items-center">
          <div className=" w-full max-w-[420px] flex flex-col gap-7">
            <h3 className=" text-[32px] font-bold">A Sustainable World For All</h3>
            <p>At Ecocentury Energy, our purpose is profound - to nurture a thriving environment for every being on this planet. We are committed to energizing nature and ensuring that our world thrives in its finest form. We aspire to create a renowned lifestyle that transcends ordinary living.</p>
          </div>
          <div className=" w-full max-w-[420px] flex flex-col gap-7">
            <h3 className=" text-[32px] font-bold">More Than a Movement, It's a Revolution</h3>
            <p>What we're building isn't just a movement; it's a revolutionary change for our planet and its inhabitants. Together, we are rewriting the future of our world, one sustainable choice at a time. Are you ready to be a part of this transformative journey? Join us today to revolutionize the world and embrace a lifestyle that's renowned for its commitment to nature and sustainability.</p>
          </div>
        </div>
        <div className=" flex flex-col items-center gap-8 px-10 text-center mt-16">
          <p>Ecocentury Energy is where purpose meets passion, and commitment meets change. Join us in energizing today and empowering tomorrow!</p>
          <Link className=" text-3xl py-5 px-14 rounded bg-green-secondary font-semibold w-fit text-white">Join The Revolution</Link>
        </div>
        <div className=" mt-40 pt-6 relative">
          <img src={img4} className=" absolute right-0 top-0" />
          <div className=" w-full max-w-[440px] flex flex-col gap-7">
            <h3 className=" text-[32px] font-bold">Our Commitment</h3>
            <p>At Ecocentury Energy, our purpose is profound - to nurture a thriving environment for every being on this planet. We are committed to energizing nature and ensuring that our world thrives in its finest form. We aspire to create a renowned lifestyle that transcends ordinary living.</p>
          </div>
        </div>
      </div>
      <div className=" home-bg4 w-full min-h-[1640px] px-28 pt-20 pb-16 relative text-black text-2xl">
        <div className=" grid grid-cols-3 space-x-8  text-center">
          <div className=" flex flex-col justify-start items-center gap-5">
            <img src={efficiency} className=" w-[70px] h-[70px]"/>
            <h3 className=" font-semibold">Maximizing Efficiency</h3>
            <p className=" text-[18px]">Efficiency is at the core of our operations. From developing innovative solutions that maximize the energy potential of every resource, to optimizing energy-intensive processes, we strive to make every unit of energy work harder, reducing waste and resource consumption</p>
          </div>
          <div className=" flex flex-col justify-start items-center gap-5">
            <img src={energy} className=" w-[70px] h-[70px]"/>
            <h3 className=" font-semibold">Enhancing Energy Access</h3>
            <p className=" text-[18px]">We are dedicated to making energy more accessible and affordable for all, ensuring that more people can enjoy its benefits. Through continuous innovation, we aim to bridge the energy divide</p>
          </div>
          <div className=" flex flex-col justify-start items-center  gap-5">
            <img src={plant} className=" w-[70px] h-[70px]"/>
            <h3 className=" font-semibold">Mitigating Emissions</h3>
            <p className=" text-[18px]">At Ecocentury Energy, we understand our responsibility in managing climate-change risks. We are committed to reducing our carbon footprint and minimizing emissions to create a sustainable, low-impact future for our planet.</p>
          </div>
          <div className=" flex flex-col justify-start items-center gap-5">
            <img src={earth} className=" w-[70px] h-[70px]"/>
            <h3 className=" font-semibold">Fostering Sustainability</h3>
            <p className=" text-[18px]">From the local communities to the global economy we actively support long-term economic growth. Through community engagement and empowerment, we’re helping to create a more resilient, sustainable world</p>
          </div>
          <div className=" flex flex-col justify-start items-center  gap-5">
            <img src={hands} className=" w-[70px] h-[70px]"/>
            <h3 className=" font-semibold">Promoting Conservation</h3>
            <p className=" text-[18px]">Our dedication to conservation ensures that we safeguard the environment for future generations</p>
          </div>
          <div className=" flex flex-col justify-start items-center gap-5">
            <img src={money} className=" w-[70px] h-[70px]"/>
            <h3 className=" font-semibold">Invest with purpose.</h3>
            <p className=" text-[18px]">Our investment opportunities provide a sustainable return for you, while also contributing to a healthier planet. Together, we can make a difference</p>
          </div>
        </div>
        <div className=" flex items-center mt-28">
          <img src={img5}/>
          <div>
            <h2 className=" text-[44px] font-bold mb-5">Our Commitment</h2>
            <div className=" flex flex-col gap-4">
              <p>At Ecocentury Energy, we believe that knowledge is the catalyst for change. Our commitment to sustainability extends to educating individuals and communities about the importance of responsible energy use. Explore Our Educational Resources: </p>
              <p className=" font-bold">• Learn about the fundamentals of clean energy. </p>
              <p className=" font-bold">• Discover tips for reducing your energy consumption.</p>
              <p className=" font-bold">• Stay updated on the latest advancements in the energy industry.</p>
              <p>Access resources for educators to inspire the next generation of eco-conscious leaders, Join Us in Learning and Leading:</p>
              <p>Ready to expand your energy knowledge? Join our community of learners, and together, we can pave the way for a more sustainable future. </p>
              <p className=" font-bold">Join Us In the Journey to a Brighter Future!</p>
              <Link className=" mt-5 text-3xl py-5 px-14 rounded bg-green-secondary font-semibold w-fit text-white">Join Us</Link>
            </div>
          </div>
        </div>
      </div>
      <div className=" home-bg5 w-full min-h-[750px] flex justify-center items-center relative text-white text-2xl">
        <div className=" flex flex-col gap-8 items-center w-full max-w-[820px] -mt-6 text-center">
          <h2 className=" text-[44px] font-bold">Partner with Us: Become a Trailblazers or a Trailblazers Omega?</h2>
          <p className="w-full max-w-[620px]">At Ecocentury Energy, we believe that the journey to a sustainable future is best travelled together. Our partnership opportunities are designed to welcome both individuals and businesses into our vibrant community.<span className=" block mt-4">Become a partner to enjoy a range of incentives and impact your business today!</span></p>
          <Link className=" text-3xl py-5 px-14 rounded bg-green-secondary font-semibold w-fit mt-5">Partner With Us</Link>
        </div>
      </div>
      <div className=" home-bg6 w-full min-h-[850px] px-28 pt-20 pb-16 flex flex-col gap-10 items-center relative text-white text-2xl">
        <div className=" w-full max-w-[780px] text-center flex flex-col items-center gap-6">
          <h2 className=" text-[40px] font-bold">Why Shop with Us?</h2>
          <p>Because we believe that everyone should have access to sustainable products at an affordable price.</p>
        </div>
        <div className=" grid grid-cols-3 space-x-8  text-center">
          <div className=" flex flex-col justify-start items-center gap-5">
            <img src={tag} className=" w-[70px] h-[70px]"/>
            <h3 className=" font-semibold">Unbeatable Prices</h3>
            <p className=" text-[18px]">Enjoy competitive pricing that ensures you get the best value for your money.</p>
          </div>
          <div className=" flex flex-col justify-start items-center gap-5">
            <img src={sale} className=" w-[70px] h-[70px]"/>
            <h3 className=" font-semibold">Endless Discounts</h3>
            <p className=" text-[18px]">Save even more with discounts as low as 2% off. The amount of discount you can receive is limitless, allowing you to shop sustainably without breaking the bank.</p>
          </div>
          <div className=" flex flex-col justify-start items-center  gap-5">
            <img src={coupon} className=" w-[70px] h-[70px]"/>
            <h3 className=" font-semibold">Exclusive Promo Codes</h3>
            <p className=" text-[18px]">Elevate your shopping experience with our exclusive promo codes. Unlock additional savings and special offers as you embark on your eco-conscious journey.</p>
          </div>
        </div>
        <div className=" flex flex-col gap-8 items-center w-full text-center">
          <p className="w-full max-w-[820px]">Start Shopping Today! Browse our store now to discover a wide range of sustainable products that align with your values and lifestyle.</p>
          <Link className=" text-3xl py-5 px-14 rounded bg-green-secondary font-semibold w-fit mt-5">Shop With Us</Link>
        </div>
      </div>
      <div className=" home-bg7 w-full min-h-[890px] px-28 pt-20 pb-16 flex flex-col gap-10 items-center relative text-white text-2xl">
        <h2 className=" text-[40px] font-bold text-[#12664F]">Frequently Asked Questions</h2>
        <div className="item2 flex flex-col justify-center items-center  mb-8 md:mb-20">

          {/* <!-- Map over your FAQs --> */}
          {faqs.map((faq, index) => (
            <div className="element mb-4 md:mb-1 text bg-[#7FCCF0] p-3 w-[90%] md:w-[600px]" key={index}>
              <div
                className="table-question cursor-pointer"
                onClick={() => toggleAnswer(index)}
              >
                <div className=""><span><img className='inline-flex mr-2' src={plus} alt="" /></span>{faq.question}
                </div>
              </div>
              <Transition
                show={faqStates[index]}
                enter="transition-all ease-in-out duration-500 delay-[200ms]"
                enterFrom="opacity-0 translate-y-6"
                enterTo="opacity-100 translate-y-0"
                leave="transition-all ease-in-out duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div
                  className={`table-answer mt-2 mb-2 mr-2 ml-2`}
                >
                  {faq.answer}
                </div>
              </Transition>
            </div>
          ))}

        </div>
      </div>
    </>
  )
}

export default HomePage