import { useState, useCallback } from "react";
import { db } from "../firebase";
import { addDoc, collection, deleteDoc, doc } from "firebase/firestore"
import { AuthContext } from "../context/AuthContext";
import { useAuth } from "./useAuth";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { auth } from "../firebase";

export function useUser() {
    const { favorites, setFavorites, setData } = useContext(AuthContext);
    const { user, setUser } = useAuth();
    const [error, setError] = useState(false);
    const [msgError, setMsgError] = useState("");
    const navigate = useNavigate();

    const signUp = useCallback(async (email, password) => {
        try {
            const data = await createUserWithEmailAndPassword(auth, email, password);
            window.sessionStorage.setItem("user", JSON.stringify(data));
            navigate("/");
            const { user } = data;
            setUser(user);
            setError(false);
        } catch (err) {
            console.log(err.code);
            let textMessage = ""
            if (err.code === "auth/email-already-in-use") textMessage = "This email is already in use";
            if (err.code === "auth/email-already-exists") textMessage = "This email already exists";
            if (err.code === "auth/missing-email") textMessage = "Insert a email";
            if (err.code === "auth/invalid-email") textMessage = "You need to insert a valid email";
            if (err.code === "auth/wrong-password") textMessage = "The password is wrong";
            if (err.code === "auth/invalid-password") textMessage = "The password is not valid";
            if (err.code === "auth/too-many-requests") textMessage = "To many requests :(";
            if (err.code === "auth/weak-password") textMessage = "Your password is weak"
            if (!textMessage) textMessage = "Something went wrong :("
            setError(true);
            setMsgError(textMessage);
        }
    }, [navigate, setUser])

    const login = useCallback(async (email, password) => {

        try {
            const data = await signInWithEmailAndPassword(auth, email, password);
            window.sessionStorage.setItem("user", JSON.stringify(data));
            navigate("/");
            const { user } = data;
            setUser(user);
            setError(false);
        } catch (err) {

            let textMessage = "";
            if (err.code === "auth/email-already-exists") textMessage = "This email already exists";
            if (err.code === "auth/missing-email") textMessage = "Insert a email";
            if (err.code === "auth/invalid-email") textMessage = "You need to insert a valid email";
            if (err.code === "auth/wrong-password") textMessage = "The password is wrong";
            if (err.code === "auth/invalid-password") textMessage = "The password is not valid";
            if (err.code === "auth/too-many-requests") textMessage = "Too many requests :(";
            if (!textMessage) textMessage = "Something went wrong :("
            setError(true);
            setMsgError(textMessage)
        }
    }, [navigate, setUser]);

    const logout = useCallback(async () => {
        try {
            await signOut(auth);
            setUser(null);
            setError(false);
            window.sessionStorage.removeItem("user");
            window.sessionStorage.removeItem("favorites");
        } catch (err) {
            setError(true);
            let textMessage = "Something went wrong :("
            setMsgError(textMessage)
        }
    }, [setUser])

    // send the favoite to firebase
    const addFavorite = useCallback(async (id) => {
        try {
            const documentRef = collection(db, "favorites");
            const data = await addDoc(documentRef, {
                favoriteGifId: id,
                userId: user.uid
            })
            setData(data);
            console.log("favorite", id, "added correctly")
        } catch (err) {
            console.log(err);
        }
    }, [user, setData])

    // delete a favorite 
    const deleteFavorite = useCallback(async (idGif) => {
        try {
            const favoriteToDelete = favorites.find(favorite => favorite.favoriteGifId === idGif);
            const { docId } = favoriteToDelete;
            const data = await deleteDoc(doc(db, "favorites", docId))
            setData(data);
        } catch (err) {
            console.log(err)
        }
    }, [favorites, setData])


    return {
        favorites,
        setFavorites,
        addFavorite,
        deleteFavorite,
        signUp,
        login,
        logout,
        error,
        msgError
    }
}