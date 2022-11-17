import { useEffect, useState } from "react";
import { API_URL, API_KEY } from "./settings/settings";
import "./App.css";
import Gif from "./components/Gif";
import { getGifs } from "./services/getGifs";

function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    const endpoint = `${API_URL}/gifs/search?api_key=${API_KEY}&q=panda&limit=25&offset=0&rating=g&lang=en`;
    getGifs(endpoint).then((res) => setGifs(res));
  }, []);
  return (
    <div>
      {gifs.map(({ id, urlGif, title }) => (
        <Gif key={id} id={id} urlGif={urlGif} title={title} />
      ))}
    </div>
  );
}

export default App;
