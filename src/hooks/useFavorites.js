import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export function useFavorites() {
    const { favorites, setFavorites } = useContext(AuthContext);
    return {
        favorites,
        setFavorites
    }
}