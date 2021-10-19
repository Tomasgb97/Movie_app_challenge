import React, { Component } from "react";
import Searchbar from "../../components/Searchbar";
import Moviecard from "../../components/Moviecard";
import MyContext from "../../components/Mycontext";
import Pagination from "../../components/Pagination";
import FavsBttn from "../../components/FavsBttn";

class MoviesContainer extends Component<{}, {}> {
  static contextType = MyContext;
  context!: React.ContextType<typeof MyContext>;

  render() {
    const { fetched, genres } = this.context;
    return (
      <div>
        <FavsBttn />
        <div className="container">
          <Searchbar></Searchbar>

          <div className="container__list">
            {Object.values(fetched).length === 0 ? (
              <h1 className="container__list__nomovie">No movie was found</h1>
            ) : (
              Object.values(fetched).map(
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
                    genresids={genre_ids}
                    img={poster_path}
                    genresArray={genres}
                  />
                )
              )
            )}
          </div>
        </div>
        <div className="container__tap"></div>
        <Pagination />
      </div>
    );
  }
}

export default MoviesContainer;
