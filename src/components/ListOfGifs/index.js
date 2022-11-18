import Gif from "../Gif";
import "./ListOfGifs.css"

export default function ListOfGifs({ gifs }) {
  return (
    <section className="ListOfGifs">
      {gifs.map(({ id, urlGif, title }) => (
        <Gif key={id} id={id} urlGif={urlGif} title={title} />
      ))}
    </section>
  );
}
