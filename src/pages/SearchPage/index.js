import { useParams } from "react-router-dom";
import { useGifs } from "../../hooks/useGifs";

import ListOfGifs from "../../components/ListOfGifs";

export default function SearchPage() {
  const { keyword } = useParams();
  const { gifs, loading } = useGifs({ keyword: keyword });

  return <div>
    <ListOfGifs gifs={gifs}/>
  </div>;
}
