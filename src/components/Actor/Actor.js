import React, { Component } from 'react'
import dateFormat from 'dateformat'
import { Link } from 'react-router-dom'
import Films from './Films'

export class Actor extends Component {
    constructor(props){
        super(props)
        this.state={bio: {}, movies: []}
    }

    componentDidMount(){

        console.log(dateFormat("1963-12-18", "longDate"));

        let  idNumber = parseInt(this.props.match.params.id)

        const getActorBio = async() => {                                                          
            fetch(`https://api.themoviedb.org/3/person/${idNumber}?api_key=${process.env.REACT_APP_NEWKEY}&language=en-US`, {
            "method": "GET",
            "mode": "cors"
            })
            .then(
                 response => response.json())
            .then(r => this.setState({bio: r}, () => console.log(this.state.bio)))}

        getActorBio();

        const getActorMovies = async() => {                                                          
            fetch(`https://api.themoviedb.org/3/person/${idNumber}/movie_credits?api_key=${process.env.REACT_APP_NEWKEY}&language=en-US`, {
            "method": "GET",
            "mode": "cors"
            })
            .then(
                 response => response.json())
            .then(r => this.setState({movies: r.cast}))}
        
            getActorMovies()
    }
    render() {

        return (
            <div className="body">
                <div className="topflex">
                    <Link to={"/"} className="backbtton">Back</Link>
                </div>
                <div className="imgcontainer">
                    <img alt={`${this.state.bio.name} poster`} className="imgcontainer__img" src={`https://image.tmdb.org/t/p/w500/${this.state.bio.profile_path}`}></img>
                </div>
                <div className="maincontainer">

                    <h1>{this.state.bio.name}</h1>
                    <div className="maincontainer__profile">
                    <img className="maincontainer__profile__pic" alt={`${this.state.bio.name} poster`} src={`https://image.tmdb.org/t/p/w500/${this.state.bio.profile_path}`}></img>
                        <div className="maincontainer__profile__flex">
                            <p className="maincontainer__profile__flex__birth">{dateFormat(this.state.bio.birthday, "longDate")}</p>
                            <p className="maincontainer__profile__flex__place">{this.state.bio.place_of_birth}</p>
                            <p className="maincontainer__profile__flex__department">{this.state.bio.known_for_department}</p>
                        </div>
                    </div>
                    
                    <div className="films">
                        <div className="films__topflex">
                            <h4>Filmography</h4>
                            <p>See all</p>
                        </div>
                        <div className="films__cardscontainer">
                        {this.state.movies.map(movie => <Films filmname={movie.title} img={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} key={movie.id}></Films>)}
                        </div>
                    </div>

                    <div className="biocontainer">
                        <h3>Biography</h3>

                        <p>{this.state.bio.biography === "" ? "There is no biography for this actor. Feel free to add the required info at www.example-web.com" : this.state.bio.biography}</p>
                    </div>
                        

                </div>
            </div>
        )
    }
}

export default Actor
