import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Gif from "../../components/Gif";
import { useGifs } from "../../hooks/useGifs";

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
        navigate(`/search/${keyword}`)
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
      {loading ? (
        <p>LOADING...</p>
      ) : (
        gifs.map(({ id, urlGif, title }) => (
          <Gif key={id} id={id} urlGif={urlGif} title={title} />
        ))
      )}
    </div>
  );
}
