import React, { useState } from "react";
import { Text, Button } from "../atomes";
import { useNavigate } from "react-router-dom";

const bg1 = require("../../assets/bg-1.png");
const bg2 = require("../../assets/bg-2.png");

const Carousel = () => {
  const [display, setDisplay] = useState(1);

  const changeDisplay = () => {
    if (display === 1) {
      setDisplay(2);
    } else if (display === 2) {
      setDisplay(1);
    }
  };

  const navigate = useNavigate();

  return (
    <div
      className={`w-full h-[90vh] transition-background duration-500 ease-in-out`}
      style={
        display === 1
          ? {
              background: `url(${bg1})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }
          : {
              background: `url(${bg2})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }
      }
    >
      <div className="flex flex-row justify-between relative top-1/2 px-10">
        <Button.Left onClick={() => changeDisplay()} />
        <Button.Right onClick={() => changeDisplay()} />
      </div>
      <div className="select-none inline absolute top-1/3 left-48 ">
        <div>
          {display === 1 ? (
            <Text.h3 color={"white"} fontSize={50}>
              Nouveautés 2023
            </Text.h3>
          ) : (
            <Text.h3 color={"white"} fontSize={50}>
              En Promotions
            </Text.h3>
          )}
        </div>
        <div>
          {display === 1 ? (
            <Text.label color={"white"} fontSize={32}>
              Dom Pérignon
            </Text.label>
          ) : (
            <Text.label color={"white"} fontSize={32}>
              Gaillac 2020
            </Text.label>
          )}
        </div>
        <div className="mt-4">
          <Button.Primary
            value={"Voir Plus"}
            onClick={() => navigate("/shop")}
          />
        </div>
      </div>
    </div>
  );
};

export { Carousel };
