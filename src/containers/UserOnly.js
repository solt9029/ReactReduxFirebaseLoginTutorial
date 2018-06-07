import { connect } from 'react-redux';
import UserOnly from '../components/UserOnly';
import * as userActions from '../actions/user';
import * as itemActions from '../actions/item';

const mapStateToProps = (state) => ({
  user: state.user,
  item: state.item
});

const mapDispatchToProps = dispatch => ({
  logout() {
    dispatch(userActions.logout());
  },
  onValue(uid) {
    dispatch(itemActions.onValue(uid));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserOnly);