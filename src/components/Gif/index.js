import { memo } from "react";
import { Link } from "react-router-dom";
import "./Gif.css";

function Gif({ id, urlGif, title }) {
  return (
    <Link to={`/gif/${id}`} className="Gif-link">
      <img src={urlGif} alt={title} className="Gif-img" />
      <h3 className="Gif-title">{title}</h3>
    </Link>
  );
}

export default memo(Gif);
