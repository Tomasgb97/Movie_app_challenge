import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class CastComponent extends Component {
    render() {

        const {img, actorname, id} = this.props;
        return (
            <Link to={`/actors/${id}`} className='actorCard'>
                <img className='actorCard__img' alt={actorname} src={img}></img>
                <h4 className='actorCard__name'>{actorname}</h4>
                
            </Link>
        )
    }
}

export default CastComponent
