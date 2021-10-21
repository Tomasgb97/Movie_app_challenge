import React, { Component } from "react";
import Searchbar from "../../components/Searchbar";
import Moviecard from "../../components/Moviecard";
import MyContext from "../../components/Mycontext";
import Pagination from "../../components/Pagination";

class MoviesContainer extends Component<{}, {}> {
  static contextType = MyContext;
  context!: React.ContextType<typeof MyContext>;

  render() {
    const { fetched, genres } = this.context;
    return (
      <div>
        <div className="container">
          <Searchbar></Searchbar>

          <div className="container__list">
            {Object.values(fetched).length === 0 ? (
              <h1 className="container__list__nomovie">No movie was found</h1>
            ) : (
              Object.values(fetched).map(
                (movie) => (
                  <Moviecard
                    key={movie.id}
                    movie={movie}
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
