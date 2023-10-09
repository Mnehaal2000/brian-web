import React from 'react'

const PartnerBus = () => {
  return (
    <>
      <div className="main w-full flex mb-[50px] flex-col justify-center items-center">
        <div className='title w-full mt-[40px] flex flex-row justify-start'>
          <p className='text-white text-2xl font-bold ml-[40px]'>Become a Business Partner</p>
        </div>
        <div className='w-[1000px] mt-[40px]'>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="firstname" className="text-white">First Name</label>
              <input type="text" id="firstname" className="bg-transparent p-5 mt-[10px] mb-[30px] w-[500px] h-[70px] border border-white outline-none rounded-md text-lg text-white" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastname" className="text-white">Last Name</label>
              <input type="text" id="lastname" className="bg-transparent p-5 mt-[10px] mb-[30px] w-[500px] h-[70px] border border-white outline-none rounded-md text-lg text-white" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-white">Email Address</label>
              <input type="text" id="email" className="bg-transparent p-5 mt-[10px] mb-[30px] w-[500px] h-[70px] border border-white outline-none rounded-md text-lg text-white" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="payment" className="text-white">Payment Method</label>
              <input type="text" id="payment" className="bg-transparent p-5 mt-[10px] mb-[30px] w-[500px] h-[70px] border border-white outline-none rounded-md text-lg text-white" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="account" className="text-white">Account Details</label>
              <input type="text" id="account" className="bg-transparent p-5 mt-[10px] mb-[30px] w-[500px] h-[70px] border border-white outline-none rounded-md text-lg text-white" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone" className="text-white">Referral Code</label>
              <input type="text" id="phone" className="bg-transparent p-5 mt-[10px] mb-[30px] w-[500px] h-[70px] border border-white outline-none rounded-md text-lg text-white" />
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
              <input type="text" id="facebook" className="bg-transparent p-5 mt-[10px] mb-[30px] w-[500px] h-[70px] border border-white outline-none rounded-md text-lg text-white" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="instagram" className="text-white">Instagram</label>
              <input type="text" id="instagram" className="bg-transparent p-5 mt-[10px] mb-[30px] w-[500px] h-[70px] border border-white outline-none rounded-md text-lg text-white" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="twitter" className="text-white">Twitter</label>
              <input type="text" id="twitter" className="bg-transparent p-5 mt-[10px] mb-[30px] w-[500px] h-[70px] border border-white outline-none rounded-md text-lg text-white" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="others" className="text-white">Others</label>
              <input type="text" id="others" className="bg-transparent p-5 mt-[10px] mb-[30px] w-[500px] h-[70px] border border-white outline-none rounded-md text-lg text-white" />
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
              <input type="text" id="firstname" className="bg-transparent p-5 mt-[10px] mb-[30px] w-[500px] h-[70px] border border-white outline-none rounded-md text-lg text-white" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastname" className="text-white">Address</label>
              <input type="text" id="lastname" className="bg-transparent p-5 mt-[10px] mb-[30px] w-[500px] h-[70px] border border-white outline-none rounded-md text-lg text-white" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-white">Website</label>
              <input type="text" id="email" className="bg-transparent p-5 mt-[10px] mb-[30px] w-[500px] h-[70px] border border-white outline-none rounded-md text-lg text-white" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="payment" className="text-white">Email</label>
              <input type="text" id="payment" className="bg-transparent p-5 mt-[10px] mb-[30px] w-[500px] h-[70px] border border-white outline-none rounded-md text-lg text-white" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="account" className="text-white">Phone Number</label>
              <input type="text" id="account" className="bg-transparent p-5 mt-[10px] mb-[30px] w-[500px] h-[70px] border border-white outline-none rounded-md text-lg text-white" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone" className="text-white">Social Medias</label>
              <input type="text" placeholder='You can add up to 5 social medias' id="phone" className="bg-transparent p-5 mt-[10px] mb-[30px] w-[500px] h-[70px] border border-white outline-none rounded-md text-lg text-white" />
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
                name="payment"
                id="payment"
              >
                <option className='text-black' value="" disabled selected hidden>Select the name of your industry</option>
                <option className='text-black' value="bank-transfer">Bank Transfer</option>
                <option className='text-black' value="paypal">PayPal</option>
              </select>
            </div>
            <div className="flex flex-col"></div>


            <div className="flex flex-col">
              <label htmlFor="twitter" className="text-white">Tell us more about your business</label>
              <input type="text" id="twitter" className="bg-transparent p-5 mt-[10px] mb-[30px] w-[500px] h-[70px] border border-white outline-none rounded-md text-lg text-white" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="others" className="text-white">What do you want to get the most from this partnership ?</label>
              <input type="text" id="others" className="bg-transparent p-5 mt-[10px] mb-[30px] w-[500px] h-[70px] border border-white outline-none rounded-md text-lg text-white" />
            </div>



            <div className="flex w-[1000px] flex-col">
              <label htmlFor="others" className="text-white">How did you hear about us? Through a friend or sponsor? (Attach Sponsor ID) optional</label>
              <input type="text" id="others" className="bg-transparent p-5 mt-[10px] mb-[30px] w-[1000px] h-[70px] border border-white outline-none rounded-md text-lg text-white" />
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
              >
                <option className='text-black' value="credit-card">Crypto</option>
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
              />
            </div>
          </div>
        </div>






        <div className="main w-[1000px] flex mb-[50px] mt-[50px] flex-col gap-[40px] justify-center items-center">
          <button
            className='w-[500px]  hover:bg-blue-600 hover:text-white transition-all duration-150 cursor-pointer rounded-lg h-[85px] font-bold text-white text-3xl'
            style={{ background: "linear-gradient(#29A9E3, #272C36)" }}
          >
            Make Payment
          </button>
          <h3 className='text-white font-light text-[24px] mt-[30px]'>Your partnership is pending, you will receive an email when approved. You can now visit the membership page to view the status of your partnership.</h3>
          <h3 className='text-white font-light text-[24px]'>By partnering as a business, you enjoy a host of premium benefits, including access to our exclusive marketplace to list your products, exclusive Trailblazer Omega’s package, higher rewards, participation in exclusive deals, and much more. Embrace the future of sustainability with Trailblazers Omega.</h3>
        </div>


      </div>
    </>
  )
}

export default PartnerBus