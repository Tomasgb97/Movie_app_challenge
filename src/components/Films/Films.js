import React from "react";
import { Link } from "react-router-dom";

export default function Films(props) {
  const { filmName, img, key, id } = props;

  const addDefaultSrc = (ev) => {
    //     //sets a default image in case the api dosen't return any
    ev.target.src = "../noimage.png";
  };

  return (
    <div
      key={key}
      data-aos="fade-left"
      data-aos-duration="1000"
      data-aos-delay="100"
      className="filmcard"
    >
      <div className="filmcard__imgcontainer">
        <Link to={`/movies/${id}`}>
          <img
            onError={addDefaultSrc}
            className="filmcard__imgcontainer__img"
            alt={`${filmName} poster`}
            src={img}
          ></img>
        </Link>
      </div>
      <div className="filmcard__namecontainer">
        <h4 className="filmcard__namecontainer__name">{filmName}</h4>
      </div>
    </div>
  );
}
