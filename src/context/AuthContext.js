import { createContext, useEffect, useState } from "react";

import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(() =>
    JSON.parse(window.sessionStorage.getItem("user"))
  );

  const [favorites, setFavorites] = useState(() =>
    JSON.parse(window.sessionStorage.getItem("favorites")) || []);

  const [loading, setLoading] = useState(false);

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    setLoading(true);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        window.sessionStorage.setItem("user", JSON.stringify(user));
      } else {
        setUser(null);
        window.sessionStorage.removeItem("user");
      }
      setLoading(false);
    });
    return () => {
      window.sessionStorage.removeItem("user");
    };
  }, []);

  return (
    <AuthContext.Provider value={
      {
        signUp,
        login,
        user,
        loading,
        logout,
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
