import React, { Component } from 'react'
import { BsStar, BsStarFill} from 'react-icons/bs'

export default class Stars extends Component {



    constructor(props){
        super(props)

        this.state = {};
    }

    componentDidMount(){

        let starsArray= [];                                          //initializes array;
        let starsAmount = parseInt(Math.floor((this.props.stars/2)));      //gets rating from props and turns it into integer divided by two (ratings were 1-10 and we needed 1-5 stars);

        for(let i = 0; i !== 5; i++){   //goes throught 1-5 and if the rating amount is higher or equal on each iteration it pushes a filled star component to  starsArray, else it pushes an empty star
            if(starsAmount > i){
                starsArray.push(<BsStarFill className="star--filled" key={i}/>)
            }else{starsArray.push(<BsStar className="star--unfilled" key={i}/>)}
        }
        this.setState(starsArray);  //once the starsArray is populated with 5 stars elements (depending on the movie rating) it is defined on the component stae;
    }




    render() {

        return (
            <div className={'stars'}>
                {Object.values(this.state).map(each => each)} 
            </div>
        )
    }
}
