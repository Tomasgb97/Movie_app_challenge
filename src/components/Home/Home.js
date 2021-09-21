import React, { Component } from 'react'
import Searchbar from './Searchbar'
import Moviecard from './Moviecard'

export default class Home extends Component {
    render() {

        const data = [{age: 16, genre: "Action", reviews: 93, title: "Hercules", duration: "200 minutes", stars: 2},
        {age: 13, genre: "Horror", reviews: 200, title: "Spiderman", duration: "30 minutes", stars: 3}]
        return (
            <div>
                <div className="container">
                    <Searchbar></Searchbar>

                    <div className="container__list">
                        {data.map(({age, genre, reviews, title, duration, stars}) => <Moviecard key={title} stars={stars} title={title} reviews={reviews} age={age} duration={duration} genre={genre} />)}
                    </div>

                </div>
            </div>
        )
    }
}
