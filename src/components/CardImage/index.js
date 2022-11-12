import React from "react";
import { Link } from "react-router-dom";


 export function CardImage({ id, urlImage, alt: title }) {
  return (
    <Link to={`/photo/${id}`} className="Card-link">
      <figure className="Card-figure">
        <img src={urlImage} alt={title} className="Card-image" />
        <h2 className="Card-title">
          {title}
        </h2>
      </figure>
    </Link>
  );
}