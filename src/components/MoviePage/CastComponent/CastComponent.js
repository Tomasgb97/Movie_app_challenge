import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class CastComponent extends Component {
    constructor(props){
        super(props);

        this.addDefaultSrc = this.addDefaultSrc.bind(this);
    }

    addDefaultSrc(ev){                                           //sets a default image in case the src link provided by the api dosen't return any.
        ev.target.src = '../noimage.png'
      }

    render() {

        const {img, actorname, id} = this.props;
        return (
            <Link to={`/actors/${id}`} className='actorCard'>
                <img onError={this.addDefaultSrc} className='actorCard__img' alt={actorname} src={img}></img>
                <h4 className='actorCard__name'>{actorname}</h4>
                
            </Link>
        )
    }
}

export default CastComponent
