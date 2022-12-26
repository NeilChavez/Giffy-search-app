import {useEffect, useState, createContext, useCallback } from "react";

import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { db } from "../firebase"
import { collection, query, where, getDocs } from "firebase/firestore"


const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(() =>
    JSON.parse(window.sessionStorage.getItem("user"))
  );

  const [favorites, setFavorites] = useState(() =>
    JSON.parse(window.sessionStorage.getItem("favorites")) || []);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const signUp = useCallback((email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }, [])
  const login = useCallback((email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }, [])
  const logout = useCallback(() => {
    return signOut(auth);
  }, [])

  useEffect(() => {
    setLoading(true);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        window.sessionStorage.setItem("user", JSON.stringify(user));
      } else {
        setUser(null);
        setFavorites([])
        window.sessionStorage.removeItem("user");
        window.sessionStorage.removeItem("favorites");
      }
      setLoading(false);
    });
    return () => {
      setFavorites([])
      window.sessionStorage.removeItem("user");
      window.sessionStorage.removeItem("favorites");
    };
  }, []);

  // get the favorites 
  useEffect(() => {
    const getFavorites = async () => {
      if(!user) return;
      try {
        const q = query(collection(db, "favorites"), where("userId", "==", user?.uid))
        const querySnapshot = await getDocs(q);
        let newFavoriteState = [];
        querySnapshot.forEach(doc => {
          newFavoriteState = [...newFavoriteState, { ...doc.data(), docId: doc.id }]
        })
        setFavorites(newFavoriteState)        
        window.sessionStorage.setItem("favorites", JSON.stringify(newFavoriteState))
      } catch (err) {
        console.log(err)
      }
    }
    getFavorites();
    console.log("get fav useeffect si effettua")
  }, [data, user]);



  return (
    <AuthContext.Provider value={
      {
        signUp,
        login,
        user,
        loading,
        logout,
        data,
        setData,
        favorites,
        setFavorites
      }
    }>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext };
export default AuthContextProvider;
