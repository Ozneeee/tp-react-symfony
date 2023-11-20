import React from "react";
import { Header, Footer } from "../components/mollecules";
import { AllProducts } from "../components/organismes";
import { Button, Text } from "../components/atomes";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header.LaptopHeader />
      <div className="flex flex-col items-center justify-center">
        <div className="mb-6">
          <Text.error>Oh oh...</Text.error>
        </div>
        <div className="mb-6">
          <Text.error>La page demandée n'existe pas...</Text.error>
        </div>
        <Button.Primary
          value={"Retour à la boutique"}
          onClick={() => navigate("/home")}
        />
      </div>
      <div>
        <Footer.laptopFooter />
      </div>
    </div>
  );
}

export default ErrorPage;
