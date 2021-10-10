import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { ApiKey } from "../../common/apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {
    const response = await movieApi.get(
      `?apiKey=${ApiKey}&s=${term}&type=movie`
    );

    return response.data;
  }
);
export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (term) => {
    const response = await movieApi.get(
      `?apiKey=${ApiKey}&s=${term}&type=series`
    );

    return response.data;
  }
);
export const fetchAsyncMovieorShowDetail = createAsyncThunk(
  "movies/fetchAsyncMovieorShowDetail",
  async (id) => {
    const response = await movieApi.get(`?apiKey=${ApiKey}&i=${id}&Plot=full`);

    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  selectedMoviorShow: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovieorShow: (state) => {
      state.selectedMoviorShow = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Fullfilled");

      return { ...state, movies: payload };
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("Fullfilled");

      return { ...state, shows: payload };
    },
    [fetchAsyncMovieorShowDetail.fulfilled]: (state, { payload }) => {
      console.log("Fullfilled");

      return { ...state, selectedMoviorShow: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected");
    },
  },
});

export const { removeSelectedMovieorShow } = movieSlice.actions;

export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieorShow = (state) =>
  state.movies.selectedMoviorShow;

export default movieSlice.reducer;
