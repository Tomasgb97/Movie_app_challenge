import MoviesContainer from "./containers/MoviesContainer";
import MoviePage from "./containers/MoviePage";
import Actor from "./containers/Actor";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyContext from "./components/Mycontext";
import Aos from "aos";
import "aos/dist/aos.css";
import { fetchTopMovies, fetchQuery } from "./functions/fetching";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.fetchquery = this.fetchquery.bind(this);
  }

  fetchquery(query) {
    //checks for the query param and searches it, unless it's "". in that case the api returns 20 most popular movies.
    this.setState(this.props, async () => {
      const data = await fetchQuery(query);
      this.setState(data);
    });
  }

  componentDidMount() {
    Aos.init();

    const setMovies = async () => {
      let data = await fetchTopMovies();
      this.setState(data);
    };
    setMovies();
  }

  render() {
    return (
      <Router>
        <MyContext.Provider
          value={{ fetched: this.state, updatefetchstate: this.fetchquery }}
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
