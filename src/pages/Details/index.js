import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Gif from "../../components/Gif";
import Spinner from "../../components/Spinner";
import { useSingleGif } from "../../hooks/useSingleGif";
import { Helmet } from "react-helmet";
import formatDistance from 'date-fns/formatDistance'

export default function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { gif, isError, isLoading } = useSingleGif({ id });

  useEffect(() => {
    if (isError) {
      navigate(`/404`);
    }
  }, [isError, navigate, gif]);


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
  const { id: identification, title, urlGif, import_datetime, uploadedbyUser } = gif;
  
  const timeAgo = formatDistance(Date.now(), new Date(import_datetime));
  let nameUser = ""
  !uploadedbyUser
    ? nameUser = "an unknown User"
    : nameUser = `"${uploadedbyUser.display_name}"`

  return (
    <>
      <Helmet>
        <title>{title} - Giffy</title>
        <meta name="description" content={`${title}`}></meta>
      </Helmet>

      <section className="Section-details container">
        <div>
          <h3>{title}</h3>
          <Gif id={identification} title={title} urlGif={urlGif} />
        </div>
        <article className="Details-description">
          <p>
            This gif was uploaded by {nameUser} {timeAgo} ago.
          </p>
        </article>
      </section>
    </>
  );
}
