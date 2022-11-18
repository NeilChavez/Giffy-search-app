import Gif from "../Gif";

export default function ListOfGifs({ gifs }) {
  return (
    <>
      {gifs.map(({ id, urlGif, title }) => (
        <Gif key={id} id={id} urlGif={urlGif} title={title} />
      ))}
    </>
  );
}
