import React, { useState, useEffect } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";
import { FcSupport } from "react-icons/fc";
import { BsCart,BsBell,BsTrophy } from "react-icons/bs";
import {RiRefund2Line} from "react-icons/ri";

const SideNav = () => {
  const menus = [
    { name: "Dashboard", link: "#", icon: MdOutlineDashboard },
    { name: "Funding", link: "#", icon: RiRefund2Line },
    { name: "Green futures", link: "#", icon: AiOutlineUser },
    { name: "Withdrawal", link: "#", icon: FaMoneyCheckDollar },
    { name: "Notifications", link: "#", icon: BsBell },
    { name: "Achievements", link: "#", icon: BsTrophy },
    { name: "Cart", link: "#", icon: BsCart },
    { name: "Reports", link: "#", icon: TbReportAnalytics, margin: true },
    { name: "Support", link: "#", icon: FcSupport },
    { name: "Settings", link: "#", icon: FiSettings },
    { name: "Logout", link: "#", icon: IoIosLogOut },
  ];

  // State to manage the open/closed state of the side navigation
  const [open, setOpen] = useState(true);

  // Get the current location using the useLocation hook
  const location = useLocation();

  // Function to update the `open` state based on screen width
  const updateScreenSize = () => {
    if (window.innerWidth <= 768) { // Adjust the breakpoint as needed
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  // Call the `updateScreenSize` function when the component mounts and on window resize
  useEffect(() => {
    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  return (
    <section className="flex">
      <div
        className={` bg-transparent border-r border-white overflow-y-auto min-h-screen  shadow-md ${
          open ? "w-72" : " w-14 lg:w-[75px]"
        } duration-500 text-gray-100 px-2 lg:px-4 py-1 sm:py-2 md:py-2 lg:py-4 xl:py-6 2xl:py-6`}
      >
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={`${
                menu?.margin && ""
              } group flex items-center text-base  gap-3.5 font-poppins hover:bg-[#027D6B] hover:text-white hover:duration-100 rounded-md ${
                open && "p-2" // Add the p-2 class when open is true
              } ${location.pathname === menu?.link ? "bg-[#027D6B] text-white" : "text-white"}`}
            >
              <div className="p-2 lg:p-3 rounded-md bg-[#00000] text-white">
                {React.createElement(menu?.icon, { size: "20" })}
              </div>
              <h2
                style={{
                  transitionDelay: `${i + 2}00ms`,
                }}
                className={`whitespace-pre duration-200 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              {/* <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-poppins whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2> */}
            </Link>
          ))}
      </div>
    </section>
  );
};

export default SideNav;