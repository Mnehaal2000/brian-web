import React, { useState, useEffect } from 'react';
import { db } from "../../firebase"
import { addDoc, collection } from 'firebase/firestore';
import { ToastContainer,toast } from 'react-toastify';

const PartnerBus = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [accountDetails, setAccountDetails] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [facebook, setFacebook] = useState('');
  const [instagram, setInstagram] = useState('');
  const [twitter, setTwitter] = useState('');
  const [others, setOthers] = useState('');
  const [amountInUSD, setamountInUSD] = useState('');

  const [organizationName, setOrganizationName] = useState('');
  const [address, setAddress] = useState('');
  const [website, setWebsite] = useState('');
  const [orgEmail, setOrgEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [socialMedias, setSocialMedias] = useState('');
  const [industry, setIndustry] = useState('');
  const [q1, setq1] = useState('');
  const [q2, setq2] = useState('');
  const [q3, setq3] = useState('');



  const submithandler = async () => {
    try {
      const busData = {
        status:'pending',
        partner_type: "business",
        firstName,
        lastName,
        email,
        paymentMethod,
        accountDetails,
        referralCode,
        socialMedia: {
          facebook,
          instagram,
          twitter,
          others,
        },
        amountInUSD,
        organizationName,
        address,
        website,
        orgEmail,
        phoneNumber,
        socialMedias,
        industry,
        q1,
        q2,
        q3
      };

      addDoc(collection(db, 'partners'), busData)
        .then(() => {
          toast.success('🦄 Business Partner Request Submitted!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        })
        .catch((error) => {
          console.error('Error adding business to Firebase: ', error);
        });
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <>
      <div className="main w-[1000px] lg:w-full flex mb-[50px] flex-col justify-center items-center">
        <div className='title w-full mt-[40px] flex flex-row justify-start'>
          <p className='text-white text-2xl font-bold ml-[40px]'>Become a Business Partner</p>
        </div>
        <div className='w-[1000px] mt-[40px]'>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="firstname" className="text-white">First Name</label>
              <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" id="firstname" className="bg-transparent p-5 mt-[10px] mb-[30px] w-[500px] h-[70px] border border-white outline-none rounded-md text-lg text-white" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastname" className="text-white">Last Name</label>
              <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" id="lastname" className="bg-transparent p-5 mt-[10px] mb-[30px] w-[500px] h-[70px] border border-white outline-none rounded-md text-lg text-white" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-white">Email Address</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" id="email" className="bg-transparent p-5 mt-[10px] mb-[30px] w-[500px] h-[70px] border border-white outline-none rounded-md text-lg text-white" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="payment" className="text-white">Payment Method</label>
              <input type="text" id="payment" className="bg-transparent p-5 mt-[10px] mb-[30px] w-[500px] h-[70px] border border-white outline-none rounded-md text-lg text-white" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="account" className="text-white">Account Details</label>
              <input value={accountDetails} onChange={(e) => setAccountDetails(e.target.value)} type="text" id="account" className="bg-transparent p-5 mt-[10px] mb-[30px] w-[500px] h-[70px] border border-white outline-none rounded-md text-lg text-white" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone" className="text-white">Referral Code</label>
              <input value={referralCode} onChange={(e) => setReferralCode(e.target.value)} type="text" id="phone" className="bg-transparent p-5 mt-[10px] mb-[30px] w-[500px] h-[70px] border border-white outline-none rounded-md text-lg text-white" />
            </div>
          </div>
        </div>
        <div className='title w-full mt-[40px] flex flex-row justify-start'>
          <p className='text-white text-2xl font-bold ml-[40px]'>Social Media</p>
        </div>
        <div className='w-[1000px] mt-[40px]'>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="facebook" className="text-white">Facebook</label>
              <input value={facebook} onChange={(e) => setFacebook(e.target.value)} type="text" id="facebook" className="bg-transparent p-5 mt-[10px] mb-[30px] w-[500px] h-[70px] border border-white outline-none rounded-md text-lg text-white" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="instagram" className="text-white">Instagram</label>
              <input value={instagram} onChange={(e) => setInstagram(e.target.value)} type="text" id="instagram" className="bg-transparent p-5 mt-[10px] mb-[30px] w-[500px] h-[70px] border border-white outline-none rounded-md text-lg text-white" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="twitter" className="text-white">Twitter</label>
              <input value={twitter} onChange={(e) => setTwitter(e.target.value)} type="text" id="twitter" className="bg-transparent p-5 mt-[10px] mb-[30px] w-[500px] h-[70px] border border-white outline-none rounded-md text-lg text-white" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="others" className="text-white">Others</label>
              <input value={others} onChange={(e) => setOthers(e.target.value)} type="text" id="others" className="bg-transparent p-5 mt-[10px] mb-[30px] w-[500px] h-[70px] border border-white outline-none rounded-md text-lg text-white" />
            </div>
          </div>
        </div>
        <div className='title w-full mt-[40px] flex flex-row justify-start'>
          <p className='text-white text-2xl font-bold ml-[40px]'>Organization Information</p>
        </div>
        <div className='w-[1000px] mt-[40px]'>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="firstname" className="text-white">Organization Name</label>
              <input
                value={organizationName}
                onChange={(e) => setOrganizationName(e.target.value)}
                type="text" id="firstname" className="bg-transparent p-5 mt-[10px] mb-[30px] w-[500px] h-[70px] border border-white outline-none rounded-md text-lg text-white" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastname" className="text-white">Address</label>
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                type="text" id="lastname" className="bg-transparent p-5 mt-[10px] mb-[30px] w-[500px] h-[70px] border border-white outline-none rounded-md text-lg text-white" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-white">Website</label>
              <input
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                type="text" id="email" className="bg-transparent p-5 mt-[10px] mb-[30px] w-[500px] h-[70px] border border-white outline-none rounded-md text-lg text-white" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="payment" className="text-white">Email</label>
              <input
                value={orgEmail}
                onChange={(e) => setOrgEmail(e.target.value)}
                type="text" id="payment" className="bg-transparent p-5 mt-[10px] mb-[30px] w-[500px] h-[70px] border border-white outline-none rounded-md text-lg text-white" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="account" className="text-white">Phone Number</label>
              <input
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                type="text" id="account" className="bg-transparent p-5 mt-[10px] mb-[30px] w-[500px] h-[70px] border border-white outline-none rounded-md text-lg text-white" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone" className="text-white">Social Medias</label>
              <input
                value={socialMedias}
                onChange={(e) => setSocialMedias(e.target.value)}
                type="text" placeholder='You can add up to 5 social medias' id="phone" className="bg-transparent p-5 mt-[10px] mb-[30px] w-[500px] h-[70px] border border-white outline-none rounded-md text-lg text-white" />
            </div>
          </div>
        </div>
        <div className='title w-full mt-[40px] flex flex-row justify-start'>
          <p className='text-white text-2xl font-bold ml-[40px]'>Select Industry</p>
        </div>
        <div className='w-[1000px] mt-[40px]'>
          <div className="grid grid-cols-2 gap-4">

            <div className="flex flex-col">
              <select
                className="bg-transparent p-5 mt-[10px] mb-[30px] w-[500px] h-[70px] border border-white outline-none rounded-md text-lg text-white"
                name="industry"
                id="industry"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
              >
                <option className='text-black' value="eco">Eco</option>
                <option className='text-black' value="solar">Solar</option>
              </select>
            </div>
            <div className="flex flex-col"></div>


            <div className="flex flex-col">
              <label htmlFor="twitter" className="text-white">Tell us more about your business</label>
              <input
                value={q1}
                onChange={(e) => setq1(e.target.value)}
                type="text" id="twitter" className="bg-transparent p-5 mt-[10px] mb-[30px] w-[500px] h-[70px] border border-white outline-none rounded-md text-lg text-white" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="others" className="text-white">What do you want to get the most from this partnership ?</label>
              <input
                value={q2}
                onChange={(e) => setq2(e.target.value)}
                type="text" id="others" className="bg-transparent p-5 mt-[10px] mb-[30px] w-[500px] h-[70px] border border-white outline-none rounded-md text-lg text-white" />
            </div>



            <div className="flex w-[1000px] flex-col">
              <label htmlFor="others" className="text-white">How did you hear about us? Through a friend or sponsor? (Attach Sponsor ID) optional</label>
              <input
                value={q3}
                onChange={(e) => setq3(e.target.value)}
                type="text" id="others" className="bg-transparent p-5 mt-[10px] mb-[30px] w-[1000px] h-[70px] border border-white outline-none rounded-md text-lg text-white" />
            </div>
            <div className="flex flex-col"></div>



            <div className="flex flex-col">
              <label className="text-white" htmlFor="payment">
                Select a Payment Method *
              </label>
              <select
                className="bg-transparent p-5 mt-[10px] mb-[30px] w-[500px] h-[70px] border border-white outline-none rounded-md text-lg text-white"
                name="payment"
                id="payment"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <option className='text-black' value="">Choose an option</option>
                <option className='text-black' value="crypto">Crypto</option>
                <option className='text-black' value="bank-transfer">Bank Transfer</option>
                <option className='text-black' value="paypal">PayPal</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-white" htmlFor="payment">
                Amount in (USD)
              </label>
              <input
                className="bg-transparent p-5 mt-[10px] mb-[30px] w-[500px] h-[70px] border border-white outline-none rounded-md text-lg text-white"
                name="payment"
                id="payment"
                type='number'
                placeholder='0.0'
                min={0}
                value={amountInUSD}
                onChange={(e) => setamountInUSD(e.target.value)}
              />
            </div>
          </div>
        </div>






        <div className="main w-[1000px] flex mb-[50px] mt-[50px] flex-col gap-[40px] justify-center items-center">
          <button
            className='w-[500px]  hover:bg-blue-600 hover:text-white transition-all duration-150 cursor-pointer rounded-lg h-[85px] font-bold text-white text-3xl'
            style={{ background: "linear-gradient(#29A9E3, #272C36)" }}
            onClick={submithandler}
          >
            Make Payment
          </button>
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <h3 className='text-white font-light text-[24px] mt-[30px]'>Your partnership is pending, you will receive an email when approved. You can now visit the membership page to view the status of your partnership.</h3>
          <h3 className='text-white font-light text-[24px]'>By partnering as a business, you enjoy a host of premium benefits, including access to our exclusive marketplace to list your products, exclusive Trailblazer Omega’s package, higher rewards, participation in exclusive deals, and much more. Embrace the future of sustainability with Trailblazers Omega.</h3>
        </div>


      </div>
    </>
  )
}

export default PartnerBus