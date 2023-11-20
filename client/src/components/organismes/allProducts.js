import React from "react";
import { Cards, Text } from "../atomes";
import products from "../../data/products";

const produitVinRouge = require("../../assets/produitVinRouge.png");
const produitVinBlanc = require("../../assets/produitVinBlanc.png");
const produitChampagne = require("../../assets/produitChampagne.png");

const Boutique = ({ search }) => {
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.type.toLowerCase().includes(search.toLowerCase()) ||
      product.price.toLowerCase().includes(search.toLowerCase()) ||
      product.oldPrice.toLowerCase().includes(search.toLowerCase()) ||
      product.pays.toLowerCase().includes(search.toLowerCase()) ||
      product.typeColor.toLowerCase().includes(search.toLowerCase()) ||
      product.color.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full p-10 flex flex-row flex-wrap justify-center">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((i) => (
          <div key={i.id} className="mx-4 mb-10 shadow-lg">
            <Cards.Produit
              id={i.id}
              bg={
                i.type === "Rouge"
                  ? produitVinRouge
                  : i.type === "Blanc"
                  ? produitVinBlanc
                  : i.type === "Champagne"
                  ? produitChampagne
                  : null
              }
              color={i.color}
              typeColor={i.typeColor}
              type={i.type}
              name={i.name}
              pays={i.pays}
              oldPrice={i.oldPrice}
              price={i.price}
            />
          </div>
        ))
      ) : (
        <div>
          <Text.error>
            Aucun produit ne corresponds à votre recherche...
          </Text.error>
        </div>
      )}
    </div>
  );
};

export { Boutique };
