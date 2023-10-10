import React, { useState } from 'react'

const Progressform = () => {
  const [isEligible, setisEligible] = useState(false);

  return (
    <>
      <div className='w-[707px] flex flex-col'>
        <div className='flex flex-col gap-3 mt-[5px] mb-[5px]'>
          <label className='text-white'>Group Volume</label>
          <input
            placeholder='$ 30,000 / $ 25,000'
            className='bg-transparent text-center h-[70px] w-[500px] outline-none text-white rounded-sm pt-2 pl-1 pr-1 pb-2 border border-white'
            type='text'
          />
        </div>
        <div className='flex flex-col gap-3 mt-[5px] mb-[5px]'>
          <label className='text-white'>Average Level 1</label>
          <input
            placeholder='$ 10,000'
            className='bg-transparent text-center h-[70px] w-[500px] outline-none text-white rounded-sm pt-2 pl-1 pr-1 pb-2 border border-white'
            type='text'
          />
        </div>
        <div className='flex flex-col gap-3 mt-[5px] mb-[20px]'>
          <label className='text-white'>Portfolio up to $10,000</label>
          <input
            placeholder='3'
            className='bg-transparent text-center h-[70px] w-[500px] outline-none text-white rounded-sm pt-2 pl-1 pr-1 pb-2 border border-white'
            type='text'
          />
        </div>

        <div className='flex flex-col gap-3 mt-[15px] mb-[5px]'>
          <button onClick={() => setisEligible(true)} className='text-white font-bold w-[336px] h-[56px] rounded-lg' style={{
            background: isEligible === true
              ? "linear-gradient(#29A9E3, #272C36)"
              : "linear-gradient(#0AC15F, #00A34C)"
          }}
          >Eligible</button>
        </div>

        {isEligible && (<div className='flex flex-row gap-3 mt-[15px] mb-[5px]'>
          <button className='text-white font-bold w-[336px] h-[56px] rounded-md' style={{ background: "linear-gradient(#0AC15F,#00A34C)" }}>Claim Achievement</button>
          <button onClick={() => setisEligible(false)} className='text-white font-bold w-[336px] h-[56px] rounded-md' style={{ background: "linear-gradient(#D99020,#B77814)" }}>Cancel</button>
        </div>)}

        {isEligible && (<div className='flex flex-row gap-3 mt-[15px] mb-[5px]'>
          <h3 className='text-white font-light text-[19px]'>When he claims it, the status will change from eligible to in progress and it will be sent to admin to confirm, when admin confirms it, it starts showing on the users account as [confirmed]) / Comments for Developer</h3>
        </div>)}

      </div>
    </>
  )
}

export default Progressform