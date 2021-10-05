import React, { Component } from "react";
import Stars from "../Stars";
import Age from "../Age";
import FavHeart from "../FavHeart";
import { Link } from "react-router-dom";

export default class Moviecard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const filteredArray = Object.values(this.props.genresArray).filter(
      (genre) => this.props.genres.includes(genre.id)
    ); //filter for ids matches between api genres ids and this movie ids
    const genresNamesArray = filteredArray.map((genre) => genre.name); //gets the name of the matchig ids
    this.setState({ genres: genresNamesArray.join(", ") });
  }

  render() {
    const { img, adult, reviews, stars, id, title, release } = this.props;

    return (
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="cardContainer"
      >
        <div className="upperPart">
          <div className="upperPart__imagecontainer">
            <Link
              className="upperPart__imagecontainer__link"
              to={`/movies/${id}`}
            >
              <img
                alt="poster"
                className="upperPart__imagecontainer__image"
                src={`https://image.tmdb.org/t/p/w500/${img}`}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "./noimage.png";
                }}
              ></img>
            </Link>
            <div className="upperPart__bottom">
              <span className="upperPart__bottom__genre">
                {this.state.genres}
              </span>
              <div className="upperPart__bottom__flex">
                <Stars stars={stars}></Stars>
                <span className="upperPart__bottom__flex__reviews">
                  {reviews} Reviews
                </span>
              </div>
            </div>
            <div className="upperPart__top">
              <Age boolean={adult}></Age>
              <FavHeart></FavHeart>
            </div>
          </div>
        </div>
        <div className="lowerPart">
          <h4 className="lowerPart__title">{title}</h4>
          <p className="lowerPart__duration">{release}</p>
        </div>
      </div>
    );
  }
}
