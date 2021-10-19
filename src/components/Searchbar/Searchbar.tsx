import React, { useState, useContext, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import MyContext from "../Mycontext";
import FavsBttn from "../../components/FavsBttn";

const Searchbar: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const context = useContext(MyContext);

  useEffect(() => {
    const timeout = setTimeout(() => {
      updateFetch(value);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [value]);

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      updateFetch(value);
    }
  };

  const updateFetch = (query: string) => {
    //passes the query parameter to app "App" component in order to modify the context and fetch the queried movies.

    context.updateFetchState(query);
  };

  return (
    <div className="searchContainer">
      <div className="searchContainer__bar">
        <FavsBttn></FavsBttn>
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
};

export default Searchbar;
