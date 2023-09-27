import './App.css'
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
