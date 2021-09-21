import React, { Component } from 'react'
import {BsSearch} from 'react-icons/bs'

export default class Searchbar extends Component {
    render() {
        return (
            <div className="searchContainer">
                <div className="searchContainer__bar">
                    <input className="searchContainer__bar__input" type="text"></input>
                    <BsSearch className="searchContainer__bar__icon"></BsSearch>
                </div>
            </div>
        )
    }
}
