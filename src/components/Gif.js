export default function Gif({ id, urlGif, title }) {
  return (
    <figure>
      <img src={urlGif} alt={title} />
      <figcaption>{title}</figcaption>
    </figure>
  );
}
