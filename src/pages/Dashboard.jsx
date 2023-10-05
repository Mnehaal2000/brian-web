import React from 'react'
import SideNav from "../components/DashboardComponents/SideNav"
import TopBar from '../components/DashboardComponents/TopBar'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
    return (
        <>
            <div className="fixed left-0 right-0 top-0 bottom-0 flex" style={{ background: "linear-gradient(#005246, #000000)" }}>
                <SideNav />
                <div className="w-full overflow-x-auto">
                    <div className="min-w-[200vw] sm:min-w-[100vw] md:min-w-[1024px] lg:min-w-full">
                        <TopBar />
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