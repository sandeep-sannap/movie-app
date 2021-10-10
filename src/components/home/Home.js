import React, { useEffect } from "react";
import "./home.css";

import MovieListing from "../movie-listing/MovieListing";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../redux/Movies/movieSlice";

export default function Home() {
  const dispatch = useDispatch();

  const searchTerm = "Mission";

  useEffect(() => {
    dispatch(fetchAsyncMovies(searchTerm));
    dispatch(fetchAsyncShows(searchTerm));
  }, [dispatch]);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
}
