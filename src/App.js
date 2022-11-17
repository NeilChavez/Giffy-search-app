import { useEffect, useState } from "react";
import { API_URL, API_KEY } from "./settings/settings";
import "./App.css";
import Gif from "./components/Gif";

function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    const endpoint = `${API_URL}/gifs/search?api_key=${API_KEY}&q=panda&limit=25&offset=0&rating=g&lang=en`;
    fetch(endpoint)
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        const { data } = json;
        const GifsData = data.map((singleGif) => {
          const { id, title, images } = singleGif;
          const urlGif = images.downsized_medium.url;
          return { id, title, urlGif };
        });
        setGifs(GifsData);
      })
      .catch((err) => console.log(err));
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
