import './App.css'
import SignUpPage from './pages/SignUpPage'
// import SignInPage from './pages/SignInPage'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Footer from './components/Footer'
import NavBar from "./components/NavBar"
import SignInPage from './pages/SignInPage'; './pages/SignInPage'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>
                <NavBar/>
                <SignInPage/>
                <Footer/>
              </div>,
    },
    {
      path: "/login",
      element: <SignInPage/>,
    },
    
  ]);
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
