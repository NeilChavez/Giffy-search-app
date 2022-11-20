import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGifs } from "../../hooks/useGifs";
import ListOfGifs from "../../components/ListOfGifs";
import Spinner from "../../components/Spinner";
import { useIsNearToScreen } from "../../hooks/useIsNearToScreen";
import "./SearchPage.css";

const INITIAL_PAGE = 0;

export default function SearchPage() {
  const { keyword } = useParams();

  const [page, setPage] = useState(INITIAL_PAGE );

  const { gifs, loading } = useGifs({ keyword: keyword, page: page });
  const { isNearToScreen, element } = useIsNearToScreen({ once: false });

  useEffect(() => {

    if (isNearToScreen) setPage((prevPage) => prevPage + 1);

  }, [isNearToScreen]);

  return (
    <>
      <section className="ListOfGifs">
        {loading ? <Spinner /> : <ListOfGifs gifs={gifs} />}
      </section>
      {console.log(page)}
      <div
        style={{ background: "skyblue", height: "1rem" }}
        ref={element}
      ></div>
    </>
  );
}
