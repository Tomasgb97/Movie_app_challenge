import React from "react";
import { Link } from "react-router-dom";

export default function CastComponent(props) {
  const { img, actorname, id } = props;

  const addDefaultSrc = (ev) => {
    //sets a default image in case the src link provided by the api dosen't return any.
    ev.target.src = "../noimage.png";
  };
  return (
    <Link
      data-aos-offset="10"
      data-aos="fade-left"
      data-aos-duration="500"
      data-aos-delay="100"
      to={`/actors/${id}`}
      className="actorCard"
    >
      <div className="actorCard__imgcont">
        <img
          onError={addDefaultSrc}
          className="actorCard__imgcont__img"
          alt={actorname}
          src={img}
        ></img>
      </div>
      <h4 className="actorCard__name">{actorname}</h4>
    </Link>
  );
}
