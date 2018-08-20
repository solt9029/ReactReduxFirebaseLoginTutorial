import { connect } from 'react-redux';
import UserOnly from '../components/UserOnly';
import { logout } from '../actions/user';
import { onValue, handleChangeContent, handleChangeTitle, handleSubmit } from '../actions/item';

const mapStateToProps = (state) => ({
  user: state.user,
  item: state.item
});

const mapDispatchToProps = dispatch => ({
  logout() {
    dispatch(logout());
  },
  onValue() {
    dispatch(onValue());
  },
  handleChangeContent(value) {
    dispatch(handleChangeContent(value));
  },
  handleChangeTitle(value) {
    dispatch(handleChangeTitle(value));
  },
  handleSubmit(event) {
    dispatch(handleSubmit(event));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserOnly);