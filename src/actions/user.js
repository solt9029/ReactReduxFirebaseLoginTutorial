import { auth, provider } from '../firebase';

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
    });
  };
};

export const onAuthStateChanged = () => {
  return (dispatch) => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        return;
      }
      dispatch(endLogin(user));
    });
  };
};