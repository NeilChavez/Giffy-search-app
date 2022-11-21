import { useParams } from "react-router-dom";
import Gif from "../../components/Gif";
import Spinner from "../../components/Spinner";
import { useSingleGif } from "../../hooks/useSingleGif";

export default function Details() {
  const { id } = useParams();
  const { gif, isError, isLoading } = useSingleGif({ id });

  if(isError) return <div>It happened an Erro :( </div>
  if (isLoading) return <Spinner />;
  if(!gif) return null;
  const { id: identification, title, urlGif } = gif;

  return (
    <div>
      <Gif id={identification} title={title} urlGif={urlGif} />
    </div>
  );
}
