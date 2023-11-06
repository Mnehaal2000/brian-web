import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminSideNav from '../components/AdminComponents/AdminSideNav'
import AdminTopBar from '../components/AdminComponents/AdminTopBar'

const Dashboard = () => {
    return (
        <>
            <div className="fixed left-0 right-0 top-0 bottom-0 flex" style={{ background: "linear-gradient(to right, #005246, #000000)" }}>
                <AdminSideNav />
                <div className="w-full overflow-x-auto">
                    <div className="min-w-full md:min-w-[300px] lg:min-w-full">    {/*pehly md:min-w-[1024px] */}
                        <AdminTopBar />
                    </div>
                    <div className=' w-full'>
                        <Outlet/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard