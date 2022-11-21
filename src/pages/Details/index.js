import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Gif from "../../components/Gif";
import Spinner from "../../components/Spinner";
import { useSingleGif } from "../../hooks/useSingleGif";
import { Helmet } from "react-helmet";

export default function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { gif, isError, isLoading } = useSingleGif({ id });

  useEffect(() => {
    if (isError) {
      navigate(`/404`);
    }
  }, [isError, navigate]);

  if (isLoading)
    return (
      <>
        <Helmet>
          <title>Loading...</title>
        </Helmet>
        <Spinner />
      </>
    );
  if (!gif) return null;
  const { id: identification, title, urlGif } = gif;

  return (
    <div>
      <Helmet>
        <title>{title} - Giffy</title>
        <meta name="description" content={`${title}`}></meta>
      </Helmet>
      <Gif id={identification} title={title} urlGif={urlGif} />
    </div>
  );
}
