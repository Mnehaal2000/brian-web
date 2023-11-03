import SignUpPage from './pages/SignUpPage'
import {
  Route, Routes, BrowserRouter
} from "react-router-dom";
import { AuthContextProvider } from './AuthContext';
import AuthContext from "./AuthContext"
import { useContext, useEffect, useState,useRef } from 'react';
import LoadingBar from 'react-top-loading-bar';

//basic web pages start
import Footer from './components/Footer'
import NavBar from "./components/NavBar"
import SignInPage from './pages/SignInPage';
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import NewsDetails from './pages/NewsDetails';
import StorePage from './pages/StorePage';
import EmpowerPage from './pages/EmpowerPage';
import CommunityPage from './pages/CommunityPage';
import StartupsPage from './pages/StartupsPage';
import EnergyPage from './pages/EnergyPage';
import EnvironmentPage from './pages/EnvironmentPage';
import WhoPage from './pages/WhoPage';
import WhatPage from './pages/WhatPage';
//basic web pages end


//user dashboard start
import Dashboard from './pages/Dashboard';
import Home from './components/DashboardComponents/Home';
import Funding from './components/DashboardComponents/Funding';
import Withdraw from './components/DashboardComponents/Withdraw';
import FundingHistory from './components/DashboardComponents/FundingHistory';
import WithdrawHistory from './components/DashboardComponents/WithdrawHistory';
import Cart from './components/DashboardComponents/Cart';
import AccountStatement from './components/DashboardComponents/AccountStatement';
import Partner from './components/DashboardComponents/Partner';
import Logout from './components/DashboardComponents/Logout';
import GreenFutures from './components/DashboardComponents/GreenFutures';
import Membership from './components/DashboardComponents/Membership';
import Referral from './components/DashboardComponents/Referral';
import Support from './components/DashboardComponents/Support';
import Portfolio from './components/DashboardComponents/Portfolio';
import Settings from './components/DashboardComponents/Settings';
import Achievements from './components/DashboardComponents/Achievements';
import Notifications from './components/DashboardComponents/Notifications';
import Reports from './components/DashboardComponents/Reports';
import Feedbacks from "./components/DashboardComponents/Feedbacks"
//user dashboard end


// admin components start
import AdminPortal from "./pages/AdminPortal"
import AdminHome from "./components/AdminComponents/Home"
import AdminDeposit from "./components/AdminComponents/Deposit"
import AdminDepositHistory from "./components/AdminComponents/DepositHistory"
import AdminWithdraw from "./components/AdminComponents/Withdraw"
import AdminWithdrawHistory from "./components/AdminComponents/WithdrawHistory"
import AdminPortfolio from "./components/AdminComponents/Portfolio"
import AdminBank from "./components/AdminComponents/BankDetails"
import AdminPartner from "./components/AdminComponents/Partner"
import News from './components/AdminComponents/News';
import Store from './components/AdminComponents/Store';
import PartnersPage from './pages/PartnersPage';
import AdminFeedbacks from './components/AdminComponents/Feedbacks';
// admin components end

function App() {

  const isDashboardRoute = window.location.pathname.startsWith('/dashboard') || window.location.pathname.startsWith('/adminportal');
  const { userRole ,userhere } = useContext(AuthContext)

  const ref = useRef(null);
  useEffect(() => {
    ref.current.complete();
  }, []);


  return (
    <>
      <BrowserRouter>
        {!isDashboardRoute && <NavBar />}
        <LoadingBar shadow={true} height={5} color="#059C4B" ref={ref} />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/news' element={<NewsPage />} />
          <Route exact path='/news/:Id' element={<NewsDetails />} />
          <Route exact path='/store' element={<StorePage />} />
          <Route exact path='/empower' element={<EmpowerPage />} />
          <Route exact path='/community' element={<CommunityPage />} />
          <Route exact path='/startups' element={<StartupsPage />} />
          <Route exact path='/energy' element={<EnergyPage />} />
          <Route exact path='/environment' element={<EnvironmentPage />} />
          <Route exact path='/whoweare' element={<WhoPage />} />
          <Route exact path='/whatwedo' element={<WhatPage />} />
          <Route exact path='/partners' element={<PartnersPage />} />
          {userhere === false ?
            (<>
              <Route exact path='/signup' element={<SignUpPage />} />
              <Route exact path='/signin' element={<SignInPage />} />
              <Route path="*" element={<SignInPage />} />
            </>
            ) :
            (
              <>
                {userRole === 'user' && (
                  <Route path="/dashboard/*" element={<AuthContextProvider><Dashboard /></AuthContextProvider>}>
                    <Route path="home" element={<AuthContextProvider><Home /></AuthContextProvider>} />
                    <Route path="funding" element={<AuthContextProvider><Funding /></AuthContextProvider>} />
                    <Route path="funding-history" element={<AuthContextProvider><FundingHistory /></AuthContextProvider>} />
                    <Route path="withdraw" element={<AuthContextProvider><Withdraw /></AuthContextProvider>} />
                    <Route path="withdraw-history" element={<AuthContextProvider><WithdrawHistory /></AuthContextProvider>} />
                    <Route path="cart" element={<AuthContextProvider><Cart /></AuthContextProvider>} />
                    <Route path="partner" element={<AuthContextProvider><Partner /></AuthContextProvider>} />
                    <Route path="membership" element={<AuthContextProvider><Membership /></AuthContextProvider>} />
                    <Route path="referral" element={<AuthContextProvider><Referral /></AuthContextProvider>} />
                    <Route path="achievements" element={<AuthContextProvider><Achievements /></AuthContextProvider>} />
                    <Route path="notifications" element={<AuthContextProvider><Notifications /></AuthContextProvider>} />
                    <Route path="reports" element={<AuthContextProvider><Reports /></AuthContextProvider>} />
                    <Route path="acc-statement" element={<AuthContextProvider><AccountStatement /></AuthContextProvider>} />
                    <Route path="portfolio" element={<AuthContextProvider><Portfolio /></AuthContextProvider>} />
                    <Route path="support" element={<AuthContextProvider><Support /></AuthContextProvider>} />
                    <Route path="feedback" element={<AuthContextProvider><Feedbacks /></AuthContextProvider>} />
                    <Route path="green-futures" element={<AuthContextProvider><GreenFutures /></AuthContextProvider>} />
                    <Route path="settings" element={<AuthContextProvider><Settings /></AuthContextProvider>} />
                    <Route path="logout" element={<AuthContextProvider><Logout /></AuthContextProvider>} />
                  </Route>
                )}

                {userRole === "manager" && (
                  <Route path="/adminportal/*" element={<AuthContextProvider><AdminPortal /></AuthContextProvider>} >
                    <Route path="home" element={<AuthContextProvider><AdminHome /></AuthContextProvider>} />
                    <Route path="deposit" element={<AuthContextProvider><AdminDeposit /></AuthContextProvider>} />
                    <Route path="funding-history" element={<AuthContextProvider><AdminDepositHistory /></AuthContextProvider>} />
                    <Route path="withdraw" element={<AuthContextProvider><AdminWithdraw /></AuthContextProvider>} />
                    <Route path="withdraw-history" element={<AuthContextProvider><AdminWithdrawHistory /></AuthContextProvider>} />
                    <Route path="portfolio" element={<AuthContextProvider><AdminPortfolio /></AuthContextProvider>} />
                    <Route path="partner" element={<AuthContextProvider><AdminPartner /></AuthContextProvider>} />
                    <Route path="bank" element={<AuthContextProvider><AdminBank /></AuthContextProvider>} />
                    <Route path="logout" element={<AuthContextProvider><Logout /></AuthContextProvider>} />
                    <Route path="news" element={<AuthContextProvider><News /></AuthContextProvider>} />
                    <Route path="store" element={<AuthContextProvider><Store /></AuthContextProvider>} />
                    <Route path="feedbacks" element={<AuthContextProvider><AdminFeedbacks /></AuthContextProvider>} />
                  </Route>)}
              </>
            )}

        </Routes>
        {!isDashboardRoute && <Footer />}
      </BrowserRouter>
    </>
  )
}

export default App