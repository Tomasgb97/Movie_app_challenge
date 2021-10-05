import MoviesContainer from "./containers/MoviesContainer";
import MoviePage from "./containers/MoviePage";
import Actor from "./containers/Actor";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyContext from "./components/Mycontext";
import Aos from "aos";
import "aos/dist/aos.css";
import { fetchTopMovies, fetchQuery, getGenres } from "./functions/fetching";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { data: [], genres: [], actualpage: "/" };

    this.fetchquery = this.fetchquery.bind(this);
    this.setActualPage = this.setActualPage.bind(this);
  }

  fetchquery(query) {
    //checks for the query param and searches it, unless it's "". in that case the api returns 20 most popular movies.
    this.setState(this.props, async () => {
      const data = await fetchQuery(query);
      this.setState({ data: data });
    });
  }

  setActualPage(param) {
    this.setState({ actualpage: param });
  }

  componentDidMount() {
    Aos.init();

    const setMovies = async () => {
      let data = await fetchTopMovies();
      this.setState({ data: data });
    };
    setMovies();

    const setGenres = async () => {
      const genres = await getGenres();

      this.setState({ genres: genres });
    };

    setGenres();
  }

  render() {
    return (
      <Router>
        <MyContext.Provider
          value={{
            genres: this.state.genres,
            fetched: this.state.data,
            actualpage: this.state.actualpage,
            setActualPage: this.setActualPage,
            updatefetchstate: this.fetchquery,
          }}
        >
          <Switch>
            <Route exact path="/" component={MoviesContainer} />
            <Route exact path="/movies/:id" component={MoviePage} />
            <Route exact path="/actors/:id" component={Actor} />
          </Switch>
        </MyContext.Provider>
      </Router>
    );
  }
}
