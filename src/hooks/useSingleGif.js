import { useEffect, useState } from "react";
import { getSingleGif } from "../services/getSingleGif";
import useGlobalGifs from "./useGlobalGifs";

export function useSingleGif({ id }) {
  const gifs = useGlobalGifs();
  const gifFromCache = gifs.find((singleGif) => singleGif.id === id);
  const [gif, setGif] = useState(gifFromCache);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!gif) {
      setIsLoading(true);
      getSingleGif({ id })
        .then((res) => {
            setGif(res)
            console.log(res)
        })
        .catch(() => {
          setIsError(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [gif, id]);
  return { gif, isError, isLoading };
}
