import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Gif from "../../components/Gif";
import Spinner from "../../components/Spinner";
import { useSingleGif } from "../../hooks/useSingleGif";

export default function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { gif, isError, isLoading } = useSingleGif({ id });

  useEffect(() => {
    if (isError) {
      navigate(`/404`);
    }
  }, [isError, navigate]);
  
  if (isLoading) return <Spinner />;
  if (!gif) return null;
  const { id: identification, title, urlGif } = gif;

  return (
    <div>
      <Gif id={identification} title={title} urlGif={urlGif} />
    </div>
  );
}
