import './App.css'
import SignUpPage from './pages/SignUpPage'
import {
   Route, Routes, BrowserRouter
} from "react-router-dom";
import Footer from './components/Footer'
import NavBar from "./components/NavBar"
import SignInPage from './pages/SignInPage'; 

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path='/signup' element={<SignUpPage/>}/>
        <Route exact path='/login' element={<SignInPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
