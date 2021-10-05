import React, { Component } from "react";
import Searchbar from "../../components/Searchbar";
import Moviecard from "../../components/Moviecard";
import MyContext from "../../components/Mycontext";
import { getGenres } from "../../functions/fetching";

export default class Home extends Component {
  static contextType = MyContext;

  constructor(props) {
    super(props);

    this.state = [];
  }


  componentDidMount() {
    const setGenres = async () => {
      const genres = await getGenres();

      this.setState(genres);
    };

    setGenres();
  }

  render() {
    return (
      <div>
        <div className="container">
          <Searchbar></Searchbar>

          <div className="container__list">
            {Object.values(this.context.fetched) === [] ? (
              <h2 color="white">Loading</h2>
            ) : (
              Object.values(this.context.fetched).map(
                ({
                  adult,
                  genre_ids,
                  vote_count,
                  title,
                  release_date,
                  vote_average,
                  id,
                  poster_path,
                }) => (
                  <Moviecard
                    key={id}
                    id={id}
                    stars={vote_average}
                    title={title}
                    reviews={vote_count}
                    adult={adult}
                    release={release_date}
                    genres={genre_ids}
                    img={poster_path}
                    genresArray={this.state}
                  />
                )
              )
            )}
          </div>
        </div>
        <div className="container__tap"></div>
      </div>
    );
  }
}
