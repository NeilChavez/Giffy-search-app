import { useState, createContext } from "react";

const gifContext = createContext();

function GifContextProvider({ children }) {
  const [gifs, setGifs] = useState([]);

  return (
    <gifContext.Provider value={{ gifs, setGifs }}>
      {children}
    </gifContext.Provider>
  );
}

export default gifContext;
export {GifContextProvider };
