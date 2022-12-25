import { useUser } from "../../hooks/useUser"
import "./Favorite.css";

export default function Favorite({ id }) {

  const { addFavorite, deleteFavorite, favorites } = useUser();

  const isFavorite = favorites.some(favorite => favorite.favoriteGifId === id);

  const handleClick = async (e) => {
    e.preventDefault();
    if (isFavorite) {
      deleteFavorite(id)
    } else {
      addFavorite(id)
    }
  };

  const [thumbUp] = isFavorite
    ? ["/assets/alrealdy-liked.svg"]
    : ["/assets/add-like.svg"]


  return (
    <button className="thumb" onClick={handleClick}>

      <img src={thumbUp} alt="thumb-like" />
    </button>
  );
}
