import { useState, useEffect } from "react";
import { getGifs } from "../services/getGifs";
import { API_KEY, API_URL } from "../settings/settings";

export function useGifs() {
  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    const endpoint = `${API_URL}/gifs/search?api_key=${API_KEY}&q=panda&limit=25&offset=0&rating=g&lang=en`;
    setLoading(true);
    getGifs(endpoint).then((res) => {
      setGifs(res);
      setLoading(false);
    });
  }, []);
  return { loading, gifs };
}
