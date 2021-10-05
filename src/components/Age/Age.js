import React from "react";

function Age({ boolean }) {
  return <div className="agetag">{boolean ? "18+" : "8+"}</div>;
}

export default Age;
