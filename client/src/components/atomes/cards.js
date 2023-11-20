import { Button, Text } from ".";
import { useNavigate } from "react-router-dom";

const Vin = ({ bg, color, name }) => {
  return (
    <div
      className="w-52 h-72 rounded-lg p-5 relative cursor-pointer"
      style={{
        background: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute bottom-4 ">
        <div
          className="w-14 h-2 rounded-xl"
          style={{ background: color }}
        ></div>
        <Text.h4 color={"white"}>{name}</Text.h4>
      </div>
    </div>
  );
};

const Produit = ({
  id,
  bg,
  color,
  typeColor,
  type,
  name,
  pays,
  oldPrice,
  price,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className="w-[264px] h-[344px] rounded-lg p-5 cursor-pointer"
      style={{
        background: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      onClick={() => navigate(`/product/${id}`)}
    >
      <div className="h-full flex flex-col justify-between pl-[33%]">
        <div className="w-14 h-2 rounded-xl" style={{ background: color }}>
          <div className="mt-2">
            <Text.h4 color={typeColor}>{type}</Text.h4>
          </div>
        </div>
        <div className="leading-5">
          <Text.p fontSize={26} fontWeight={200}>
            {name}
          </Text.p>
        </div>
        <Text.placeholder>{pays}</Text.placeholder>
        <div className="leading-6">
          <Text.p
            color={"#ABABAB"}
            fontSize={18}
            textDecoration={"line-through"}
            fontWeight={600}
          >
            {oldPrice}
          </Text.p>
          <Text.price>{price}</Text.price>
        </div>
      </div>
    </div>
  );
};

export { Vin, Produit };
