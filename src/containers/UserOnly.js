import { connect } from 'react-redux';
import UserOnly from '../components/UserOnly';
import * as actions from '../actions/User';

const mapStateToProps = (state) => ({
  displayName: state.User.displayName,
  email: state.User.email,
  phoneNumber: state.User.phoneNumber,
  photoURL: state.User.photoURL,
  providerId: state.User.providerId,
  uid: state.User.uid
});

const mapDispatchToProps = dispatch => ({
  login() {
    dispatch(actions.login());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserOnly);