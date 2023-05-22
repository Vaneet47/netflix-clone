import axios from 'axios';
import {
  createMovieFailure,
  createMovieStart,
  createMovieSuccess,
  deleteMovieFailure,
  deleteMovieStart,
  deleteMovieSuccess,
  getMoviesFailure,
  getMoviesStart,
  getMoviesSuccess,
} from './MovieActions';

export const getMovies = async (dispatch) => {
  dispatch(getMoviesStart());
  const accessToken = JSON.parse(localStorage.getItem('user')).accessToken;

  try {
    const res = await axios.get(`api/movies`, {
      headers: { token: `Bearer ${accessToken}` },
    });
    dispatch(getMoviesSuccess(res.data));
  } catch (error) {
    dispatch(getMoviesFailure());
  }
};

export const createMovie = async (movie, dispatch) => {
  dispatch(createMovieStart());
  const accessToken = JSON.parse(localStorage.getItem('user')).accessToken;

  try {
    const res = await axios.post(`api/movies`, movie, {
      headers: { token: `Bearer ${accessToken}` },
    });
    dispatch(createMovieSuccess(res.data));
  } catch (error) {
    dispatch(createMovieFailure());
  }
};

export const deleteMovie = async (id, dispatch) => {
  dispatch(deleteMovieStart());
  const accessToken = JSON.parse(localStorage.getItem('user')).accessToken;

  try {
    await axios.delete(`api/movies/${id}`, {
      headers: { token: `Bearer ${accessToken}` },
    });
    dispatch(deleteMovieSuccess(id));
  } catch (error) {
    dispatch(deleteMovieFailure());
  }
};
