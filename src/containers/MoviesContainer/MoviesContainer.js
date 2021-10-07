import React, { Component } from "react";
import Searchbar from "../../components/Searchbar";
import Moviecard from "../../components/Moviecard";
import MyContext from "../../components/Mycontext";
import Pagination from "../../components/Pagination";

export default class MoviesContainer extends Component {
  static contextType = MyContext;

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="container">
          <Searchbar></Searchbar>

          <div className="container__list">
            {Object.values(this.context.fetched).length == 0 ? (
              <h1 className="container__list__nomovie">No movie was found</h1>
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
                    genresArray={this.context.genres}
                  />
                )
              )
            )}
          </div>
        </div>
        <div className="container__tap"></div>
        <Pagination/>
      </div>
    );
  }
}
