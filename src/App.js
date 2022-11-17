import "./App.css";
import Gif from "./components/Gif";
import { useGifs } from "./hooks/useGifs";

function App() {
const {gifs, loading} = useGifs();

  return (
    <div>
      {gifs.map(({ id, urlGif, title }) => (
        <Gif key={id} id={id} urlGif={urlGif} title={title} />
      ))}
    </div>
  );
}

export default App;
