import { useParams } from "react-router-dom";
import Gif from "../../components/Gif";
import Spinner from "../../components/Spinner";
import { useSingleGif } from "../../hooks/useSingleGif";

export default function Details() {
  const { id } = useParams();
  const { gif } = useSingleGif({ id });

  if (!gif) return <Spinner />;

  const { id: identification, title, urlGif } = gif;

  return (
    <div>
      <Gif id={identification} title={title} urlGif={urlGif} />
    </div>
  );
}
