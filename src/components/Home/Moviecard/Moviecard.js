import React, { Component } from "react";
import Stars from "../../Stars";
import Age from '../../age'
import FavHeart from '../../FavHeart'
import { Link } from "react-router-dom";

export default class Moviecard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const getGenre = async () => {
      fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_NEWKEY}&language=en-US`,
        {
          //gets all genres from api
          method: "GET",
          mode: "cors",
        }
      )
        .then((response) => response.json())
        .then((response) => {
          const arrayFromResponse = Object.values(response); //sets genres to array
          const arrayWithGenres = arrayFromResponse[0]; //access to genres id arrray
          const filteredArray = arrayWithGenres.filter((genre) =>
            this.props.genres.includes(genre.id)
          ); //filter for ids matches between api genres ids and this movie ids
          const genresNamesArray = filteredArray.map((genre) => genre.name); //gets the name of the matchig ids
          this.setState({ genres: genresNamesArray.join(", ") });
        })
        .catch((err) => {
          console.error(err);
        });
    };

    getGenre();
  }

  render() {
    const { img, adult, reviews, stars, id, title, release } = this.props; //destructured props

    return (
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="cardContainer"
      >
        <div className="upperPart">
          <div className="upperPart__imagecontainer">
            <Link className='upperPart__imagecontainer__link' to={`/movies/${id}`}>
            <img
              alt="poster"
              className="upperPart__imagecontainer__image"
              src={`https://image.tmdb.org/t/p/w500/${img}`}
            ></img></Link>
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
