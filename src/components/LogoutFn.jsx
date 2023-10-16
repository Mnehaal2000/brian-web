import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';


const LogoutFn = (props) => {
  const navigate = useNavigate();

  const signingOut = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    // Clear all caches
    if ('caches' in window) {
      try {
        const cacheKeys = await caches.keys();
        await Promise.all(cacheKeys.map((key) => caches.delete(key)));
      } catch (error) {
        console.error('Failed to clear cache:', error);
      }
    }

    signOut(auth);
    setTimeout(() => {
      navigate('/signin');
    }, 100);
  };

  return (
      <button className=" w-fit h-fit text-white" onClick={(event) => signingOut(event)}>
        Confirm
      </button>
  );
};

export default LogoutFn;