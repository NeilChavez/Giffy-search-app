import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";


function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIFFY_APY_KEY}&q=&limit=25&offset=0&rating=g&lang=en`
    )
      .then((res) => res.json())
      .then((json) => console.log(json));
  }, []);

  return (
    <div className="App-content">
      <Link to="/">Logo</Link>
    </div>
  );
}

export default App;
