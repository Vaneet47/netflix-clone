import axios from 'axios';
import {
  createListFailure,
  createListStart,
  createListSuccess,
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

export const createList = async (list, dispatch) => {
  dispatch(createListStart());
  const accessToken = JSON.parse(localStorage.getItem('user')).accessToken;

  try {
    const res = await axios.post(`api/lists`, list, {
      headers: { token: `Bearer ${accessToken}` },
    });
    dispatch(createListSuccess(res.data));
  } catch (error) {
    dispatch(createListFailure());
  }
};

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
