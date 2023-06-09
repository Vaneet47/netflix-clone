export const loginStart = () => ({
  type: 'LOGIN_START',
});
export const loginSuccess = (user) => ({
  type: 'LOGIN_SUCCESS',
  payload: user,
});
export const loginFailure = () => ({
  type: 'LOGIN_FAILURE',
});

// logout
export const logoutStart = () => ({
  type: 'LOGOUT',
});
// export const logoutSuccess = (user) => ({
//   type: 'LOGOUT_SUCCESS',
//   payload: user,
// });
// export const logoutFailure = () => ({
//   type: 'LOGOUT_FAILURE',
// });
