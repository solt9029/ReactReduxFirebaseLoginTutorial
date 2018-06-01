import { connect } from 'react-redux';
import UserComponent from '../components/UserComponent';
import * as actions from '../actions/User';

const mapStateToProps = (state) => ({
  user: state.User.user
});

const mapDispatchToProps = dispatch => ({
  login() {
    dispatch(actions.login());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserComponent);