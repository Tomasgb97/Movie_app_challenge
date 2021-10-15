import React from "react";
import { FaHeart } from "react-icons/fa";

interface PropsInterface {
  isfav?: boolean;
}

const FavHeart: React.FC<PropsInterface> = ({ isfav }) => {
  return (
    <FaHeart
      className={isfav ? "favheart--filled" : "favheart--unfilled"}
    ></FaHeart>
  );
};

export default FavHeart;
