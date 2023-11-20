import React from "react";
import { Text } from ".";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Primary = ({ value, center, onClick }) => {
  return (
    <div
      className={`h-fit w-fit bg-[#5a5a5aa8] py-1 px-8 rounded-xl text-sm font-semi-bold select-none cursor-pointer shadow-second border-1 border-white ${
        center && "mx-auto"
      }`}
      onClick={() => onClick()}
    >
      <Text.label cursor={true} color={"white"}>
        {value}
      </Text.label>
    </div>
  );
};

const Left = ({ onClick }) => {
  return (
    <div
      className={
        "h-fit w-fit bg-[#3e3e3ebe] p-3 rounded-full select-none cursor-pointer border-1 border-white"
      }
      onClick={() => onClick()}
    >
      <FaAngleLeft color="#fff" size={28} />
    </div>
  );
};

const Right = ({ onClick }) => {
  return (
    <div
      className={
        "h-fit w-fit bg-[#3e3e3ebe] p-3 rounded-full select-none cursor-pointer border-1 border-white"
      }
      onClick={() => onClick()}
    >
      <FaAngleRight color="#fff" size={28} />
    </div>
  );
};

export { Primary, Left, Right };
