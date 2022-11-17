import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import "./App.css";

=======
import "./App.css"
>>>>>>> a36c600 (Add deployment on vercel)

function App() {
  const [gifs, setGifs] = useState([]);

  // useEffect(() => {
  //   fetch(
  //     // `https://api.giphy.com/v1/gifs/search?api_key=qFJI66lO4rOfZiiOV8a9XlmyMYOrLJfF&q=&limit=25&offset=0&rating=g&lang=en`
  //   )
  //     // .then((res) => res.json())
  //     // .then((json) => console.log(json));
  // }, []);
  console.log(process.env);
  return <div className="App-content">{process.env.GIFFY_APY_KEY}</div>;
}

export default App;
