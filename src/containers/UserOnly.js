import { connect } from 'react-redux';
import UserOnly from '../components/UserOnly';
import { logout } from '../actions/user';
import { onValue } from '../actions/item';

const mapStateToProps = (state) => ({
  user: state.user,
  item: state.item
});

const mapDispatchToProps = dispatch => ({
  logout() {
    dispatch(logout());
  },
  onValue(uid) {
    dispatch(onValue(uid));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserOnly);