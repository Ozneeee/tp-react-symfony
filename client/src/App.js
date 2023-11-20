import "./theme/App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./screens/Home";
import LogIn from "./screens/LogIn";
import Shop from "./screens/Shop";
import Profile from "./screens/Profile";
import Product from "./screens/Product";
import ErrorPage from "./screens/ErrorPage";
import Contact from "./screens/Contact";

import {
  AuthContextProvider,
  PanierContextProvider,
  ProductsContextProvider,
} from "./context";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/connexion" element={<LogIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <ProductsContextProvider>
          <PanierContextProvider>
            <Router />
          </PanierContextProvider>
        </ProductsContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
