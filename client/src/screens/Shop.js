import React, { useState } from "react";
import { Header, Footer } from "../components/mollecules";
import { AllProducts } from "../components/organismes";

function Shop() {
  const [search, setSearch] = useState("");

  const handleSearchChange = (value) => {
    setSearch(value);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        <Header.LaptopHeader />
        <Header.FilterHeader onSearchChange={handleSearchChange} />
        <AllProducts.Boutique search={search} />
      </div>
      <div>
        <Footer.laptopFooter />
      </div>
    </div>
  );
}

export default Shop;
