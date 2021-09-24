import Home from './components/Home'
import MoviePage from './components/MoviePage'
import React, { Component} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MyContext from './components/Mycontext'





export default class App extends Component {

  constructor(props) {
    super(props);
    
      
    this.state = (fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_NEWKEY}&language=en-US&page=1`, {
      "method": "GET",
      "mode": "cors"
      })
        .then(
           response => response.json())
        .then(
           r => r.results)
        .catch(err => {
        console.error(err);
        }))

  }

  componentDidMount(){
    

    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_NEWKEY}&language=en-US&page=1`, {
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
        </Switch>
        </MyContext.Provider>
      </Router>
    )
  }
}


