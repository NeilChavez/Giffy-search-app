import { useState, useEffect, useCallback } from "react";
import { db } from "../firebase";
import { addDoc, collection, query, where, getDocs, deleteDoc, doc } from "firebase/firestore"
import { AuthContext } from "../context/AuthContext";
import { useAuth } from "./useAuth";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export function useUser() {
    const { favorites, setFavorites , setData} = useContext(AuthContext);
    const { user } = useAuth();
    const nagivate = useNavigate();

    // send the favoite to firebase
    const addFavorite = useCallback(async (id) => {
        if (!user) return nagivate("/login");
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
    }, [user, nagivate, setData])

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
        deleteFavorite
    }
}