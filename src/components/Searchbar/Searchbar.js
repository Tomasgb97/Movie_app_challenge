import React, { useState, useContext } from "react";
import { BsSearch } from "react-icons/bs";
import MyContext from "../Mycontext";

export default function Searchbar() {
  const [value, setValue] = useState("");
  const context = useContext(MyContext);

  const handleQueryChange = (e) => {
    setValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      updateFetch(value);
    }
  };

  const updateFetch = (query) => {
    //passes the query parameter to app "App" component in order to modify the context and fetch the queried movies.

    context.updatefetchstate(query);
  };

  return (
    <div className="searchContainer">
      <div className="searchContainer__bar">
        <input
          onChange={handleQueryChange}
          className="searchContainer__bar__input"
          type="text"
          onKeyPress={handleKeyPress}
        ></input>
        <BsSearch
          onClick={() => {
            updateFetch(value);
          }}
          className="searchContainer__bar__icon"
        ></BsSearch>
      </div>
    </div>
  );
}
