import { useState, useEffect, useContext } from "react";
import { getGifs } from "../services/getGifs";
import GifsContext from "../context/GifsContext";
import { RATINGS, LANGUAGES } from "../settings/settings";

const INITIAL_PAGE = 0;
export function useGifs(
  { keyword, rating = RATINGS[0], language = LANGUAGES[0] } = { keyword: null }
) {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);
  // const [gifs, setGifs] = useState([]);
  const { gifs, setGifs } = useContext(GifsContext);

  const keywordToSearch =
    keyword || localStorage.getItem("lastKeyword") || "Avengers";

  useEffect(() => {
    setLoading(true);
    getGifs({ keyword: keywordToSearch, rating, language }).then((res) => {
      setGifs(res);
      localStorage.setItem("lastKeyword", keywordToSearch);
      setLoading(false);
    });
  }, [keyword, setGifs, keywordToSearch, rating, language]);

  useEffect(() => {
    if (page === 0) return;
    setLoading(true);
    getGifs({ keyword: keywordToSearch, page: page, rating, language }).then((res) => {
      setGifs((prevRes) => prevRes.concat(res));
      setLoading(false);
    });
  }, [page, keywordToSearch, setGifs, rating, language]);
  return { loading, gifs, setPage };
}
