import React from "react";

function Age({ boolean, big }) {
  return <div className={big ? "agetag --big" : "agetag" }>{boolean ? "18+" : "8+"}</div>;
}

export default Age;
