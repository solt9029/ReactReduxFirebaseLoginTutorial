import { auth, provider } from '../firebase';

export const startLogin = () => ({
  type: 'START_LOGIN',
  payload: {}
});

export const endLogin = user => ({
  type: 'END_LOGIN',
  payload: {
    user: user
  }
});

export const login = () => {
  return (dispatch) => {
    dispatch(startLogin());
    auth.signInWithPopup(provider).then((result) => {
      const user = result.user;
      dispatch(endLogin(user));
    });
  }
}