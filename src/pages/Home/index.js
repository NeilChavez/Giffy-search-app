import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../../components/Spinner";
import ListOfGifs from "../../components/ListOfGifs";
import { useGifs } from "../../hooks/useGifs";
import TrendingSearchTerms from "../../components/TrendingSearchTerms"
import "./Home.css"

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const { gifs, loading } = useGifs();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (keyword) {
      navigate(`/search/${keyword}`);
    } else {
      //TODO getisci l'errore del fomulario
      alert("you need to fill the form");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search a gif..."
          onChange={handleChange}
          value={keyword}
        />
      </form>
      <div className="App-main">
        <section className="ListOfGifs">
          {loading ? <Spinner /> : <ListOfGifs gifs={gifs} />}
        </section>
        <section className="TrendingSearchTerms">
          <TrendingSearchTerms/>
        </section>
      </div>
    </div>
  );
}
