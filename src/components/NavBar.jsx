import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoIcon from "../assets/homepage/Ecocentury energy.png"
import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";


export default function NavBar() {
    const [navbar, setNavbar] = useState(false);
    const [Linkto, setLinkto] = useState('/signin');
    const [Linktext, setLinktext] = useState('Login');
    const [currentUser, setCurrentUser] = useState({});

    const unsub = onAuthStateChanged(auth, async (user) => {
        if (user) {
            try {
                const docRef = doc(db, "managers", user.uid);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setLinkto('/adminportal')
                    setLinktext('Admin Portal')
                } else {
                    setLinkto('/dashboard/home')
                    setLinktext('Dashboard')
                }

                setCurrentUser(user); // Update the currentUser state after getting user data
                //   console.log(userRole)
            } catch (err) {
                console.log(err);
            }
        }
    });

    const closeNavbar = () => {
        setNavbar(false)
    };

    useEffect(() => {

        const handleResize = () => {
            // Set navbar state to false for screen widths greater than 767px
            if (window.innerWidth < 1024) {
                setNavbar(false);
            }
        };

        // Add event listener for window resize
        window.addEventListener("resize", handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <nav className={`w-full lg:absolute z-[100] top-0 left-0 right-0 bg-transparent hover:bg-white transition ease-in-out delay-100 cursor-pointer group shadow ${navbar ? " fixed min-h-screen lg:min-h-[auto] h-full" : "absolute"
            } `}>
            <div className="justify-start px-4 mx-auto lg:max-w-7xl lg:items-center flex lg:flex-row flex-col lg:px-8 min-h-full ">
                <div>
                    <div className="flex items-center justify-between py-2 lg:py-3 lg:block">
                        <div className="lg:hidden flex items-center gap-3">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-black"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white group-hover:text-black"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                            <Link onClick={closeNavbar} to="/" className="">
                                <img src={logoIcon} className=" w-12 h-10" />
                            </Link>
                        </div>
                        <div className=" space-x-2 lg:hidden flex items-center gap-2">
                            <div className=" flex items-center text-white group-hover:text-black">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" className="text-white group-hover:text-black" fill="currentColor" viewBox="-8 -8 40 40"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.057v-3.057h2.994c-.059 1.143-.212 2.24-.456 3.279-.823-.12-1.674-.188-2.538-.222zm1.957 2.162c-.499 1.33-1.159 2.497-1.957 3.456v-3.62c.666.028 1.319.081 1.957.164zm-1.957-7.219v-3.015c.868-.034 1.721-.103 2.548-.224.238 1.027.389 2.111.446 3.239h-2.994zm0-5.014v-3.661c.806.969 1.471 2.15 1.971 3.496-.642.084-1.3.137-1.971.165zm2.703-3.267c1.237.496 2.354 1.228 3.29 2.146-.642.234-1.311.442-2.019.607-.344-.992-.775-1.91-1.271-2.753zm-7.241 13.56c-.244-1.039-.398-2.136-.456-3.279h2.994v3.057c-.865.034-1.714.102-2.538.222zm2.538 1.776v3.62c-.798-.959-1.458-2.126-1.957-3.456.638-.083 1.291-.136 1.957-.164zm-2.994-7.055c.057-1.128.207-2.212.446-3.239.827.121 1.68.19 2.548.224v3.015h-2.994zm1.024-5.179c.5-1.346 1.165-2.527 1.97-3.496v3.661c-.671-.028-1.329-.081-1.97-.165zm-2.005-.35c-.708-.165-1.377-.373-2.018-.607.937-.918 2.053-1.65 3.29-2.146-.496.844-.927 1.762-1.272 2.753zm-.549 1.918c-.264 1.151-.434 2.36-.492 3.611h-3.933c.165-1.658.739-3.197 1.617-4.518.88.361 1.816.67 2.808.907zm.009 9.262c-.988.236-1.92.542-2.797.9-.89-1.328-1.471-2.879-1.637-4.551h3.934c.058 1.265.231 2.488.5 3.651zm.553 1.917c.342.976.768 1.881 1.257 2.712-1.223-.49-2.326-1.211-3.256-2.115.636-.229 1.299-.435 1.999-.597zm9.924 0c.7.163 1.362.367 1.999.597-.931.903-2.034 1.625-3.257 2.116.489-.832.915-1.737 1.258-2.713zm.553-1.917c.27-1.163.442-2.386.501-3.651h3.934c-.167 1.672-.748 3.223-1.638 4.551-.877-.358-1.81-.664-2.797-.9zm.501-5.651c-.058-1.251-.229-2.46-.492-3.611.992-.237 1.929-.546 2.809-.907.877 1.321 1.451 2.86 1.616 4.518h-3.933z" /></svg>
                                {/* <p className=" uppercase pt-1">Global</p> */}
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" className="text-white group-hover:text-black" fill="currentColor" viewBox="0 0 50 50">
                                    <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
                                </svg>
                            </div>
                        </div>
                        <Link onClick={closeNavbar} to="/" className=" lg:block hidden">
                            <img src={logoIcon} className=" w-18 h-16" />
                        </Link>

                    </div>
                </div>
                <div className="flex flex-1 min-h-full">
                    <div
                        className={` flex-1 justify-between pb-3 mt-8  lg:pb-0 lg:mt-0 min-h-full  ${navbar ? "flex  flex-col " : "lg:block hidden"
                            }`}
                    >
                        <ul className="items-center justify-start pl-8 space-y-8 lg:flex lg:space-x-6 lg:space-y-0 text-white group-hover:text-black text-xs lg:text-sm font-bold">
                            <li>
                                <Link onClick={closeNavbar} to="/whoweare">Who we are</Link>
                            </li>
                            <li>
                                <Link onClick={closeNavbar} to="/whatwedo">What we do</Link>
                            </li>
                            <li>
                                <Link onClick={closeNavbar} to="/energy">Energy & Innovation</Link>
                            </li>
                            <li>
                                <Link onClick={closeNavbar} to="/startups">Ecocentury Startups & Ventures</Link>
                            </li>
                            {/* <li>
                                <Link onClick={closeNavbar} to="/news">Resources</Link>
                            </li> */}
                            <li>
                                <Link onClick={closeNavbar} to="/store">Store</Link>
                            </li>

                        </ul>

                        <div className="mt-3 space-y-2 lg:hidden ">
                            <Link onClick={closeNavbar} to="/signin" className=" inline-block w-full text-center py-3 px-10 bg-green-primary rounded-3xl text-white" >Login</Link>
                        </div>
                    </div>
                </div>
                <div className="hidden space-x-2 lg:flex items-center gap-2">
                    <Link to="/community">
                        <div className=" flex items-center text-white group-hover:text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" className="text-white group-hover:text-black" fill="currentColor" viewBox="-8 -8 40 40"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.057v-3.057h2.994c-.059 1.143-.212 2.24-.456 3.279-.823-.12-1.674-.188-2.538-.222zm1.957 2.162c-.499 1.33-1.159 2.497-1.957 3.456v-3.62c.666.028 1.319.081 1.957.164zm-1.957-7.219v-3.015c.868-.034 1.721-.103 2.548-.224.238 1.027.389 2.111.446 3.239h-2.994zm0-5.014v-3.661c.806.969 1.471 2.15 1.971 3.496-.642.084-1.3.137-1.971.165zm2.703-3.267c1.237.496 2.354 1.228 3.29 2.146-.642.234-1.311.442-2.019.607-.344-.992-.775-1.91-1.271-2.753zm-7.241 13.56c-.244-1.039-.398-2.136-.456-3.279h2.994v3.057c-.865.034-1.714.102-2.538.222zm2.538 1.776v3.62c-.798-.959-1.458-2.126-1.957-3.456.638-.083 1.291-.136 1.957-.164zm-2.994-7.055c.057-1.128.207-2.212.446-3.239.827.121 1.68.19 2.548.224v3.015h-2.994zm1.024-5.179c.5-1.346 1.165-2.527 1.97-3.496v3.661c-.671-.028-1.329-.081-1.97-.165zm-2.005-.35c-.708-.165-1.377-.373-2.018-.607.937-.918 2.053-1.65 3.29-2.146-.496.844-.927 1.762-1.272 2.753zm-.549 1.918c-.264 1.151-.434 2.36-.492 3.611h-3.933c.165-1.658.739-3.197 1.617-4.518.88.361 1.816.67 2.808.907zm.009 9.262c-.988.236-1.92.542-2.797.9-.89-1.328-1.471-2.879-1.637-4.551h3.934c.058 1.265.231 2.488.5 3.651zm.553 1.917c.342.976.768 1.881 1.257 2.712-1.223-.49-2.326-1.211-3.256-2.115.636-.229 1.299-.435 1.999-.597zm9.924 0c.7.163 1.362.367 1.999.597-.931.903-2.034 1.625-3.257 2.116.489-.832.915-1.737 1.258-2.713zm.553-1.917c.27-1.163.442-2.386.501-3.651h3.934c-.167 1.672-.748 3.223-1.638 4.551-.877-.358-1.81-.664-2.797-.9zm.501-5.651c-.058-1.251-.229-2.46-.492-3.611.992-.237 1.929-.546 2.809-.907.877 1.321 1.451 2.86 1.616 4.518h-3.933z" /></svg>
                            <p className=" uppercase pt-1">Global</p>
                        </div>
                    </Link>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" className="text-white group-hover:text-black" fill="currentColor" viewBox="0 0 50 50">
                            <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
                        </svg>
                    </div>
                    <a href={Linkto} className=" py-2 px-6 bg-green-primary rounded-3xl text-white" >{Linktext}</a>
                </div>
            </div>
        </nav>
    );
}