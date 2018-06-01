const initialState = {
  user: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'START_LOGIN':
      return {
        ...state,
        user: null
      };
    
    case 'END_LOGIN':
      return {
        ...state,
        user: action.payload.user
      }

    default:
      return state;
  }
}