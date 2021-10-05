import React, { Component } from 'react'

export class Films extends Component {


    constructor(props){
        super(props)
        this.state={};

        this.addDefaultSrc = this.addDefaultSrc.bind(this);
        
    }



    addDefaultSrc(ev){                                      //sets a default image in case the api dosen't return any
        ev.target.src = '../noimage.png'
      }
    




    render() {
        
        const{filmname, img} = this.props;                         //destructure props

        return (
            <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="100" className="filmcard">
                <div className="filmcard__imgcontainer">
                <img onError={this.addDefaultSrc} className="filmcard__imgcontainer__img"  alt={`${filmname} poster`} src={img}></img>
                </div>
                <div className="filmcard__namecontainer">
                <h4 className="filmcard__namecontainer__name">{filmname}</h4>
                </div>
                
            </div>
        )
    }
}

export default Films
