import axios from 'axios';
import {
  deleteListsFailure,
  deleteListsStart,
  deleteListsSuccess,
  getListsFailure,
  getListsStart,
  getListsSuccess,
} from './ListActions';

export const getLists = async (dispatch) => {
  dispatch(getListsStart());
  const accessToken = JSON.parse(localStorage.getItem('user')).accessToken;

  try {
    const res = await axios.get(`api/lists`, {
      headers: { token: `Bearer ${accessToken}` },
    });
    dispatch(getListsSuccess(res.data));
  } catch (error) {
    dispatch(getListsFailure());
  }
};

// export const createMovie = async (movie, dispatch) => {
//   dispatch(createMovieStart());
//   const accessToken = JSON.parse(localStorage.getItem('user')).accessToken;

//   try {
//     const res = await axios.post(`api/movies`, movie, {
//       headers: { token: `Bearer ${accessToken}` },
//     });
//     dispatch(createMovieSuccess(res.data));
//   } catch (error) {
//     dispatch(createMovieFailure());
//   }
// };

export const deleteList = async (id, dispatch) => {
  dispatch(deleteListsStart());
  const accessToken = JSON.parse(localStorage.getItem('user')).accessToken;

  try {
    await axios.delete(`api/lists/${id}`, {
      headers: { token: `Bearer ${accessToken}` },
    });
    dispatch(deleteListsSuccess(id));
  } catch (error) {
    dispatch(deleteListsFailure());
  }
};
