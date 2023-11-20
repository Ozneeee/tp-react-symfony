import React, { useState, useEffect } from "react";
import { Button, Cards, Text } from "../atomes";
import client from "../../api/client";
import products from "../../data/products";

const produitVinRouge = require("../../assets/produitVinRouge.png");
const produitVinBlanc = require("../../assets/produitVinBlanc.png");
const produitChampagne = require("../../assets/produitChampagne.png");

const News = () => {
  return (
    <div className="px-28 mt-20 overflow-hidden">
      <div className="flex flex-row items-center mb-8">
        <div>
          <Text.h4>Nouveautés</Text.h4>
        </div>
        <div className="w-full h-[2px] bg-gray-300 mx-6"></div>
      </div>
      <div className="flex flex-row mb-6 overflow-x-auto">
        {products.slice(0, 5).map((i) => {
          return (
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
          );
        })}
      </div>
    </div>
  );
};

export { News };
