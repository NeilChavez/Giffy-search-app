import { createContext } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const SignUp = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  return (
    <AuthContext.Provider value={{ SignUp }}> {children}</AuthContext.Provider>
  );
}

export { AuthContext };
export default AuthContextProvider;
