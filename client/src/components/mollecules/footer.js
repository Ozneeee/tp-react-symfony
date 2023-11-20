import React from "react";
import { Text } from "../atomes";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const laptopFooter = () => {
  return (
    <footer className="w-full h-20 bg-[#212121] flex flex-row justify-between items-center px-28">
      <div className="w-1/4 flex flex-row items-center justify-between">
        <div className="cursor-pointer">
          <Text.p fontSize={18} color="#424242">
            La boutique
          </Text.p>
        </div>
        <div className="cursor-pointer">
          <Text.p color="#424242" fontSize={18}>
            Nos vins
          </Text.p>
        </div>
        <div className="cursor-pointer">
          <Text.p color="#424242" fontSize={18}>
            Aide
          </Text.p>
        </div>
      </div>
      <div>
        <Text.p color={"#424242"} fontSize={18} fontWeight={600}>
          Nos Réseaux
        </Text.p>
        <div className="flex flex-row items-center justify-between">
          <div className="cursor-pointer">
            <FaFacebookSquare size={28} color="#424242" />
          </div>
          <div className="cursor-pointer">
            <FaInstagramSquare size={28} color="#424242" />
          </div>
          <div className="cursor-pointer">
            <FaTwitterSquare size={28} color="#424242" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export { laptopFooter };
