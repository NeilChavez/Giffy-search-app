import { useParams } from "react-router-dom";
import { useGifs } from "../../hooks/useGifs";

import ListOfGifs from "../../components/ListOfGifs";
import Spinner from "../../components/Spinner";

export default function SearchPage() {
  const { keyword } = useParams();
  const { gifs, loading } = useGifs({ keyword: keyword });

  return (
    <section className="ListOfGifs">
      {loading ? <Spinner /> : <ListOfGifs gifs={gifs} />}
    </section>
  );
}
