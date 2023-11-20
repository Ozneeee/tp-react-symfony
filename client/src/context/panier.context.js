import React, { useContext, useState, useEffect } from "react";
import client from "../api/client";
import { v4 as uuidv4 } from "uuid";

const PanierContext = React.createContext();

export function PanierContextProvider({ children }) {
  const [panier, setPanier] = useState([]);

  return (
    <PanierContext.Provider
      value={{
        panier,
        setPanier,
      }}
    >
      {children}
    </PanierContext.Provider>
  );
}

export const usePanier = () => useContext(PanierContext);
