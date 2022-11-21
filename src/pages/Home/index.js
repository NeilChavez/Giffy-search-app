import { useNavigate } from "react-router-dom";
import Spinner from "../../components/Spinner";
import ListOfGifs from "../../components/ListOfGifs";
import { useGifs } from "../../hooks/useGifs";
import TrendingSearchTerms from "../../components/TrendingSearchTerms";
import SearchForm from "../../components/SearchForm";
import "./Home.css";
import { useCallback } from "react";

export default function Home() {
  const { gifs, loading } = useGifs();
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    ({ keyword }) => {
      if (keyword) {
        navigate(`/search/${keyword}`);
      } else {
        //TODO getisci l'errore del fomulario
        alert("you need to fill the form");
      }
    },
    [navigate]
  );
  return (
    <div>
      <SearchForm handleSubmit={handleSubmit} />
      <div className="App-main">
        <section className="ListOfGifs">
          {loading ? <Spinner /> : <ListOfGifs gifs={gifs} />}
        </section>
        <TrendingSearchTerms />
      </div>
    </div>
  );
}
