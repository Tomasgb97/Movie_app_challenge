import React, { Component } from 'react'
import {BsSearch} from 'react-icons/bs'
import MyContext from '../../Mycontext';

export default class Searchbar extends Component {

    static contextType = MyContext;

    constructor(props){
        super(props);

        this.state = "";

        this.handlequerychange = this.handlequerychange.bind(this);

        this.updatefetch = this.updatefetch.bind(this);
    }

    handlequerychange(e){

        this.setState({value: e.target.value})
    }
    
    updatefetch(query){

        this.context.updatefetchstate(query.value);
        
    }
    render() {

        return (
            <div className="searchContainer">
                <div className="searchContainer__bar">
                    <input onChange={this.handlequerychange} className="searchContainer__bar__input" type="text"></input>
                    <BsSearch onClick={()=>{this.updatefetch(this.state)}} className="searchContainer__bar__icon"></BsSearch>
                </div>
            </div>
        )
    }
}
