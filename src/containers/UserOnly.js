import { connect } from 'react-redux';
import UserOnly from '../components/UserOnly';
import * as actions from '../actions/User';

const mapStateToProps = (state) => ({
  user: state.User.user
});

const mapDispatchToProps = dispatch => ({
  login() {
    dispatch(actions.login());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserOnly);