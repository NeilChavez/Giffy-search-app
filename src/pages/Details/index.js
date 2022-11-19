import { useContext } from "react";
import { useParams } from "react-router-dom";
import Gif from "../../components/Gif";
import gifContext from "../../context/GifsContext";
import { getGifById } from "../../services/getGifById";

export default function Details() {
  const { id } = useParams();
  const { gifs } = useContext(gifContext);
  const gifToRender = getGifById(gifs, id);

  const { id: identification, title, urlGif } = gifToRender;
  return (
    <div>
      <Gif id={identification} title={title} urlGif={urlGif} />
    </div>
  );
}
