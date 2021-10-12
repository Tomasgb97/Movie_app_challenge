import React, { Component } from "react";
import dateFormat from "dateformat";
import { Link } from "react-router-dom";
import Films from "../../components/Films";
import { getActorbio, getActorMovies } from "../../functions/fetching";
import MyContext from "../../components/Mycontext";

export class Actor extends Component {
  static contextType = MyContext;

  constructor(props) {
    super(props);
    this.state = { bio: {}, movies: [] };
  }

  componentDidMount() {
    let idNumber = parseInt(this.props.match.params.id); //gets the actor id number from the url parameters

    const setActor = async () => {
      //gets the actor info.
      const actor = await getActorbio(idNumber);

      this.setState({ bio: actor });
    };

    setActor();

    const setActorMovies = async () => {
      //gets the movies where the actor worked on the cast
      const movies = await getActorMovies(idNumber);
      this.setState({ movies: movies });
    };

    setActorMovies();
  }

  render() {
    const { movies, bio } = this.state;

    return (
      <div className="body">
        <div className="topflex">
          <Link to={`/movies/${this.context.actualpage}`} className="backbtton">
            Back
          </Link>
        </div>
        <div className="imgcontainer">
          <img
            alt={`${bio.name} poster`}
            className="imgcontainer__img"
            src={`https://image.tmdb.org/t/p/w500/${bio.profile_path}`}
          ></img>
        </div>
        <div className="maincontainer">
          <h1 data-aos="fade-left" data-aos-duration="500" data-aos-delay="100">
            {bio.name}
          </h1>
          <div className="maincontainer__profile">
            <div className="maincontainer__profile__imgcontainer">
              <img
                data-aos="fade-right"
                data-aos-duration="500"
                data-aos-delay="100"
                className="maincontainer__profile__imgcontainer__img"
                alt={`${bio.name} poster`}
                src={`https://image.tmdb.org/t/p/w500/${bio.profile_path}`}
              ></img>
            </div>
            <div className="maincontainer__profile__flex">
              <p className="maincontainer__profile__flex__birth">
                {dateFormat(bio.birthday, "longDate")}
              </p>
              <p className="maincontainer__profile__flex__place">
                {bio.place_of_birth}
              </p>
              <p className="maincontainer__profile__flex__department">
                {bio.known_for_department}
              </p>
            </div>
          </div>

          <div className="films">
            <div className="films__topflex">
              <h4>Filmography</h4>
              <p>See all</p>
            </div>
            <div className="films__cardscontainer">
              {movies.map((movie) => (
                <Films
                  filmName={movie.title}
                  img={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  key={movie.id}
                  id={movie.id}
                ></Films>
              ))}
            </div>
          </div>

          <div className="biocontainer">
            <h3>Biography</h3>

            <p data-aos-offset="80" data-aos="fade-up" data-aos-duration="300">
              {bio.biography === ""
                ? "There is no biography for this actor. Feel free to add the required info at www.example-web.com"
                : bio.biography}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Actor;
