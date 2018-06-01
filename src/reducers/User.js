const initialState = {
  displayName: null,
  email: null,
  phoneNumber: null,
  photoURL: null,
  providerid: null,
  uid: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'START_LOGIN':
      return initialState;
    
    case 'END_LOGIN':
      return {
        ...state,
        displayName: action.payload.displayName,
        email: action.payload.email,
        phoneNumber: action.payload.phoneNumber,
        photoURL: action.payload.photoURL,
        providerId: action.payload.providerId,
        uid: action.payload.uid
      }

    default:
      return state;
  }
}