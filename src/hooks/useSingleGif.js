import { useEffect, useState } from "react";
import { getSingleGif } from "../services/getSingleGif";
import useGlobalGifs from "./useGlobalGifs";

export function useSingleGif({ id }) {
  const gifs = useGlobalGifs();
  const gifFromCache = gifs.find((singleGif) => singleGif.id === id);
  const [gif, setGif] = useState(gifFromCache);

  useEffect(() => {
    if (!gif) {
      getSingleGif({ id }).then((res) => setGif(res));
    }
  }, [gif, id]);
  return {gif}
}
