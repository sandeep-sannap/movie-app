import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../redux/Movies/movieSlice";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchAsyncMovies(searchTerm));

    dispatch(fetchAsyncShows(searchTerm));
  };
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">Movie App.</Link>
      </div>

      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={searchTerm}
            placeholder="Search Movies or Shows"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>

      <div className="user-image">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.qd-FmnNIgg7JhWtnZCss5gHaFK%26pid%3DApi&f=1"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Header;
