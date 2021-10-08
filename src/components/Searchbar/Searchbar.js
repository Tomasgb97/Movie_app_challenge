import React, { useState, useContext, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import MyContext from "../Mycontext";

export default function Searchbar() {
  const [value, setValue] = useState("");
  const context = useContext(MyContext);

  useEffect(() => {
    const timeout = setTimeout(() => {
      updateFetch(value);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [value]);

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
        />
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
