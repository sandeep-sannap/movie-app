import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import "./movie-detail.css";
import {
  fetchAsyncMovieorShowDetail,
  getSelectedMovieorShow,
  removeSelectedMovieorShow,
} from "../../redux/Movies/movieSlice";
import { useSelector } from "react-redux";

export default function MovieDetails() {
  const { imdbID } = useParams();
  console.log("imdb", imdbID);
  const dispatch = useDispatch();

  const data = useSelector(getSelectedMovieorShow);
  console.log(data);

  useEffect(() => {
    dispatch(fetchAsyncMovieorShowDetail(imdbID));

    return () => {
      dispatch(removeSelectedMovieorShow());
    };
  }, [dispatch, imdbID]);

  return (
    <div className="movie-section">
      {Object.keys(data).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <>
          <div className="movie-section-left">
            <div className="movie-title">{data.Title}</div>
            <div className="movie-rating">
              <span>
                IMDB rating <i className="fa fa-star"></i>
                {data.imdbRating}
              </span>
              <span>
                IMDB votes <i className="fa fa-thumbs-up"></i>
                {data.imdbVotes}
              </span>
              <span>
                Runtime <i className="fa fa-fill"></i>
                {data.Runtime}
              </span>
              <span>
                Year <i className="fa fa-calendar"></i>
                {data.Year}
              </span>
            </div>

            <div className="movie-plot">{data.Plot}</div>
            <div className="movie-info">
              <div>
                <span>Director</span>
                <span>{data.Director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{data.Actors}</span>
              </div>
              <div>
                <span>Genress</span>
                <span>{data.Genre}</span>
              </div>
              <div>
                <span>Languages</span>
                <span>{data.Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{data.Awards}</span>
              </div>
            </div>
          </div>
          <div className="section-right">
            <img src={data.Poster} alt={data.Title} />
          </div>
        </>
      )}
    </div>
  );
}
