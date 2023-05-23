export const getListsStart = () => ({
  type: 'GET_LISTS_START',
});
export const getListsSuccess = (lists) => ({
  type: 'GET_LISTS_SUCCESS',
  payload: lists,
});
export const getListsFailure = () => ({
  type: 'GET_LISTS_FAILURE',
});

// //create
// export const createMovieStart = () => ({
//   type: 'CREATE_MOVIE_START',
// });
// export const createMovieSuccess = (movie) => ({
//   type: 'CREATE_MOVIE_SUCCESS',
//   payload: movie,
// });
// export const createMovieFailure = () => ({
//   type: 'CREATE_MOVIE_FAILURE',
// });

// //delete
export const deleteListsStart = () => ({
  type: 'DELETE_LISTS_START',
});
export const deleteListsSuccess = (id) => ({
  type: 'DELETE_LISTS_SUCCESS',
  payload: id,
});
export const deleteListsFailure = () => ({
  type: 'DELETE_LISTS_FAILURE',
});

// //update
// export const updateMovieStart = () => ({
//   type: 'UPDATE_MOVIE_START',
// });
// export const updateMovieSuccess = (movie) => ({
//   type: 'UPDATE_MOVIE_SUCCESS',
//   payload: movie,
// });
// export const updateMovieFailure = () => ({
//   type: 'UPDATE_MOVIE_FAILURE',
// });
