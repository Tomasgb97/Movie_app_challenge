import React from "react";

export default function Films(props) {
  const { filmname, img } = props;

  const addDefaultSrc = (ev) => {
    //     //sets a default image in case the api dosen't return any
    ev.target.src = "../noimage.png";
  };
  return (
    <div
      data-aos="fade-left"
      data-aos-duration="1000"
      data-aos-delay="100"
      className="filmcard"
    >
      <div className="filmcard__imgcontainer">
        <img
          onError={addDefaultSrc}
          className="filmcard__imgcontainer__img"
          alt={`${filmname} poster`}
          src={img}
        ></img>
      </div>
      <div className="filmcard__namecontainer">
        <h4 className="filmcard__namecontainer__name">{filmname}</h4>
      </div>
    </div>
  );
}
