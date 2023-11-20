import React, { useState } from "react";
import { Button, Text, Input } from "../atomes";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth.context";

const logo = require("../../assets/logo.png");

function LaptopHeader() {
  const navigate = useNavigate();

  const { isLoggedIn, profile } = useAuth();

  return (
    <header className="w-full h-20 bg-[#212121] flex flex-row justify-around items-center">
      <div className="mr-14">
        <img src={logo} alt="Logo de l'entreprise" width={100} height={100} />
      </div>
      <div className="flex flex-row items-center">
        <div className="mr-3 cursor-pointer" onClick={() => navigate("/home")}>
          <Text.p fontSize={18} color="#fff">
            Accueil
          </Text.p>
        </div>
        <div className="cursor-pointer" onClick={() => navigate("/shop")}>
          <Text.p color="#fff" fontSize={18}>
            Boutique
          </Text.p>
        </div>
      </div>
      <div className="flex flex-row items-center">
        {!isLoggedIn ? (
          <div className="mr-10 cursor-pointer">
            <Button.Primary
              value={"Se Connecter"}
              onClick={() => navigate("/connexion")}
            />
          </div>
        ) : (
          <div className="mr-10">
            <Text.h3 color={"white"}>Bienvenue {profile.username}</Text.h3>
          </div>
        )}
        <div
          className="mr-3 cursor-pointer"
          onClick={() => navigate("/profile")}
        >
          <FaUserCircle size={28} color="#EEEEEE" />
        </div>
        <div className="cursor-pointer" onClick={() => navigate("/profile")}>
          <FaShoppingCart size={28} color="#EEEEEE" />
        </div>
      </div>
    </header>
  );
}

const FilterHeader = ({ onSearchChange }) => {
  const [search, setSearch] = useState("");

  const handleSearchChange = (value) => {
    setSearch(value);
    onSearchChange(value);
  };
  return (
    <header className="w-full h-20 flex flex-row px-20">
      <div className="w-full h-full flex flex-row items-center border-b-2 border-[#8C8C8C] justify-between">
        <Text.h3>La boutique</Text.h3>
        <Input.Search
          placeholder="Rechercher par type de vin, prix, couleur etc..."
          value={search}
          onChange={handleSearchChange}
          type="search"
        />
      </div>
    </header>
  );
};

export { LaptopHeader, FilterHeader };
