import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import MyContext from '../Mycontext'
import {AiFillPlayCircle} from 'react-icons/ai'
import { BsHeart } from 'react-icons/bs';
import Stars from '../Stars';

export default class MoviePage extends Component {

    static contextType = MyContext;


    constructor(props){
        super(props)

        this.state = {};
 
    }


    componentDidMount(){
    
    let  idNumber = parseInt(this.props.match.params.id)
    this.setState( Object.values(this.context).find(movie => movie.id === idNumber))
    }


    render() {
        return (

            <div className="main">
                <div className="main__upper">

                    <div className="main__upper__topflex">
                        <Link to={"/"} className="main__upper__topflex__backbttn">Back</Link>
                        <BsHeart className="main__upper__topflex__fav"></BsHeart>
                    </div>
                    <AiFillPlayCircle className="main__upper__playicon"></AiFillPlayCircle>
                    <div className="main__upper__age">{this.state.adult? `18+` : `8+`}</div>
                </div>
                

                <div className="main__meta">
                    <h2 className="main__meta__title">{this.state.title}</h2>
                    <span className="main__meta__genres">genres, genres, genres</span>
                    <div className="main__meta__flex">
                        <Stars stars={this.state.vote_average}></Stars>
                        <span className="main__meta__flex__reviews">{this.state.vote_count} Reviews</span>
                    </div>
                </div>

                <section className="main__description">
                    <h3 className="main__description__storyline">Storyline</h3>
                    <p className="main__description__overview">{this.state.overview}</p>
                </section>

                <div className="imgcontainer">
                    <img alt={`${this.state.title} poster`} className="imgcontainer__img" src={`https://image.tmdb.org/t/p/w500/${this.state.poster_path}`}></img>
                </div>


                
            </div>
        )
    }
}
