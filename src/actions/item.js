import firebase, { auth, provider } from '../firebase';

export const addList = list => ({
  type: 'ADD_LIST',
  payload: {
    list: list
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