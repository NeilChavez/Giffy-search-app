import { useState } from "react";
import Gif from "./components/Gif";
import { useGifs } from "./hooks/useGifs";
import "./App.css";

function App() {
  const [keyword, setKeyword] = useState("");
  const [keywordToSearch, setKeyWorkToSearch] = useState("");
  const { gifs, loading } = useGifs({ keyword: keywordToSearch });

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (keyword) {
      alert("send the form");
      setKeyWorkToSearch(keyword);
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

export default App;
