import React, { useContext, useState, useEffect } from "react";
import client from "../api/client";

const ProductsContext = React.createContext();

export function ProductsContextProvider({ children }) {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const res = await client.get("http://localhost:8000/products");
      if (res.data) {
        const token = res.data;
        setProducts(token);
        console.log("Fetch des produits validé :", token);
      } else {
        console.log("Fetch des produits failed");
      }
    } catch (error) {
      console.log("Erreur getProducts :", error.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        getProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export const useProducts = () => useContext(ProductsContext);
