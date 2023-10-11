import React, { useState } from 'react';
import NotificationsComponent from './NotificationsComponent';
import s1 from "../../assets/dashboard/home/s1.png";
import s2 from "../../assets/dashboard/home/s2.png";

const notifications_data = [
    {
    image: s1,
    message: "You have received a bonus of $200",
    amount: 200,
    date: "2022-02-28"
  },
  {
    image: s2,
    message: "You have been debited with an amount of $500",
    amount: -500,
    date: "2022-02-11"
  },{
    image: s1,
    message: "You have received a bonus of $200",
    amount: 200,
    date: "2022-02-28"
  },
  {
    image: s2,
    message: "You have been debited with an amount of $500",
    amount: -500,
    date: "2022-02-11"
  },{
    image: s1,
    message: "You have received a bonus of $200",
    amount: 200,
    date: "2022-02-28"
  },
  {
    image: s2,
    message: "You have been debited with an amount of $500",
    amount: -500,
    date: "2022-02-11"
  },
    {
    image: s1,
    message: "You have received a bonus of $200",
    amount: 200,
    date: "2022-02-28"
  },
  {
    image: s2,
    message: "You have been debited with an amount of $500",
    amount: -500,
    date: "2022-02-11"
  },{
    image: s1,
    message: "You have received a bonus of $200",
    amount: 200,
    date: "2022-02-28"
  },
  {
    image: s2,
    message: "You have been debited with an amount of $500",
    amount: -500,
    date: "2022-02-11"
  },{
    image: s1,
    message: "You have received a bonus of $200",
    amount: 200,
    date: "2022-02-28"
  },
  {
    image: s2,
    message: "You have been debited with an amount of $500",
    amount: -500,
    date: "2022-02-11"
  },
];

const Notifications = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchInput, setSearchInput] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const cardsPerPage = 6;

  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  const filteredNotifications = notifications_data.filter((notification) => {
    const searchMatch = searchInput
      ? notification.message.toLowerCase().includes(searchInput.toLowerCase())
      : true;
  
    const formattedNotificationDate = notification.date.split('-').reverse().join('-');
    const formattedSelectedDate = selectedDate.split('-').reverse().join('-'); // Use hyphens for date format
    
    const dateMatch = selectedDate ? formattedNotificationDate === formattedSelectedDate : true;
  
    return searchMatch && dateMatch;
  });
  
  

  const currentNotifications = filteredNotifications.slice(startIndex, endIndex);

  return (
    <>
      <div className="main w-full mb-[90px] flex flex-col justify-center items-center">
        <div className="w-[900px] mt-[30px]">
          <h3 className='text-white font-bold text-2xl'>Notifications</h3>
        </div>
        <div className="w-[900px] pt-[20px] border items-center border-white rounded-lg h-[976px] mt-[30px] flex flex-col gap-[10px]" style={{ background: "linear-gradient(#29A9E3,#272C36)" }}>
          <div className='w-[800px] mb-[30px] flex flex-row justify-between'>
            <div className="relative">
              <input
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                type="search" name="q" className="py-2 bg-transparent border border-white placeholder-white text-sm text-white pl-10 w-[132px] outline-none h-[35px] rounded-[6px]" placeholder="Search" autoComplete="off" />
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" className="w-6 text-white h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </button>
              </span>
            </div>
            <div className="relative">
              <input
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                type="date" name="q" className="py-2 bg-transparent border border-white placeholder-white text-sm text-white pl-3 pr-3 w-[132px] outline-none h-[35px] rounded-[6px]" placeholder="Select Date" autoComplete="off" />
            </div>
          </div>
          {currentNotifications?.map((notification, index) => (
            <NotificationsComponent key={index} data={notification} />
          ))}
          <div className='flex flex-row items-center mt-[30px] justify-end w-[800px]'>
            {Array.from({ length: Math.ceil(filteredNotifications.length / cardsPerPage) }).map((_, index) => (
              <button
                key={index}
                className={`mx-2 py-2 px-4 border ${currentPage === index + 1 ? 'bg-[#1C2434] text-white' : 'bg-white text-black'} rounded`}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Notifications;
