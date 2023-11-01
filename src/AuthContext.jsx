import { createContext, useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const docRef = doc(db, "managers", user.uid);
          const docSnap = await getDoc(docRef);
          setCurrentUser(user);

          if (docSnap.exists()) {
            setUserRole("manager");
          } else {

            setUserRole("user");
          }
        } catch (err) {
          console.log(err);
        }
      } else {
        setUserRole(null);
        setCurrentUser(null);
      }
    });

    return () => {  
      unsub();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ userRole , currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext