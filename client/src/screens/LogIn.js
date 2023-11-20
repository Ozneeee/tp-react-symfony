import React from "react";
import { Header, Footer } from "../components/mollecules";
import { Forms } from "../components/organismes";

const LogIn = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        <Header.LaptopHeader />
        <Forms.LoginPage />
      </div>
      <div>
        <Footer.laptopFooter />
      </div>
    </div>
  );
};

export default LogIn;
