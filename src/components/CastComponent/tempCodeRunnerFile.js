        data-aos="fade-left"
        data-aos-duration="500"
        data-aos-delay="100"
        to={`/actors/${id}`}
        className="actorCard"
      >
        <div className='actorCard__imgcont'>
          <img
            onError={this.addDefaultSrc}
            className="actorCard__imgcont__img"
            alt={actorname}
            src={img}
          ></img>
        </div>
        <h4 className="actorCard__name">{actorname}</h4>
      </Link>