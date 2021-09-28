import Home from './components/Home'
import MoviePage from './components/MoviePage'
import Actor from './components/Actor'
import React, { Component} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MyContext from './components/Mycontext'





export default class App extends Component {

  constructor(props) {
    super(props);
    
   this.state = {}

   this.fetchquery = this.fetchquery.bind(this);


  }

  fetchquery(query){          //checks for the query param and searches it, unless it's "". in that case the api returns 20 most popular movies.

    this.setState(this.props,()=>{                                                 

      if(query !== ""){
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_NEWKEY}&language=en-US&query=${query}&page=1&include_adult=false`, {    
        "method": "GET",
        "mode": "cors"
        })
          .then(
             response => response.json())
          .then(
             r => this.setState(r.results))
          .catch(err => {
          console.error(err);
  
          })}else{                                                               
  
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
    } )

    

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
        <MyContext.Provider value={{fetched: this.state, updatefetchstate: this.fetchquery}}>
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


