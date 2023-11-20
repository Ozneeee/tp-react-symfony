import React from "react";
import { Header, Footer } from "../components/mollecules";
import { AllProducts, Forms } from "../components/organismes";
import { Button, Text } from "../components/atomes";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header.LaptopHeader />
      <Forms.Contact />
      <div>
        <Footer.laptopFooter />
      </div>
    </div>
  );
};

export default Contact;
