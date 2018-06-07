import { auth, provider } from '../firebase';
import { history } from '../history';

export const endLogin = user => ({
  type: 'END_LOGIN',
  payload: {
    displayName: user.displayName,
    email: user.email,
    phoneNumber: user.phoneNumber,
    photoURL: user.photoURL,
    providerId: user.providerId,
    uid: user.uid
  }
});

export const login = () => {
  return (dispatch) => {
    auth.signInWithPopup(provider).then((result) => {
      dispatch(endLogin(result.user));
      history.push('/home');
    });
  };
};

export const endLogout = () => ({
  type: 'END_LOGOUT',
  payload: {}
});

export const logout = () => {
  return (dispatch) => {
    auth.signOut().then((result) => {
      dispatch(endLogout());
      history.push('/');
    });
  };
};