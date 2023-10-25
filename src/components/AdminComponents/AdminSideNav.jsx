import React, { useState, useEffect, useContext } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";
import { RiRefund2Line } from "react-icons/ri";
import { FaClipboardUser } from "react-icons/fa6";
import { BsBank } from "react-icons/bs";
import usericon from "../../assets/dashboard/profile.jpg"
import AuthContext from "../../AuthContext"

const AdminSideNav = () => {
  const [isFundingOpen, setIsFundingOpen] = useState(false);
  const [isWithdrawalOpen, setIsWithdrawalOpen] = useState(false);
  const { currentUser } = useContext(AuthContext)

  const menus = [
    { name: "Dashboard", link: "home", icon: MdOutlineDashboard },
    {
      name: "Funding",
      link: "#",
      icon: RiRefund2Line,
      submenus: [
        { name: "Deposit Money", link: "deposit", icon: RiRefund2Line },
        // { name: "Deposit History", link: "funding-history", icon: RiRefund2Line },
      ],
      isOpen: isFundingOpen,
    },
    {
      name: "Withdrawal", link: "#", icon: FaMoneyCheckDollar,
      submenus: [
        { name: "Withdraw Money", link: "withdraw", icon: FaMoneyCheckDollar },
        // { name: "Withdrawal History", link: "withdraw-history", icon: FaMoneyCheckDollar },
      ],
      isOpen: isWithdrawalOpen,
    },
    // { name: "Cart", link: "cart", icon: BsCart },
    // { name: "Account Statement", link: "acc-statement", icon: TbReportAnalytics },
    { name: "Portfolio", link: "portfolio", icon: FaClipboardUser },
    // { name: "Green futures", link: "green-futures", icon: FaPersonCane },
    { name: "Partner", link: "partner", icon: AiOutlineUser },
    { name: "Bank Details", link: "bank", icon: BsBank },
    // { name: "Membership", link: "membership", icon: MdOutlineCardMembership },
    // { name: "Referral", link: "referral", icon: FaPeopleCarry },
    // { name: "Notifications", link: "notifications", icon: BsBell },
    // { name: "Achievements", link: "achievements", icon: BsTrophy },
    // { name: "Reports", link: "reports", icon: TbReportAnalytics, margin: true },
    // { name: "Support", link: "support", icon: FcSupport },
    // { name: "Settings", link: "settings", icon: FiSettings },
    { name: "Logout", link: "logout", icon: IoIosLogOut },
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
        className={` bg-transparent border-r border-white overflow-y-auto min-h-screen  shadow-md ${open ? "w-72" : " w-14 lg:w-[75px]"
          } duration-500 text-gray-100 px-2 lg:px-4 py-1 sm:py-2 md:py-2 lg:py-4 xl:py-6 2xl:py-6`}
      >

        {menus?.map((menu, i) => (
          <div key={i}>
            {menu.submenus ? (
              <>
                <div
                  className={`group flex items-center text-base gap-3.5 font-poppins hover:bg-[#027D6B] hover:text-white hover:duration-100 rounded-md ${open && "p-2"
                    }`}
                  onClick={() => {
                    // Toggle the open/close state of the respective submenu
                    if (menu.name === "Funding") {
                      setIsFundingOpen(!isFundingOpen);
                    } else if (menu.name === "Withdrawal") {
                      setIsWithdrawalOpen(!isWithdrawalOpen);
                    }
                  }}
                >
                  <div className="p-2 lg:p-3 rounded-md bg-[#00000] text-white">
                    {React.createElement(menu?.icon, { size: "20" })}
                  </div>
                  <h2
                    style={{
                      transitionDelay: `${i + 2}00ms`,
                    }}
                    className={`whitespace-pre duration-200 ${!open && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                  >
                    {menu?.name}
                  </h2>
                  <div className={`ml-auto transform ${menu.name === "Funding" ? (isFundingOpen ? 'rotate-0' : '-rotate-90') : (isWithdrawalOpen ? 'rotate-0' : '-rotate-90')} transition-transform`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.293 7.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div
                  className={`max-h-0 overflow-hidden transition-max-h ${(menu.name === "Funding" && isFundingOpen) ||
                    (menu.name === "Withdrawal" && isWithdrawalOpen)
                    ? "max-h-full"
                    : ""
                    }`}
                >
                  {menu.submenus.map((submenu, j) => (
                    <Link
                      to={submenu.link}
                      key={j}
                      className={`group flex items-center text-base gap-3.5 font-poppins hover:bg-[#027D6B] hover:text-white hover:duration-100 rounded-md ${location.pathname === submenu.link
                        ? "bg-[#027D6B] text-white"
                        : "text-white"
                        }`}
                    >
                      <div className="p-2 lg:p-3 rounded-md bg-[#00000] text-white">
                        {React.createElement(submenu.icon, { size: "20" })}
                      </div>
                      <h2>{submenu.name}</h2>
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              // Render regular menu items
              <Link
                to={menu?.link}
                className={`${menu?.margin && ""
                  } group flex items-center text-base  gap-3.5 font-poppins hover:bg-[#027D6B] hover:text-white hover:duration-100 rounded-md ${open && "p-2"
                  } ${location.pathname === menu?.link ? "bg-[#027D6B] text-white" : "text-white"
                  }`}
              >
                <div className="p-2 lg:p-3 rounded-md bg-[#00000] text-white">
                  {React.createElement(menu?.icon, { size: "20" })}
                </div>
                <h2
                  style={{
                    transitionDelay: `${i + 2}00ms`,
                  }}
                  className={`whitespace-pre duration-200 ${!open && "opacity-0 translate-x-28 overflow-hidden"
                    }`}
                >
                  {menu?.name}
                </h2>
              </Link>
            )}
          </div>
        ))}

        <div className="flex mt-[5px] flex-row gap-4 hover:ring-2 cursor-pointer transition-all justify-center items-center w-[35px] lg:w-[240px] h-[70px] rounded-xl" style={{ background: "linear-gradient(#29A9E3,#232731)" }}>
          <img className="lg:w-[46px] w-[35px] h-[70px] lg:h-[46px] rounded-xl lg:rounded-full" src={usericon} alt="" />
          <span className="text-white lg:block hidden font-medium text-[13px]">{currentUser.email ? currentUser.email : "Brian"}</span>
        </div>

      </div>
    </section>
  );
};

export default AdminSideNav;