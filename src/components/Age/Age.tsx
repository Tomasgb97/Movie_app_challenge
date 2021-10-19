import React from "react";

interface Props {
  boolean: boolean;
  big?: boolean;
}

const Age: React.FC<Props> = ({ boolean, big }) => {
  return (
    <div className={big ? "agetag --big" : "agetag"}>
      {boolean ? "18+" : "8+"}
    </div>
  );
};

export default Age;
