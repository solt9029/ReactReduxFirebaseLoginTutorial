const initialState = {
  list: []
};

export default (state = initialState, action) => {
  switch (action.type) {    
    case 'ADD_LIST':
      return {
        ...state,
        list: action.payload.list
      }

    default:
      return state;
  }
}