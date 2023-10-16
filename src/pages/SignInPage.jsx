import { useEffect, useState } from 'react';
import LoginPic from '../assets/loginpage/loginpagepic.png';
import './Style.css';
import { Link, useNavigate } from 'react-router-dom';
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

const SignInPage = () => {
    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])

    const navigate = useNavigate();

    const [ischecked, setIsChecked] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [passError, setPassError] = useState('');
    const [email,setEmail] = useState('')
    const [pass,setPass] = useState('')
    const [errorMsg, setErrorMsg]=useState('')

    const handleCheckBox = () => {
        setIsChecked(!ischecked);
    };

    const handleEmailChange = (event) => {
        const email = event.target.value;
        setEmail(email)
        if (email.trim() === '') {
            setEmailError('Email is required');
        } else if (!isValidEmail(email)) {
            setEmailError('Invalid email format');
        } else {
            setEmailError('');
        }
    };
    const handlePassChange = (event) => {
        const pass = event.target.value;
        setPass(pass)
        if (pass.trim() === '') {
            setPassError('Password is Required');
        } else if (pass.length <= 2) {
            setPassError('Password cannot be of length: ' + pass.length);
        } else {
            setPassError('');
        }
    };

    const isValidEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    function handleSignIn(){
        signInWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            navigate("/dashboard/home")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)
            setErrorMsg(errorMessage);
        });
    }
  return (
    <>
            <div className="flex h-screen">
                <div className="w-full md:w-1/2 bg-cover hidden md:block" style={{ backgroundImage: `url(${LoginPic})` }}></div>
                <div className="w-full md:w-1/2 bg-white flex justify-center items-center">
                    <div className="max-w-sm p-6 rounded">
                        {/* Child div with margin and width */}
                        <div className="mx-auto">
                            <h3 className="mb-4 font-poppins font-bold text-3xl text-[#12664F]">Sign In</h3>
    
                            <div className="mb-2">
                                <label htmlFor="emailinput" className="mb-2 font-poppins">Email</label>
                                <input
                                    className="px-3 py-2 border border-black bg-white w-full"
                                    name="emailinput"
                                    type="email"
                                    required
                                    onChange={handleEmailChange}
                                />
                                {emailError && <span style={{ color: 'red' }}>{emailError}</span>}
                            </div>
    
                            <div className="passContainer mb-4">
                                <label htmlFor="passinput" className="mb-2 font-poppins">Password</label>
                                <input className="px-3 py-2 border border-black bg-white w-full"
                                    minLength={2}
                                    name="passinput"
                                    type={ischecked ? "text" : "password"}
                                    required
                                    onChange={handlePassChange}
                                />
                                <label className="flex items-center text-sm font-poppins">
                                    <input type="checkbox" id="chck" onClick={handleCheckBox} className="mr-2" />
                                    <span className="font-poppins">Show Password</span>
                                </label>
                                {passError && <span style={{ color: 'red' }}>{passError}</span>}
                            </div>
                            {errorMsg && <p className=' py-2 text-red-700'>{errorMsg}</p>}
                            <div className="mb-2">
                                <button onClick={handleSignIn} className="bg-[#059C4B] text-white px-3 py-1 font-bold w-full">Sign In</button>
                            </div>
                            <div className="mb-2">
                                <Link to="/signup"><button className="bg-[#307473] text-white px-3 py-1 font-bold w-full">Sign Up</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default SignInPage;
