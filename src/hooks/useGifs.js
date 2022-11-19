import { useState, useEffect, useContext } from "react";
import { getGifs } from "../services/getGifs";
import GifsContext from "../context/GifsContext"

export function useGifs({ keyword} = {keyword: null}) {
  const [loading, setLoading] = useState(false);
  // const [gifs, setGifs] = useState([]);
  const {gifs, setGifs} = useContext(GifsContext)

  useEffect(() => {
    const keywordToSearch =
      keyword || localStorage.getItem("lastKeyword") || "Avengers";
    setLoading(true);
    getGifs({ keyword: keywordToSearch }).then((res) => {
      setGifs(res);
      localStorage.setItem("lastKeyword", keywordToSearch);
      setLoading(false);
    });
  }, [keyword, setGifs]);
  return { loading, gifs };
}
