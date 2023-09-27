import './App.css'
import SignUpPage from './pages/SignUpPage'
// import SignInPage from './pages/SignInPage'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Footer from './components/Footer'
import NavBar from "./components/NavBar"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>
                <NavBar/>
                <Footer/>
              </div>,
    },
  ]);
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
