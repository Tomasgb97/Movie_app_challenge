import React, { Component } from 'react'
import Searchbar from './Searchbar'
import Moviecard from './Moviecard'
import MyContext from '../Mycontext'



export default class Home extends Component {

    static contextType = MyContext;


  constructor(props) {
    super(props);
    
    this.state = {datos: []};
      

  }


  componentDidMount(){

   const set = async() => await this.setState({ datos: Object.values(this.context)})  //sets the "data" state to the context, transformed from object to arrray [this is not working as expected].
    set();
  }




 
    
    render() {


        return (
            <div>
                <div className="container">
                    <Searchbar></Searchbar>

                    <div className="container__list">
                        {!this.state.datos ? <h2 color="white">Loading</h2> : Object.values(this.context.fetched).map(({adult, genre_ids, vote_count, title, release_date, vote_average, id, poster_path}) => <Moviecard key={id} id={id} stars={vote_average} title={title} reviews={vote_count} adult={adult} release={release_date} genres={genre_ids} img={poster_path} />)}
                    </div>

                </div>
            </div>
        )
    }
}
