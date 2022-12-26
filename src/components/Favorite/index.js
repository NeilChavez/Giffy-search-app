import { useState } from "react"
import { useUser } from "../../hooks/useUser"
import { useAuth } from "../../hooks/useAuth"
import Modal from "../Modal"
import Login from "../Login"
import "./Favorite.css"

export default function Favorite({ id }) {
  const { addFavorite, deleteFavorite, favorites } = useUser();
  const { user } = useAuth();

  const [showModal, setShowModal] = useState(false);

  const isFavorite = favorites.some(favorite => favorite.favoriteGifId === id);

  const handleClick = (e) => {
    e.preventDefault()
    e.stopPropagation();

    if (!user) {
      console.log('hai cliccato, ma non sei log in, quindi apri modale')
      return setShowModal(true)
    };

    if (isFavorite) {
      deleteFavorite(id)
    } else {
      addFavorite(id)
    }
  };

  const handleClose = () => {
    setShowModal(false);
  }
  const handleLogin = ()=>{
    setShowModal(false);
  }

  const thumbUp = isFavorite
    ? "/assets/alrealdy-liked.svg"
    : "/assets/add-like.svg"


  return (
    <>
      <button className="thumb" onClick={handleClick}>
        <img src={thumbUp} alt="thumb-like" />
      </button>
      {showModal &&
        <Modal onClose={handleClose}>
          <Login onLogin={handleLogin}/>
        </Modal>}
    </>
  );
}
