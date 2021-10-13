import React from "react";
import { FaHeart } from "react-icons/fa";

interface propsInterface {
  isfav: boolean;
}

export default function FavHeart({ isfav }: propsInterface) {
  return (
    <FaHeart
      className={isfav ? "favheart--filled" : "favheart--unfilled"}
    ></FaHeart>
  );
}
