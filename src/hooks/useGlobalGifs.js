import { useContext } from "react";
import gifContext from "../context/GifsContext";

export default function useGlobalGifs() {
  const { gifs } = useContext(gifContext);
  return gifs;
}
