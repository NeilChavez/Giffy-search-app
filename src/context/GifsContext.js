import { useState, createContext } from "react";

const GifsContext = createContext();

function GifsContextProvider({ children }) {
  const [gifs, setGifs] = useState([]);

  return (
    <GifsContext.Provider value={{ gifs, setGifs }}>
      {children}
    </GifsContext.Provider>
  );
}

export default GifsContext;
export {GifsContextProvider };
