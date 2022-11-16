import CardImage from "../CardImage";
import "./ListOfCardsImage.css"

export default function ListOfCardsImage({ images }) {
  return (
    <>
      {images.map(({ urlImage, id, alt, photographer }) => (
        <CardImage
          key={id}
          id={id}
          urlImage={urlImage}
          alt={alt}
          photographer={photographer}
        />
      ))}
    </>
  );
}
