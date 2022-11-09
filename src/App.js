import { Link, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App-content">
      <Link to="/">
        Logo
      </Link>

      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/search/:keyword" element={<div>Search keyword</div>} />
        <Route path="/gif/:id" element={<div>show a gif</div>} />
      </Routes>
    </div>
  );
}

export default App;
