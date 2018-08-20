const initialState = {
  list: [],
  title: '',
  content: ''
};

export default (state = initialState, action) => {
  switch (action.type) {    
    case 'ADD_LIST':
      return {
        ...state,
        list: action.payload.list
      };

    case 'CHANGE_TITLE':
      return {
        ...state,
        title: action.payload.title
      };

    case 'CHANGE_CONTENT':
      return {
        ...state,
        content: action.payload.content
      };
    
    case 'SUBMIT':
      return {
        ...state,
        title: '',
        content: ''
      };

    default:
      return state;
  }
}