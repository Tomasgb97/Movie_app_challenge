import React, { Component} from 'react'
import { BsHeart } from 'react-icons/bs'


export default class Moviecard extends Component {

    render() {
        
       


        return (
            <div className="cardContainer">
                <div className="upperPart">
                    <div className="upperPart__top">
                        <div className="upperPart__top__filter"></div>
                        <img className="upperPart__top__img" alt="" src=""></img>
                        <div className="upperPart__top__ageRate">{this.props.age}+</div>
                        <BsHeart className="upperPart__top__fav"></BsHeart>
                    </div>
                    <div className="upperPart__bottom">
                        <span className="upperPart__bottom__genre">{this.props.genre}</span>
                        <div className="upperPart__bottom__flex">
                            <span>Rating</span>
                            <span className="upperPart__bottom__flex__reviews">{this.props.reviews}</span>
                        </div>

                    </div>

                </div>
                <div className="lowerPart">
                    <h4 className="lowerPart__title">{this.props.title}</h4>
                    <p className="lowerPart__duration">{this.props.duration}</p>

                </div>
            </div>
        )
    }
}
