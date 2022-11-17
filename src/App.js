import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./App.css"

function App() {
  const [gifs, setGifs] = useState([]);


  console.log(process.env);
  return <div className="App-content">{process.env.GIFFY_APY_KEY}</div>;
}

export default App;
