import React from "react";
import { Text, Cards, Button } from "../atomes";
import GoogleMapReact from "google-map-react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const cardVinBlanc = require("../../assets/cardVinBlanc.png");
const cardVinRouge = require("../../assets/cardVinRouge.png");
const cardChampagne = require("../../assets/cardChampagne.png");

const Discover = () => {
  const defaultProps = {
    center: {
      lat: 43.6111946,
      lng: 3.8704633,
    },
    zoom: 13,
  };

  const navigate = useNavigate();

  return (
    <div className="mt-12 mx-28 text-left flex flex-row justify-between">
      <div className="w-[60%]">
        <Text.p fontSize={42}>Nous découvrir</Text.p>
        <div className="mt-4">
          <Text.p fontSize={18}>
            Bienvenue chez Vins Montpelliérain, l'adresse incontournable au cœur
            de Montpellier pour les amateurs de vin. Plongez dans notre
            sélection raffinée de vins rouges, blancs et champagnes,
            soigneusement choisis pour capturer la diversité des terroirs et
            l'excellence des producteurs. Chaque bouteille chez Vins
            Montpelliérain raconte une histoire, chaque dégustation est une
            aventure sensorielle. Notre équipe passionnée est là pour vous
            guider à travers notre collection exceptionnelle. Explorez notre
            site ou visitez notre boutique pour vivre l'expérience unique de
            Vins Montpelliérain, où chaque gorgée est une célébration du
            savoir-faire vinicole. Santé !
          </Text.p>
        </div>
        <div className="w-full flex flex-row justify-between mt-8">
          <Cards.Vin bg={cardVinBlanc} color={"#FFECB3"} name={"Vin Blanc"} />
          <Cards.Vin bg={cardVinRouge} color={"#5C221E"} name={"Vin Rouge"} />
          <Cards.Vin bg={cardChampagne} color={"#FFCC80"} name={"Champagne"} />
        </div>
      </div>
      <div className="w-1/3 h-96 mt-4">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyCqfKXnXwph3GUteF85d4NvOhWDemfnyqA",
          }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <FaMapMarkerAlt
            lat={43.606969}
            lng={3.871333}
            text="La Boutique"
            color="red"
            size={32}
          />
        </GoogleMapReact>
        <Text.p>18 Rue du caviste, Montpellier, 34000.</Text.p>
        <div className="mt-20">
          <Button.Primary
            value={"Nous contacter"}
            center={true}
            onClick={() => navigate("/contact")}
          />
        </div>
      </div>
    </div>
  );
};

export { Discover };
