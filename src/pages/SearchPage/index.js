import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useGifs } from "../../hooks/useGifs";
import ListOfGifs from "../../components/ListOfGifs";
import Spinner from "../../components/Spinner";
import { useIsNearToScreen } from "../../hooks/useIsNearToScreen";
import "./SearchPage.css";

export default function SearchPage() {
  const { keyword } = useParams();
  const { gifs, loading, setPage } = useGifs({ keyword: keyword });
  const externalRef = useRef();
  const { isNearToScreen } = useIsNearToScreen({
    once: false,
    externalRef: loading ? null : externalRef,
  });

  useEffect(() => {
    if (isNearToScreen) setPage((prevPage) => prevPage + 1);
    //
  }, [isNearToScreen, setPage]);
  //isNearToScreen, setPage]
  return (
    <>
    <h2>{keyword}</h2>
      <section className="ListOfGifs">
        <ListOfGifs gifs={gifs} />
        {loading ? <Spinner/> : null}
      </section>
      <div
        ref={externalRef}
        style={{ background: "skyblue", height: "1rem" }}
      ></div>
    </>
  );
}
