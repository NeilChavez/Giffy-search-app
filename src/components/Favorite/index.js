import { useUser } from "../../hooks/useUser"
import "./Favorite.css";

export default function Favorite({ id }) {

  const { addFavorite, favorites } = useUser();

  const handleClick = async (e) => {
    e.preventDefault();
    addFavorite(id)
  };

  return (
    <button className="thumb" onClick={handleClick}>

      <img src="/assets/add-like.svg" alt="thumb-like" />

    </button>
  );
}
