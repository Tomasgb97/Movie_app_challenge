import React from "react";

interface Props {
  boolean: boolean,
  big: boolean
}

function Age({ boolean, big }: Props) {
  return (
    <div className={big ? "agetag --big" : "agetag"}>
      {boolean ? "18+" : "8+"}
    </div>
  );
}

export default Age;
