import SignUpPage from './pages/SignUpPage'
import {
  Route, Routes, BrowserRouter
} from "react-router-dom";
import Footer from './components/Footer'
import NavBar from "./components/NavBar"
import SignInPage from './pages/SignInPage';
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import StorePage from './pages/StorePage';
import EmpowerPage from './pages/EmpowerPage';
import CommunityPage from './pages/CommunityPage';
import StartupsPage from './pages/StartupsPage';
import EnergyPage from './pages/EnergyPage';
import EnvironmentPage from './pages/EnvironmentPage';
import WhoPage from './pages/WhoPage';
import WhatPage from './pages/WhatPage';
import Dashboard from './pages/Dashboard';
import Home from './components/DashboardComponents/Home';

function App() {
  const isDashboardRoute = window.location.pathname.startsWith('/dashboard');

  return (
    <>
      <BrowserRouter>
        {!isDashboardRoute && <NavBar />}
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/signup' element={<SignUpPage />} />
          <Route exact path='/signin' element={<SignInPage />} />
          <Route exact path='/news' element={<NewsPage />} />
          <Route exact path='/store' element={<StorePage />} />
          <Route exact path='/empower' element={<EmpowerPage />} />
          <Route exact path='/community' element={<CommunityPage />} />
          <Route exact path='/startups' element={<StartupsPage />} />
          <Route exact path='/energy' element={<EnergyPage />} />
          <Route exact path='/environment' element={<EnvironmentPage />} />
          <Route exact path='/whoweare' element={<WhoPage />} />
          <Route exact path='/whatwedo' element={<WhatPage />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="home" element={<Home />} />
          </Route>
        </Routes>
        {!isDashboardRoute && <Footer />}
      </BrowserRouter>
    </>
  )
}

export default App
