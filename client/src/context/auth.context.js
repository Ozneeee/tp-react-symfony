import React, { useContext, useState, useEffect } from "react";
import client from "../api/client";

const AuthContext = React.createContext();

export function AuthContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profile, setProfile] = useState({});

  const storeData = async (token) => {
    try {
      localStorage.setItem("token", JSON.stringify(token));
    } catch (error) {
      console.log("Erreur storeData", error.message);
    }
  };

  const getData = async () => {
    try {
      const jsonValue = localStorage.getItem("token");
      console.log("Data storage fetched: ", jsonValue);
      if (jsonValue != null) {
        const data = JSON.parse(jsonValue);
        console.log("DATA", data);
        setIsLoggedIn(true);
        setProfile({
          username: data.userIdentifier || data.username,
          token: data.token ? data.token : null,
        });
      } else {
        console.log("Pas de compte deja connecté");
      }
    } catch (error) {
      console.log("Erreur getData", error.message);
    }
  };

  const removeData = async () => {
    try {
      localStorage.removeItem("token");
    } catch (error) {
      console.log("Erreur removeData", error.message);
    }
  };

  const signOut = async () => {
    try {
      localStorage.clear();
      setIsLoggedIn(false);
    } catch (error) {
      console.log("Erreur signOut", error.message);
    }
  };

  useEffect(() => {
    getData();
    // localStorage.clear();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        profile,
        setProfile,
        storeData,
        getData,
        removeData,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
