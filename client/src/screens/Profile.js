import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header, Footer } from "../components/mollecules";
import { Forms, Profil } from "../components/organismes";
import { useAuth } from "../context";

function Profile() {
  const { profile, isLoggedIn, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("isLoggedIn:", isLoggedIn);
    if (!isLoggedIn) {
      console.log("Redirection vers /connexion");
      navigate("/connexion");
    }
  }, [isLoggedIn, navigate]);

  if (!isLoggedIn) {
    return <div>Redirection...</div>;
  }

  return (
    <div>
      <div className="min-h-screen flex flex-col justify-between">
        <div>
          <Header.LaptopHeader />
          <Profil.Profil />
        </div>
        <div>
          <Footer.laptopFooter />
        </div>
      </div>
    </div>
  );
}

export default Profile;
