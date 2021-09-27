import Home from './components/Home'
import MoviePage from './components/MoviePage'
import Actor from './components/Actor'
import React, { Component} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MyContext from './components/Mycontext'





export default class App extends Component {

  constructor(props) {
    super(props);
    
   this.state = {};

  }

  componentDidMount(){
    

    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_NEWKEY}&language=en-US&page=1`, {    //gets the most popular movies from api and sets them into the state
      "method": "GET",
      "mode": "cors"
      })
        .then(
           response => response.json())
        .then(
           r => this.setState(r.results))
        .catch(err => {
        console.error(err);
        })
 
  }





  render() {


    return (
      <Router>
        <MyContext.Provider value={this.state}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path="/movies/:id" component={MoviePage}  />
          <Route exact path="/actors/:id" component={Actor}  />
        </Switch>
        </MyContext.Provider>
      </Router>
    )
  }
}


