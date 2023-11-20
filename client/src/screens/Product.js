import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import { Header, Footer } from "../components/mollecules";
import { Button, Cards, Text } from "../components/atomes";
import { usePanier } from "../context";

const bouteilleRouge = require("../assets/bouteilleRouge.png");
const bouteilleBlanc = require("../assets/bouteilleBlanc.png");
const bouteilleChampagne = require("../assets/bouteilleChampagne.png");

function Product() {
  const { id } = useParams();

  const { panier, setPanier } = usePanier();

  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col justify-between">
        <div>
          <Header.LaptopHeader />
          <div className="m-20">
            <Text.error align={"center"}>Produit non trouvé...</Text.error>
          </div>
        </div>
        <div>
          <Footer.laptopFooter />
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="min-h-screen flex flex-col justify-between">
        <Header.LaptopHeader />
        <div className="mx-20 flex flex-row justify-between items-center">
          <img
            className="w-40"
            src={
              product.type === "Rouge"
                ? bouteilleRouge
                : product.type === "Blanc"
                ? bouteilleBlanc
                : product.type === "Champagne"
                ? bouteilleChampagne
                : null
            }
            alt="Image de la bouteille"
          />
          <div className="w-1/2">
            <Text.p fontSize={16}>
              Profitez de notre bouteille de <b>{product.name}</b> au prix de{" "}
              <b>{product.price}</b> au lieu de <b>{product.oldPrice}</b>.
              D'origine de <b>{product.pays}</b>, ce <b>{product.type}</b>{" "}
              d'exeption est parfait avec un plat principal comme avec un
              désert.
            </Text.p>
            <div className="mt-6">
              <Button.Primary
                value={"Ajouter au panier"}
                onClick={() => setPanier([...panier, product])}
              />
            </div>
          </div>
        </div>
        <Footer.laptopFooter />
      </div>
    </div>
  );
}

export default Product;
