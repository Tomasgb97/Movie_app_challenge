import React, { Component} from 'react'
import { BsHeart } from 'react-icons/bs'
import Stars from '../../Stars';


export default class Moviecard extends Component {

    constructor(props){
        super(props);

        this.state = {};
    }


    componentDidMount(){


        const getGenre = async() => {fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_NEWKEY}&language=en-US`, {
        "method": "GET",
        "mode": "cors"
        })
          .then(
             response => response.json())
          .then(
             response => {
                const arrayFromResponse = Object.values(response)
                const arrayWithGenres = arrayFromResponse[0]
                const filteredArray = arrayWithGenres.filter(genre => this.props.genres.includes(genre.id))
                const genresNamesArray = filteredArray.map(genre => genre.name)
                this.setState({ genres: genresNamesArray.join(", ")})
                })
          .catch(err => {
          console.error(err);
          })
    }

getGenre()}


        
    render() {
        
       


        return (
            <div className="cardContainer">
                <div className="upperPart" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500/${this.props.img})`}}>
                    <div className="upperPart__top">
                        <div className="upperPart__top__ageRate">{this.props.adult === true ? "18" : "8"}+</div>
                        <BsHeart className="upperPart__top__fav"></BsHeart>
                    </div>
                    <div className="upperPart__bottom">
                        <span className="upperPart__bottom__genre">{this.state.genres}</span>
                        <div className="upperPart__bottom__flex">
                            <Stars stars={this.props.stars}></Stars>
                            <span className="upperPart__bottom__flex__reviews">{this.props.reviews} Reviews</span>
                        </div>

                    </div>

                </div>
                <div className="lowerPart">
                    <h4 className="lowerPart__title">{this.props.title}</h4>
                    <p className="lowerPart__duration">{this.props.release}</p>

                </div>
            </div>
        )
    }
}
