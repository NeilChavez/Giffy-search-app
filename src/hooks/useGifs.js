import { useState, useEffect } from "react";
import { getGifs } from "../services/getGifs";

export function useGifs({ keyword} = {keyword: null}) {
  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    const keywordToSearch =
      keyword || localStorage.getItem("lastKeyword") || "Avengers";
    setLoading(true);
    getGifs({ keyword: keywordToSearch }).then((res) => {
      setGifs(res);
      localStorage.setItem("lastKeyword", keywordToSearch);
      setLoading(false);
    });
  }, [keyword]);
  return { loading, gifs };
}
