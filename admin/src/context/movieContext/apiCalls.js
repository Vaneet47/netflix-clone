import axios from 'axios';
import {
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
