import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import "./App.css";
import Details from "./pages/Details";
import { GifsContextProvider } from "./context/GifsContext";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <nav className="App-nav">
        <Link className="Link-home" to="/">
          <img
            src="/assets/giffy-logo.png"
            className="Logo-img"
            alt="main logo"
          />
        </Link>
      </nav>
      <GifsContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:keyword">
            <Route path=":rating" element={<SearchPage />}>
              <Route path=":language" element={<SearchPage />} />
              <Route path="" element={<SearchPage />} />
            </Route>
            <Route path="" element={<SearchPage />} />
          </Route>
          <Route path="/gif/:id" element={<Details />} />
          <Route path="/404" element={<h2>GIF NOT FOUND :( - 404</h2>} />
        </Routes>
      </GifsContextProvider>
    </div>
  );
}

export default App;
