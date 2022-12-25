import { useState, useEffect } from "react"
import { useFavorites } from "../../hooks/useFavorites";
import { useAuth } from "../../hooks/useAuth"
import "./Favorite.css";
import { useNavigate } from "react-router-dom";

import { db } from "../../firebase";
import { addDoc, collection, query, where, getDocs } from "firebase/firestore"

export default function Favorite({ id }) {
  const { favorites, setFavorites } = useFavorites()
  const { user } = useAuth();
  const nagivate = useNavigate()

  const [data, setData] = useState(null);

  const uid = user.uid;
  // send the favorite to firebase;
  const handleClick = async (e) => {
    e.preventDefault();

    if (!user) nagivate("/login")
    try {
      const documentRef = collection(db, "favorites");
      const data = await addDoc(documentRef, {
        favoriteGifId: id,
        userId: uid
      })
      setData(data);
      console.log("favorite", id, "added correctly")
    } catch (err) {
      console.log(err);
    }
  };

  // get the favorites 
  useEffect(() => {
    const getFavorites = async () => {
      try {
        const q = query(collection(db, "favorites"), where("userId", "==", uid))
        const querySnapshot = await getDocs(q);
        let newFavoriteState = [];
        querySnapshot.forEach(doc => {
          newFavoriteState = [
            ...newFavoriteState,
            {
              ...doc.data()
            }
          ]
        })
        setFavorites(newFavoriteState)
      } catch (err) {
        console.log(err)
      }
    }
    getFavorites();
  }, [data, uid, setFavorites])

  return (
    <button className="thumb" onClick={handleClick}>

      <img src="/assets/add-like.svg" alt="thumb-like" />


      {/* <img src="/assets/alrealdy-liked.svg" alt="thumb-like" /> */}


    </button>
  );
}
