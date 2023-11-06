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
import minus from "../assets/homepage/minus.png"
import mobileFb from "../assets/homepage/mobile-fb.png"
import mobileInsta from "../assets/homepage/mobile-insta.png"
import mobileLinked from "../assets/homepage/mobile-linkedin.png"
import mobileTele from "../assets/homepage/mobile-telegram.png"
import mobileTwitter from "../assets/homepage/mobile-twitter.png"
import FeedbackSlider from "../components/FeedbackSlider"
import ContactPopUp from "../components/ContactPopUp"



const HomePage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(-1);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const openContactForm = () => {
    setIsContactFormOpen(true);
  };

  const closeContactForm = () => {
    setIsContactFormOpen(false);
  };

  const toggleAnswer = (index) => {
    if (index === openFaqIndex) {
      // Clicking on the currently open FAQ should close it
      setOpenFaqIndex(-1);
    } else {
      // Clicking on a different FAQ should open it
      setOpenFaqIndex(index);
    }
  };



  const faqs = [
    {
      question: "What Sets Ecocentury Energy Apart in the Industry?",
      answer: (
        <>
          Our six years of experience in the energy industry, contributing both locally and globally to economic growth, speaks volumes about our unwavering commitment to sustainability, innovation, and a brighter future.<br></br>
          At Ecocentury Energy, we are deeply dedicated to a sustainable future. We firmly believe that accessible, affordable, and eco-friendly energy forms the bedrock of global progress. To realize this vision, we spare no effort in investing in cutting-edge technology and forging partnerships with communities worldwide. Together, we are crafting a world powered by superior energy solutions, with a focus on; Maximizing efficiency, Enhancing energy access, Mitigating emissions, Fostering sustainability, powering lives and giving our Investments a mission

        </>
      ),
    },
    {

      question: "How Do I Get Started with My First Investment?",
      answer: (
        <>
          To get started with your first investment through EcocenturyEnergy, first you'll need to become a member and to set up your EcocenturyEnergy account. To do so, click the <Link to="/signup" className=" font-bold underline">Sign Up</Link> button on the homepage. After completing your investor profile and paying your membership fee you'll be able to participate in an investment portfolio. <br></br> When you are ready to make your first investment, log in to your EcocenturyEnergy account, visit the portfolio page, and then click the "Invest" button. Following that, choose your desired allocation amount by entering your desired amount for a particular portfolio and then click "Invest" to confirm your investment, your investment will be initiated, and you'll be on your way to participating in sustainable and profitable investments with EcocenturyEnergy.
        </>
      ),
    },
    {
      question: "How Are EcocenturyEnergy Returns Generated?",
      answer: (
        <>
          At EcocenturyEnergy, our commitment to sustainability and innovation drives the way we generate returns for our investors. Here's an overview of our approach:
          <br></br>
          • Strategic Investments: We invest funds through EcocenturyEnergy and EcocenturyEnergy Funds by carefully analyzing cutting-edge technologies, reinvesting in ourselves, and partnering with communities worldwide. We also invest in well-performing companies and startups with exceptional potential. Many of the startups we support are aligned with our mission, and are invested in us, creating a mutually beneficial ecosystem that generates revenue and purpose.
          <br></br>
          • Project-Based Returns: Our returns are generated through investments in projects that promote sustainability and benefit local communities globally. These projects not only drive financial returns but also contribute to our mission of empowering lives and creating a sustainable environment.
          <br></br>
          • Member Support: We receive support and voluntary contributions from our members who share our vision and are passionate about supporting our causes and projects. These contributions play a vital role in funding our initiatives and making a positive impact on our projects.
          <br></br>
          • Leveraging Marketplaces: Our marketplaces and businesses contribute to generating returns. We strive to create an ecosystem where businesses grow, thrive, and benefit from being part of the Ecocentury community. Fees and charges associated with our services are designed to ensure efficient and cost-effective operations.
          <br></br>
          • Transparency and Sustainability: We are dedicated to transparency and sustainability in our investment strategies. Our aim is to maximize returns for our investors while fostering a sustainable world. We continuously refine our strategies to achieve these goals and deliver the best possible returns.
          <br></br>
          <br></br>
          At EcocenturyEnergy, we believe in the power of strategic investments, purpose-driven projects, member support, and transparent practices to generate returns that benefit both our investors and the planet. We remain committed to creating a sustainable and prosperous future for all.
        </>
      ),
    },
    {

      question: "When and How Will I Receive Returns from My Investments?",
      answer: (
        <>
          Returns from investments are typically paid out monthly. You can initiate a withdrawal from the 28th to the 31st of every month. The amount of your returns depends on your investment allocation (annual). You can track all payments and distributions in our platform. You have the flexibility to withdraw monthly or to reinvest to reinvest annually.
          <br></br>
          We process withdrawals monthly, typically from the 28th to the 31st of each month.You have the flexibility to initiate withdrawals on any of these dates, with all withdrawals completed within this timeframe.
          <br></br>
          The annual distribution size varies based on your investment allocation.
          <br></br>
          For transparency, you can conveniently track all payments and withdrawals through our platform.
          <br></br>
          You can transfer affiliate compensations to your balance at your convenience. You can choose to withdraw them on the same dates as interest withdrawals or reinvest in any portfolio up to the investment threshold.
          <br></br>
          Our retirement investments are geared towards long-term planning. A minimum fixed term of five years is required. Over this period, you earn an annual interest rate of x3.5 on your investment.
          <br></br>
          Withdrawals from retirement investments can be made after the minimum five-year term, providing a solid foundation for your retirement savings.
        </>
      ),
    },
    {

      question: "What Types of Partnerships Does Ecocentury Offer?",
      answer: (
        <>
          We offer two types of partnerships; Individual Partnership and business partnership, whether you're an individual looking to make a meaningful impact or a business aiming for growth while aligning with our mission. You can become a Trailblazer or a Trailblazer Omega to propel your business to greater heights and enjoy a range of incentives .
          <br></br>
          <br></br>
          For detailed information about partnership tiers, and comprehensive benefits, visit our dedicated Partners page to begin your journey with us and make a positive impact
        </>
      ),
    },
    {

      question: "What Sustainable Initiatives Does Ecocentury Support?",
      answer: (
        <>
          At Ecocentury, we are committed to fostering a sustainable future for all. We actively support a range of initiatives dedicated to environmental conservation, clean energy, and community empowerment.
          <br></br>
          <br></br>
          By supporting these sustainable initiatives, Ecocentury is not only making a difference but also inviting our members and partners to join us in shaping a world powered by better energy solutions. Your support and collaboration are vital as we work towards a more sustainable and prosperous future together.
        </>
      ),
    },


    // Add more FAQs here
  ];

  return (
    <>
      {/* section */}
      <div className=" home-bg1 w-full min-h-[100vh] lg:min-h-[100vh] flex justify-center lg:px-0 px-3 lg:py-0 py-20 items-center relative text-white text-lg lg:text-2xl">
        <div className=" flex flex-col gap-5 lg:gap-8 items-center w-full max-w-[520px] -mt-20 lg:-mt-6 text-center z-10">
          <h2 className=" text-3xl lg:text-[44px] lg:leading-[54px] font-bold">Energizing Today, Empowering Tomorrow!</h2>
          <p>Join us today to revolutionize the world`s ecosystem by bringing sustainable and accessible energy to all. Together, we empower people to live their best lives!</p>
          <Link to="/signup" className=" text-xl lg:text-2xl py-4 px-12 rounded-[36px] bg-green-secondary font-semibold w-fit">Join Us Now</Link>
        </div>
        <img src={img1a} className=" w-[70%] lg:w-auto absolute bottom-[10px] lg:bottom-[unset] left-0" />
        <img src={img1b} className=" w-1/2 lg:w-auto absolute bottom-0 lg:bottom-[unset] right-[14px]" />
      </div>
      {/* section */}
      <div className=" home-bg2 w-full min-h-[680px] lg:min-h-[700px] flex justify-start items-start lg:py-0 py-20 lg:items-center relative text-black text-xl lg:text-2xl px-5 lg:px-32">
        <div className=" flex flex-col gap-8 items-start w-full max-w-[614px] z-10">
          <p>While the need for energy is universal, our approach is distinctive. At Ecocentury Energy, we're not just meeting energy needs; we're transforming the energy landscape. We're not only reducing emissions; we're pioneering the path to a net-zero future. Our relentless pursuit of sustainable solutions ensures a cleaner, healthier planet for generations to come</p>
          <Link to="/whatwedo" className=" text-xl lg:text-3xl py-4 px-12 rounded-[36px]  bg-green-secondary font-semibold w-fit text-white">Learn More</Link>
        </div>
        <img src={img2} className=" w-[50%] lg:w-auto absolute bottom-3 right-3 lg:bottom-[unset] lg:right-[110px]" />
      </div>
      {/* section */}
      <div className=" home-bg3 w-full min-h-[750px] px-5 lg:px-32 pb-20 pt-12 relative text-black text-lg lg:text-2xl">
        <img src={img3} className=" lg:opacity-100 opacity-60 absolute top-[30px] left-1/2 transform -translate-x-1/2 z-0" />
        <div className=" flex lg:flex-row flex-col lg:gap-0 gap-8 justify-between items-center z-10">
          <div className=" w-full lg:max-w-[420px] flex flex-col gap-4 lg:gap-7 z-10">
            <h3 className=" text-[24px] lg:text-[32px] font-bold">A Sustainable World For All</h3>
            <p>At Ecocentury Energy, our purpose is profound - to nurture a thriving environment for every being on this planet. We are committed to energizing nature and ensuring that our world thrives in its finest form. We aspire to create a renowned lifestyle that transcends ordinary living.</p>
          </div>
          <div className=" w-full lg:max-w-[420px] flex flex-col gap-4 lg:gap-7 z-10">
            <h3 className=" text-[24px] lg:text-[32px] font-bold">More Than a Movement, It's a Revolution</h3>
            <p>What we're building isn't just a movement; it's a revolutionary change for our planet and its inhabitants. Together, we are rewriting the future of our world, one sustainable choice at a time. Are you ready to be a part of this transformative journey? Join us today to revolutionize the world and embrace a lifestyle that's renowned for its commitment to nature and sustainability.</p>
          </div>
        </div>
        <div className=" flex flex-col items-center gap-4 lg:gap-8 px-3 lg:px-10 text-center mt-8 lg:mt-16">
          <p>Ecocentury Energy is where purpose meets passion, and commitment meets change. Join us in energizing today and empowering tomorrow!</p>
          <Link to="/signup" className=" text-xl lg:text-3xl py-4 px-12 rounded-[36px] bg-green-secondary font-semibold w-fit text-white">Join The Revolution</Link>
        </div>

      </div>
      {/* section */}
      <div className=" home-bg4 w-full min-h-[1640px] px-5 lg:px-28 pt-20 pb-16 relative text-black text-lg lg:text-2xl">
        <div className=" mt-8 mb-60 lg:mb-24 relative">
          <img src={img4} className=" absolute right-0 bottom-[-240px] lg:bottom-[unset] lg:top-[-40px] z-0" />
          <div className=" w-full max-w-[440px] flex flex-col gap-3 lg:gap-7 z-10">
            <h3 className=" text-[32px] font-bold z-10">Our Commitment</h3>
            <p className=" z-10">At Ecocentury Energy, our purpose is profound - to nurture a thriving environment for every being on this planet. We are committed to energizing nature and ensuring that our world thrives in its finest form. We aspire to create a renowned lifestyle that transcends ordinary living.</p>
          </div>
        </div>
        <div className=" grid grid-cols-1 lg:grid-cols-3 space-y-6 lg:space-y-0 lg:space-x-8  text-center">
          <div className=" flex flex-col justify-start items-center gap-5">
            <img src={efficiency} className=" w-[70px] h-[70px]" />
            <h3 className=" font-semibold">Maximizing Efficiency</h3>
            <p className=" text-[18px]">Efficiency is at the core of our operations. From developing innovative solutions that maximize the energy potential of every resource, to optimizing energy-intensive processes, we strive to make every unit of energy work harder, reducing waste and resource consumption</p>
          </div>
          <div className=" flex flex-col justify-start items-center gap-5">
            <img src={energy} className=" w-[70px] h-[70px]" />
            <h3 className=" font-semibold">Enhancing Energy Access</h3>
            <p className=" text-[18px]">We are dedicated to making energy more accessible and affordable for all, ensuring that more people can enjoy its benefits. Through continuous innovation, we aim to bridge the energy divide</p>
          </div>
          <div className=" flex flex-col justify-start items-center  gap-5">
            <img src={plant} className=" w-[70px] h-[70px]" />
            <h3 className=" font-semibold">Mitigating Emissions</h3>
            <p className=" text-[18px]">At Ecocentury Energy, we understand our responsibility in managing climate-change risks. We are committed to reducing our carbon footprint and minimizing emissions to create a sustainable, low-impact future for our planet.</p>
          </div>
          <div className=" flex flex-col justify-start items-center gap-5">
            <img src={earth} className=" w-[70px] h-[70px]" />
            <h3 className=" font-semibold">Fostering Sustainability</h3>
            <p className=" text-[18px]">From the local communities to the global economy we actively support long-term economic growth. Through community engagement and empowerment, we’re helping to create a more resilient, sustainable world</p>
          </div>
          <div className=" flex flex-col justify-start items-center  gap-5">
            <img src={hands} className=" w-[70px] h-[70px]" />
            <h3 className=" font-semibold">Promoting Conservation</h3>
            <p className=" text-[18px]">Our dedication to conservation ensures that we safeguard the environment for future generations</p>
          </div>
          <div className=" flex flex-col justify-start items-center gap-5">
            <img src={money} className=" w-[70px] h-[70px]" />
            <h3 className=" font-semibold">Invest with purpose.</h3>
            <p className=" text-[18px]">Our investment opportunities provide a sustainable return for you, while also contributing to a healthier planet. Together, we can make a difference</p>
          </div>
        </div>
        <div className=" flex lg:flex-row flex-col items-center mt-10 lg:mt-28">
          <img className=" lg:w-1/2" src={img5} />
          <div className=" lg:w-1/2">
            {/* <h2 className=" text-[30px] lg:text-[44px] font-bold mb-2 lg:mb-5">Our Commitment</h2> */}
            <div className=" flex flex-col gap-4">
              <p>At Ecocentury Energy, we believe that knowledge is the catalyst for change. Our commitment to sustainability extends to educating individuals and communities about the importance of responsible energy use. Explore Our Educational Resources: </p>
              <Link to="/empower"><p className=" font-bold hover:underline cursor-pointer">• Learn about the fundamentals of clean energy. </p></Link>
              <Link to="/empower"><p className=" font-bold hover:underline cursor-pointer">• Discover tips for reducing your energy consumption.</p></Link>
              <Link to="/empower"><p className=" font-bold hover:underline cursor-pointer">• Stay updated on the latest advancements in the energy industry.</p></Link>
              <p>Access resources for educators to inspire the next generation of eco-conscious leaders, Join Us in Learning and Leading:</p>
              <p>Ready to expand your energy knowledge? Join our community of learners, and together, we can pave the way for a more sustainable future. </p>
              <p className=" font-bold">Join Us In the Journey to a Brighter Future!</p>
              <Link to="/signup" className=" mt-0 lg:mt-5 text-xl lg:text-3xl py-4 px-12 rounded-[36px] bg-green-secondary font-semibold w-fit text-white">Join Us</Link>
            </div>
          </div>
        </div>
      </div>
      {/* section */}
      <div className=" home-bg5 lg:py-0 py-10 lg:px-0 px-5 w-full min-h-[750px] flex justify-center items-center relative text-white text-lg lg:text-2xl">
        <div className=" flex flex-col gap-8 items-center w-full max-w-[820px] lg:-mt-6 text-center">
          <h2 className=" text-[26px] leading-[36px] md:leading-[60px] lg:text-[44px] font-bold">Partner with Us: Become a Trailblazers or a Trailblazers Omega?</h2>
          <p className="w-full max-w-[620px]">At Ecocentury Energy, we believe that the journey to a sustainable future is best travelled together. Our partnership opportunities are designed to welcome both individuals and businesses into our vibrant community.<span className=" block mt-4">Become a partner to enjoy a range of incentives and impact your business today!</span></p>
          <Link to="/partners" className=" text-xl lg:text-3xl py-4 px-12 rounded-[36px] bg-green-secondary font-semibold w-fit mt-0 lg:mt-5">Partner With Us</Link>
        </div>
      </div>
      {/* section */}
      <div className=" home-bg6 w-full min-h-[800px] lg:min-h-[850px] px-5 lg:px-28 pt-20 pb-16 flex flex-col gap-10 items-center relative text-white text-lg lg:text-2xl">
        <div className=" w-full max-w-[780px] text-center flex flex-col items-center gap-6">
          <h2 className=" text-[30px] lg:text-[40px] font-bold">Why Shop with Us?</h2>
          <p>Because we believe that everyone should have access to sustainable products at an affordable price.</p>
        </div>
        <div className=" grid grid-cols-1 lg:grid-cols-3 space-x-0 lg:space-x-8 lg:space-y-0 space-y-6 text-center">
          <div className=" flex flex-col justify-start items-center gap-5">
            <img src={tag} className=" w-[70px] h-[70px]" />
            <h3 className=" font-semibold">Unbeatable Prices</h3>
            <p className=" text-[18px]">Enjoy competitive pricing that ensures you get the best value for your money.</p>
          </div>
          <div className=" flex flex-col justify-start items-center gap-5">
            <img src={sale} className=" w-[70px] h-[70px]" />
            <h3 className=" font-semibold">Endless Discounts</h3>
            <p className=" text-[18px]">Save even more with discounts as low as 2% off. The amount of discount you can receive is limitless, allowing you to shop sustainably without breaking the bank.</p>
          </div>
          <div className=" flex flex-col justify-start items-center  gap-5">
            <img src={coupon} className=" w-[70px] h-[70px]" />
            <h3 className=" font-semibold">Exclusive Promo Codes</h3>
            <p className=" text-[18px]">Elevate your shopping experience with our exclusive promo codes. Unlock additional savings and special offers as you embark on your eco-conscious journey.</p>
          </div>
        </div>
        <div className=" flex flex-col gap-8 items-center w-full text-center">
          <p className="w-full max-w-[820px]">Start Shopping Today! Browse our store now to discover a wide range of sustainable products that align with your values and lifestyle.</p>
          <Link to="/store" className=" text-xl lg:text-3xl py-4 px-12 rounded-[36px] bg-green-secondary font-semibold w-fit lg:mt-5">Shop With Us</Link>
        </div>
      </div>
      {/* section */}
      <div className=" home-bg7 w-full min-h-[820px] lg:min-h-[890px] px-5 lg:px-28 pt-10 lg:pt-20 pb-10 lg:pb-16 flex flex-col gap-6 lg:gap-10 items-start relative text-white text-2xl">
        <h2 className=" text-[24px] lg:text-[40px] font-bold text-[#12664F] mx-auto">Frequently Asked Questions</h2>
        <div className="item2 flex flex-col justify-center items-center ">

          {/* <!-- Map over your FAQs --> */}
          {faqs.map((faq, index) => (
            <div className="element mb-4 lg:mb-1 text-base bg-white text-black p-3 w-[100%] lg:w-[575px]" key={index}>
              <div
                className="table-question cursor-pointer"
                onClick={() => toggleAnswer(index)}
              >
                <div className="flex items-center justify-between">
                  {faq.question}
                  <span><img className='inline-flex mr-2' src={index === openFaqIndex ? minus : plus} alt="" /></span>
                </div>
              </div>
              <Transition
                show={index === openFaqIndex} // Show only if the index matches the openFaqIndex
                enter="transition-all ease-in-out duration-500 delay-[200ms]"
                enterFrom="opacity-0 translate-y-6"
                enterTo="opacity-100 translate-y-0"
                leave="transition-all ease-in-out duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className={`table-answer mt-2 mb-2 mr-2 ml-2`}>
                  {faq.answer}
                </div>
              </Transition>
            </div>
          ))}


        </div>
        <div className=" gap-5 lg:gap-14 flex lg:flex-row flex-col items-center">
          {isContactFormOpen && (
            <ContactPopUp isOpen={isContactFormOpen} onClose={closeContactForm} />
          )}
          <h2 className=" text-[24px] lg:text-[32px] font-bold text-black">Frequently Asked Questions</h2>
          <Link to="#" onClick={openContactForm} className=" text-xl lg:text-3xl py-4 px-12 rounded-[36px] bg-green-secondary font-semibold w-fit">Send us an Email</Link>
        </div>
      </div>
      {/* section */}
      <div className=" w-full px-5 lg:px-52 py-10 lg:py-20 flex flex-col gap-6 lg:gap-12 items-center">
        <div className=" w-full flex flex-col gap-7 lg:gap-14 items-center">
          <h2 className=" text-[30px] lg:text-[40px] text-green-secondary mx-auto">Investor Feedback</h2>
          <FeedbackSlider />
          {/* <div className=" w-full flex lg:flex-row flex-col lg:gap-0 gap-8 items-center lg:items-start justify-between">
            <div className=" lg:pb-0 pb-6 border-b lg:border-b-0 border-gray-300 flex flex-col items-center text-center lg:text-start lg:items-start gap-5 w-full max-w-[455px] text-xl lg:text-[28px] text-black">
              <p className=" text-[24px] lg:text-[32px] font-semibold">“ Investing with Impact ”</p>
              <p className="">“ Ecocentury Energy isn't just about returns, it's about investing with impact. I've found a partner that cares about the planet!! and my portfolio!!! ”</p>
              <div className="  mt-1 lg:mt-2">
                <p className=" font-semibold mb-1 lg:mb-3">Nate Springfield</p>
                <p className=" text-base lg:text-xl">Ecocentury Energy Investor</p>
              </div>
            </div>
            <div className=" flex flex-col items-center text-center lg:text-start lg:items-start gap-5 w-full max-w-[455px] text-xl lg:text-[28px] text-black">
              <p className=" text-[24px] lg:text-[32px] font-semibold">“ Investing with Impact ”</p>
              <p className="">“ Ecocentury Energy isn't just about returns, it's about investing with impact. I've found a partner that cares about the planet!! and my portfolio!!! ”</p>
              <div className="  mt-1 lg:mt-2">
                <p className=" font-semibold mb-1 lg:mb-3">Nate Springfield</p>
                <p className=" text-base lg:text-xl">Ecocentury Energy Investor</p>
              </div>
            </div>
          </div> */}
          <Link to="/signin" className=" text-xl lg:text-2xl py-4 px-12 rounded-[36px] bg-green-secondary text-white font-semibold w-fit mx-auto">Add a Feedback</Link>

        </div>
        <div className=" w-full flex flex-col gap-5 lg:gap-8 items-center mt-10 lg:mt-14">
          <h2 className=" text-[30px] lg:text-[40px] text-green-secondary mx-auto">Latest News</h2>
          <p className=" w-full max-w-[1020px] text-xl lg:text-[28px] ">Want to stay in the loop about all the latest happenings at Ecocentury Energy? Follow us on our social media channels for exclusive updates, news, and promotions. You can find us on Instagram, Facebook, Twitter, Telegram, and LinkedIn. Don't miss out!</p>
          <div className=" flex items-center justify-center gap-6 lg:gap-28 flex-wrap">
            <div className=" w-full max-w-[256px] flex flex-col items-center justify-center text-center gap-1 lg:gap-8 text-xl text-green-secondary">
              <img className="w-[100px]" src={mobileInsta} />
              <p>Discover our eco-journey on Instagram</p>
            </div>
            <div className=" w-full max-w-[256px] flex flex-col items-center justify-center text-center gap-1 lg:gap-8 text-xl text-green-secondary">
              <img className="w-[100px]" src={mobileFb} />
              <p>Join our green revolution on Facebook</p>
            </div>
            <div className=" w-full max-w-[256px] flex flex-col items-center justify-center text-center gap-1 lg:gap-8 text-xl text-green-secondary">
              <img className="w-[100px]" src={mobileTwitter} />
              <p>Tweet along with us for sustainability updates on</p>
            </div>
            <div className=" w-full max-w-[256px] flex flex-col items-center justify-center text-center gap-1 lg:gap-8 text-xl text-green-secondary">
              <img className="w-[100px]" src={mobileTele} />
              <p>Stay in the loop with our Telegram channel</p>
            </div>
            <div className=" w-full max-w-[256px] flex flex-col items-center justify-center text-center gap-1 lg:gap-8 text-xl text-green-secondary">
              <img className="w-[100px]" src={mobileLinked} />
              <p>Connect with us professionally on LinkedIn</p>
            </div>
          </div>
          <div className=" w-full flex flex-col items-start gap-6 mt-10">
            <h2 className=" text-[30px] lg:text-[40px] text-green-secondary">Important Disclosures</h2>
            <p className=" text-lg lg:text-xl">Investing involves risk, including lose of principal. Past performance does not necessarily guarantee or indicate future performance. The information contained herein is provided for general informational purposes only and is not intended as investment advice. Any historical returns, expected returns, or probability projections may not reflect actual future performance. While the data we use from third parties is believed to be reliable, we cannot ensure the accuracy or completeness of data provided by investors or other third parties.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage