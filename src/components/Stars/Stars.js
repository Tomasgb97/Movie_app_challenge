import React, { Component } from 'react'
import { BsStar, BsStarFill} from 'react-icons/bs'

export default class Stars extends Component {



    constructor(props){
        super(props)

        this.state = {};
    }

    componentDidMount(){

        let starsArray= [];
        let starsAmount = parseInt(Math.floor((this.props.stars/2)));

        for(let i = 0; i !== 5; i++){
            if(starsAmount > i){
                starsArray.push(<BsStarFill className="star--filled" key={i}/>)
            }else{starsArray.push(<BsStar className="star--unfilled" key={i}/>)}
        }
        this.setState(starsArray);
    }




    render() {

        return (
            <div className={'stars'}>
                {Object.values(this.state).map(each => each)}
            </div>
        )
    }
}
