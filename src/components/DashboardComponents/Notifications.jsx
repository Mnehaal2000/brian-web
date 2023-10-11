import React from 'react'
import NotificationsComponent from './NotificationsComponent'

const Notifications = () => {
  return (
    <>
      <div className="main w-full mb-[90px] flex flex-col justify-center items-center">
      <div className="w-[900px] mt-[30px]">
        <h3 className='text-white font-bold text-2xl'>Notifications</h3>
      </div>
        <div className="w-[900px] pt-[20px] border items-center border-white rounded-lg h-[976px] mt-[30px] flex flex-col gap-[10px]" style={{background:"linear-gradient(#29A9E3,#272C36)"}}>
          <NotificationsComponent />
          <NotificationsComponent />
          <NotificationsComponent />
        </div>
      </div>
    </>
  )
}

export default Notifications