import firebase, { auth, provider } from '../firebase';

export const addList = list => ({
  type: 'ADD_LIST',
  payload: {
    list: list
  }
});

export const submit = () => ({
  type: 'SUBMIT'
});

export const handleSubmit = (event) => {
  return (dispatch, getState) => {
    event.preventDefault();
    const uid = getState().user.uid;
    const userRef = firebase.database().ref(uid);
    const title = getState().item.title;
    const content = getState().item.content;
    const item = {
      title: title,
      content: content
    };
    userRef.push(item);
    dispatch(submit());
  };
}

export const handleChangeTitle = value => ({
  type: 'CHANGE_TITLE',
  payload: {
    title: value
  }
});

export const handleChangeContent = value => ({
  type: 'CHANGE_CONTENT',
  payload: {
    content: value
  }
});

export const onValue = () => {
  return (dispatch, getState) => {
    const uid = getState().user.uid;
    firebase.database().ref(uid).on('value', (snapshot) => {
      let value = snapshot.val();
      let list = [];
      for (let id in value) {
        list.push({
          id: id,
          title: value[id].title,
          content: value[id].content
        });
      }
      dispatch(addList(list));
    })
  }
}