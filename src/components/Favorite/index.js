import "./Favorite.css";

export default function Favorite({ id }) {
  const handleClick = (e) => {
    e.preventDefault();
    console.log("hai cliccato il gif con id", id);
  };

  return (
    <button className="heart" onClick={handleClick}>
      <span>👍 </span>
    </button>
  );
}
