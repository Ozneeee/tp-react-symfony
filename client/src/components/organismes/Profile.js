import React, { useEffect, useState } from "react";
import { Button, Text } from "../atomes";
import { useAuth, usePanier } from "../../context";
import { useNavigate } from "react-router-dom";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

const userPic = require("../../assets/user.png");

const Profil = () => {
  const { profile, signOut } = useAuth();
  const { panier, setPanier } = usePanier();

  const navigate = useNavigate();

  const deleteItem = (id) => {
    const updatedPanier = panier.filter((item) => item.id !== id);
    setPanier(updatedPanier);
  };

  const total = panier
    .reduce((acc, item) => acc + parseFloat(item.price), 0)
    .toFixed(2);

  const commande = () => {
    setPanier([]);
    navigate("/home");
  };

  return (
    <div className="m-20 flex flex-row justify-between">
      <div className="w-1/2 bg-slate-300 mr-4 shadow-xl shadow-gray-400 flex flex-col items-center p-4">
        <div className="w-72 flex flex-col items-center">
          <div
            className="w-40 h-40 rounded-full hover:opacity-40 cursor-pointer"
            style={{
              background: `url(${userPic})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="mt-4">
            <Text.h3 align={"center"}>{profile.username}</Text.h3>
          </div>
        </div>
        <div className="mt-12">
          <div className="self-start flex flex-row justify-between mb-4">
            <Text.p>Informations de paiement : </Text.p>
            <div className="cursor-pointer">
              <FaEdit size={18} color="#3B82F6" />
            </div>
          </div>
          <div className="w-72 h-40 bg-blue-500 rounded-md p-4">
            <Text.h4 color={"white"}>1234 5126 4865 6521 12 </Text.h4>
            <Text.h4 color={"white"}>{profile.username}</Text.h4>
            <Text.h4 color={"white"}>11/25</Text.h4>
            <Text.h4 color={"white"}>123</Text.h4>
          </div>
        </div>
        <div className="w-72 mt-12">
          <div className="self-start flex flex-row justify-between mb-4">
            <Text.p>Adresse de livraison : </Text.p>
            <div className="cursor-pointer">
              <FaEdit size={18} color="#3B82F6" />
            </div>
          </div>
          <div>
            <Text.h3>15 rue de Paris, 75000, France</Text.h3>
          </div>
        </div>
        <div className="w-72 mt-12">
          <div className="self-start flex flex-row justify-between mb-4">
            <Text.p>Mot de passe : </Text.p>
            <div className="cursor-pointer">
              <FaEdit size={18} color="#3B82F6" />
            </div>
          </div>
          <div>
            <Text.h3>***************</Text.h3>
          </div>
        </div>
        <div className="mt-12">
          <Button.Primary value={"Se déconnecter"} onClick={() => signOut()} />
        </div>
      </div>
      {panier.length <= 0 ? (
        <div className="w-1/2 bg-slate-300 p-4 ml-4 shadow-xl shadow-gray-400 flex flex-col items-center justify-between">
          <Text.h3 align={"center"}>Votre panier</Text.h3>
          <div>
            <Text.error align={"center"}>Votre panier est vide...</Text.error>
          </div>
          <div>
            <Button.Primary
              value={"Aller à la boutique"}
              onClick={() => navigate("/shop")}
            />
          </div>
        </div>
      ) : (
        <div className="w-1/2 bg-slate-300 p-4 ml-4 shadow-xl shadow-gray-400 flex flex-col justify-between">
          <div>
            <Text.h3 align={"center"}>Votre panier</Text.h3>
            {panier &&
              panier.map((i) => {
                return (
                  <div
                    key={i.id}
                    className="w-full bg-slate-100 my-4 p-2 flex flex-row justify-between"
                  >
                    <Text.p fontSize={14}>{i.name}</Text.p>
                    <Text.p fontSize={14}>{i.price}</Text.p>
                    <div
                      className="cursor-pointer"
                      onClick={() => deleteItem(i.id)}
                    >
                      <FaTrashAlt size={20} color="red" />
                    </div>
                  </div>
                );
              })}
          </div>
          <div>
            <div className="flex flex-row justify-between border-t-1 border-[#8c8c8c] p-4">
              <Text.h3>Sous-total</Text.h3>
              <Text.h3>{total}€</Text.h3>
            </div>
            <div className="mt-4">
              <Button.Primary
                center={true}
                value={"Passer commande"}
                onClick={() => commande()}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export { Profil };
