import React, { Component } from 'react'

export class CastComponent extends Component {
    render() {

        const {img, actorname} = this.props;
        return (
            <div className='actorCard'>
                <img className='actorCard__img' alt={actorname} src={img}></img>
                <h4 className='actorCard__name'>{actorname}</h4>
                
            </div>
        )
    }
}

export default CastComponent
