import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

const Logout = () => {
    const navigate = useNavigate()

    const signingOut = async () => {
        signOut(auth);
        setTimeout(() => {
          navigate('/signin');
        }, 100);
      };

    return (
        <>
            <div className="main w-[300px] lg:w-full flex mb-[50px] flex-col justify-center items-center">
                <div className='w-[254px] lg:w-[654px] h-[310px] rounded-lg mt-[40px] flex flex-col gap-[23px] justify-center items-center' style={{background: "linear-gradient(to right, #29A9E3,#272C36)"}}>
                    <p className='font-bold text-white text-3xl text-center'>Are you sure you want to logout?</p>
                    <div className='w-[240px] lg:w-[540px] h-[70px] flex flex-row gap-6 justify-center'>
                        <button onClick={()=>{navigate("#")}} className='rounded-md w-[229px] h-[56px] font-bold text-white' style={{background: "linear-gradient(to right, #BB000E,#212121)"}}>Cancel</button>
                        <button onClick={signingOut} className='rounded-md w-[229px] h-[56px] font-bold text-white' style={{background: "linear-gradient(to right, #29A9E3,#272C36)"}}>Confirm</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Logout