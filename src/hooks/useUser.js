import { useState, useEffect, useCallback } from "react";
import { db } from "../firebase";
import { addDoc, collection, query, where, getDocs, deleteDoc, doc } from "firebase/firestore"
import { AuthContext } from "../context/AuthContext";
import { useAuth } from "./useAuth";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export function useUser() {
    const { favorites, setFavorites } = useContext(AuthContext);
    const { user } = useAuth();
    const [data, setData] = useState(null);
    const nagivate = useNavigate();

    // send the favoite to firebase
    const addFavorite = useCallback(async (id) => {
        if (!user) nagivate("/login");
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
    }, [user, nagivate])

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
    }, [favorites])


    // get the favorites 
    useEffect(() => {
        const getFavorites = async () => {
            try {
                const q = query(collection(db, "favorites"), where("userId", "==", user.uid))
                const querySnapshot = await getDocs(q);
                let newFavoriteState = [];
                querySnapshot.forEach(doc => {
                    newFavoriteState = [...newFavoriteState, { ...doc.data(), docId: doc.id }]
                })
                setFavorites(newFavoriteState)
                console.log(newFavoriteState)
                window.sessionStorage.setItem("favorites", JSON.stringify(newFavoriteState))
            } catch (err) {
                console.log(err)
            }
        }
        getFavorites();
    }, [data, setFavorites, user])



    return {
        favorites,
        setFavorites,
        addFavorite,
        deleteFavorite
    }
}