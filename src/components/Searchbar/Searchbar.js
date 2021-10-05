import React, { Component } from "react";
import { BsSearch } from "react-icons/bs";
import MyContext from "../Mycontext";

export default class Searchbar extends Component {
  static contextType = MyContext;

  constructor(props) {
    super(props);

    this.state = "";

    this.handleQueryChange = this.handleQueryChange.bind(this);

    this.handleKeyPress = this.handleKeyPress.bind(this);

    this.updateFetch = this.updateFetch.bind(this);
  }

  handleQueryChange(e) {
    //sets state to searchbar input value

    this.setState({ value: e.target.value });
  }

  handleKeyPress(e) {
    if (e.key === "Enter") {
      this.updateFetch(this.state);
    }
  }

  updateFetch(query) {
    //passes the query parameter to app "App" component in order to modify the context and fetch the queried movies.

    this.context.updatefetchstate(query.value);
  }

  render() {
    return (
      <div className="searchContainer">
        <div className="searchContainer__bar">
          <input
            onChange={this.handleQueryChange}
            className="searchContainer__bar__input"
            type="text"
            onKeyPress={this.handleKeyPress}
          ></input>
          <BsSearch
            onClick={() => {
              this.updateFetch(this.state);
            }}
            className="searchContainer__bar__icon"
          ></BsSearch>
        </div>
      </div>
    );
  }
}
