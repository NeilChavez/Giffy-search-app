import { useState, useEffect } from "react";
import { getGifs } from "../services/getGifs";
import { API_KEY, API_URL } from "../settings/settings";

export function useGifs({keyword} = {}) {
  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState([]);
  
  useEffect(() => {
    const keywordToSearch = keyword || "Avengers"
    const endpoint = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keywordToSearch}&limit=25&offset=0&rating=g&lang=en`;
    setLoading(true);
    getGifs(endpoint).then((res) => {
      setGifs(res);
      setLoading(false);
    });
  }, [keyword]);
  return { loading, gifs };
}
