import React, { Component} from 'react'
import { BsHeart } from 'react-icons/bs'
import Stars from '../../Stars';
import { Link } from 'react-router-dom';


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
        
       const {img, adult,genres, reviews, stars, id, title, release } = this.props


        return (
                <div className="cardContainer">
                    
                    <div className="upperPart" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500/${img})`}}>
                        <div className="upperPart__top">
                            <div className="upperPart__top__ageRate">{adult === true ? "18" : "8"}+</div>
                            <BsHeart className="upperPart__top__fav"></BsHeart>
                        </div>
                        <div className="upperPart__bottom">
                            <span className="upperPart__bottom__genre">{this.state.genres}</span>
                            <div className="upperPart__bottom__flex">
                                <Stars stars={stars}></Stars>
                                <span className="upperPart__bottom__flex__reviews">{reviews} Reviews</span>
                            </div>

                        </div>

                    </div>
                    <Link to={`/movies/${id}`} className="lowerPart">
                        <h4 className="lowerPart__title">{title}</h4>
                        <p className="lowerPart__duration">{release}</p>

                    </Link>
                    
                </div>

        )
    }
}
