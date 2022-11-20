import { useState, useEffect, useContext } from "react";
import { getGifs } from "../services/getGifs";
import GifsContext from "../context/GifsContext";

export function useGifs({ keyword, page = 0 } = { keyword: null }) {
  const [loading, setLoading] = useState(false);
  // const [gifs, setGifs] = useState([]);
  const { gifs, setGifs } = useContext(GifsContext);

  const keywordToSearch =
    keyword || localStorage.getItem("lastKeyword") || "Avengers";

  useEffect(() => {
    setLoading(true);
    getGifs({ keyword: keywordToSearch }).then((res) => {
      setGifs(res);
      localStorage.setItem("lastKeyword", keywordToSearch);
      setLoading(false);
    });
  }, [keyword, setGifs, keywordToSearch]);

  useEffect(() => {
    if (page === 0) return;
    setLoading(true);
    getGifs({ keyword: keywordToSearch, page: page }).then((res) => {
      setGifs((prevRes) => prevRes.concat(res));
      setLoading(false);
    });
  }, [page, keywordToSearch, setGifs]);
  return { loading, gifs };
}
