import React from 'react'
import g from "../../assets/dashboard/home/g.png"
import c1 from "../../assets/dashboard/home/1.png"
import c2 from "../../assets/dashboard/home/2.png"
import c3 from "../../assets/dashboard/home/3.png"
import c4 from "../../assets/dashboard/home/4.png"
import line from "../../assets/dashboard/home/line.png"
import chart from "../../assets/dashboard/home/chart.png"
import box from "../../assets/dashboard/home/box.png"
import s1 from "../../assets/dashboard/home/s1.png"
import s2 from "../../assets/dashboard/home/s2.png"
import s3 from "../../assets/dashboard/home/s3.png"
import s4 from "../../assets/dashboard/home/s4.png"


const Home = () => {
  return (
    <>
      <div className="main w-full flex flex-col justify-center items-center">
        <div className='w-[1000px] mt-[30px] flex flex-row lg:gap-[200px] justify-center'>
          <div className="w-[493px] h-[110px] flex justify-around flex-row p-5 rounded-md" style={{ background: "linear-gradient(#29A9E3, #272C36)" }}>
            <div>
              <h3 className='font-bold text-white text-4xl'>63,356 $</h3>
              <p className='text-white'>Earnings</p>
            </div>
            <img src={g} alt="" />
          </div>
          <div className="w-[493px] h-[110px] flex justify-around flex-row p-5 rounded-md"></div>
        </div>



        <div className='w-[1000px] mt-[30px] flex flex-row lg:gap-[57px] justify-center'>
          <div className="w-[320px] h-[168px] flex flex-col justify-center gap-1 items-center p-5 rounded-md" style={{ background: "linear-gradient(#29A9E3, #272C36)" }}>
            <img src={c1} alt="" />
            <h3 className='font-bold text-white text-4xl'>63,356 $</h3>
            <p className='text-white'>Earnings</p>
          </div>
          <div className="w-[320px] h-[168px] flex flex-col justify-center gap-1 items-center p-5 rounded-md" style={{ background: "linear-gradient(#29A9E3, #272C36)" }}>
            <img src={c2} alt="" />
            <h3 className='font-bold text-white text-4xl'>63,356 $</h3>
            <p className='text-white'>Earnings</p>
          </div>
          <div className="w-[320px] h-[168px] flex flex-col justify-center gap-1 items-center p-5 rounded-md" style={{ background: "linear-gradient(#29A9E3, #272C36)" }}>
            <img src={c3} alt="" />
            <h3 className='font-bold text-white text-4xl'>63,356 $</h3>
            <p className='text-white'>Earnings</p>
          </div>
        </div>

        <div className='w-[1000px] mt-[30px] flex flex-row lg:gap-[200px] justify-center items-center'>
          <div className="w-[300px] h-[168px] flex flex-col justify-center gap-1 items-center p-5 rounded-md" style={{ background: "linear-gradient(#29A9E3, #272C36)" }}>
            <img src={c4} alt="" />
            <h3 className='font-bold text-white text-4xl'>63,356 $</h3>
            <p className='text-white'>Earnings</p>
          </div>
        </div>


        <div className='w-[1000px] h-[465px] mt-[30px] flex flex-row lg:gap-[7px] rounded-md justify-center items-center' style={{ background: "linear-gradient(#29A9E3, #272C36)" }}>
          <div className='w-[450px] flex flex-col gap-7'>
            <h3 className='font-bold text-white text-4xl'>Revenue Updates</h3>
            <div>
              <h3 className='font-bold text-white text-4xl'>124,513 $ <span className='text-[#00FFE3] text-[25px]'>23 %</span></h3>
              <p className='text-white'>Earnings</p>
            </div>
            <div>
              <h3 className='font-bold text-white text-4xl'>14,513 $</h3>
              <p className='text-white'>Orders</p>
            </div>
            <div>
              <img src={line} alt="" />
              <button className='bg-[#21374B] rounded-md mt-[13px] p-2 z-[1] text-white'>Download Report</button>
            </div>
          </div>
          <div>
            <img src={chart} alt="" />
          </div>
        </div>



        <div className='w-[1000px] h-[465px] mt-[30px] flex flex-col gap-10 rounded-md justify-center items-center' style={{ background: "linear-gradient(#29A9E3, #272C36)" }}>
          <img src={box} alt="" />
          <h3 className='font-bold text-white text-4xl'>Refer & Earn</h3>
          <p className='text-white w-[500px] text-center'>Refer your friends & Earn 20% Sponsor bonus, plus 5% for every customer that completes 1 deposit in the platform.</p>
          <button className='w-[258px] h-[81px] rounded-md text-3xl font-bold text-white' style={{ background: "linear-gradient(#115A56, #001F1B)" }}>Refer</button>
        </div>

        <div className='w-[1000px] h-[120px] flex flex-col rounded-md justify-center'>
          <p className='text-4xl font-bold text-white'>Recently Activity</p>
        </div>

        <div className='mb-[60px]'>
        <div className='w-[1000px] h-[120px] mb-[10px] flex flex-row gap-[30px] rounded-md justify-start items-center' style={{ background: "linear-gradient(#29A9E3, #272C36)" }}>
          <img className='ml-[40px] w-[80px] h-[80px]' src={s1} alt="" />
          <p className='text-white text-center'>You have recieved a bonus of $100</p>
          <span className='text-[#00FFE3] text-[25px] font-bold'>+100</span>
        </div>
        <div className='w-[1000px] h-[120px] mb-[10px] flex flex-row gap-[30px] rounded-md justify-start items-center' style={{ background: "linear-gradient(#29A9E3, #272C36)" }}>
          <img className='ml-[40px] w-[80px] h-[80px]' src={s2} alt="" />
          <p className='text-white text-center'>John signed up using your referal code</p>
        </div>
        <div className='w-[1000px] h-[120px] mb-[10px] flex flex-row gap-[30px] rounded-md justify-start items-center' style={{ background: "linear-gradient(#29A9E3, #272C36)" }}>
          <img className='ml-[40px] w-[80px] h-[80px]' src={s3} alt="" />
          <p className='text-white text-center'>You have completed a deposited of $500</p>
          <span className='text-[#00FFE3] text-[25px] font-bold'>+500</span>
        </div>
        <div className='w-[1000px] h-[120px]  flex flex-row gap-[30px] rounded-md justify-start items-center' style={{ background: "linear-gradient(#29A9E3, #272C36)" }}>
          <img className='ml-[40px] w-[80px] h-[80px]' src={s4} alt="" />
          <p className='text-white text-center'>Your order of Solar Panel $800 is completed</p>
          <span className='text-[#FF0000] text-[25px] font-bold'>-500</span>
        </div>
        </div>


      </div>
    </>
  )
}

export default Home