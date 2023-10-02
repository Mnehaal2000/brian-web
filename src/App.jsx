import './App.css'
import SignUpPage from './pages/SignUpPage'
import {
   Route, Routes, BrowserRouter
} from "react-router-dom";
import Footer from './components/Footer'
import NavBar from "./components/NavBar"
import SignInPage from './pages/SignInPage'; 
import NewsPage from './pages/NewsPage';
import StorePage from './pages/StorePage';
import EmpowerPage from './pages/EmpowerPage';

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path='/signup' element={<SignUpPage/>}/>
        <Route exact path='/signin' element={<SignInPage/>}/>
        <Route exact path='/news' element={<NewsPage/>}/>
        <Route exact path='/store' element={<StorePage/>}/>
        <Route exact path='/empower' element={<EmpowerPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
