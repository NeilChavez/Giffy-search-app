import { useParams } from "react-router-dom";
import Gif from "../../components/Gif";
import useGlobalGifs from "../../hooks/useGlobalGifs";
import { getGifById } from "../../services/getGifById";

export default function Details() {
  const { id } = useParams();
  const gifs = useGlobalGifs();
  const gifToRender = getGifById(gifs, id);

  if (!gifToRender) return null;

  const { id: identification, title, urlGif } = gifToRender;

  return (
    <div>
      <Gif id={identification} title={title} urlGif={urlGif} />
    </div>
  );
}
