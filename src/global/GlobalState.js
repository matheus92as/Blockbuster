import React, { useState } from "react";
import { GlobalContext } from "./GlobalContext";

export default function GlobalState(props) {
  const [genre_ids, setGenre_ids] = useState([]);

  const states = { genre_ids };
  const setter = { setGenre_ids };

  return (
    <GlobalContext.Provider value={{ states, setter }}>
      {props.children}
    </GlobalContext.Provider>
  );
}
