import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import "./App.css";
import Details from "./pages/Details";

function App() {
  return (
    <div className="App">
      <nav className="App-nav">
        <Link className="Link-home" to="/">
          <img src="/assets/giffy-logo.png" className="Logo-img" alt="main logo" />
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:keyword" element={<SearchPage />} />
        <Route path="/gif/:id" element={<Details/>}/>
      </Routes>
    </div>
  );
}

export default App;
