import { connect } from 'react-redux';
import UserOnly from '../components/UserOnly';
import * as actions from '../actions/user';

const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  logout() {
    dispatch(actions.logout());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserOnly);