import { connect } from 'react-redux';
import UserOnly from '../components/UserOnly';
import * as actions from '../actions/user';

const mapStateToProps = (state) => ({
  displayName: state.user.displayName,
  email: state.user.email,
  phoneNumber: state.user.phoneNumber,
  photoURL: state.user.photoURL,
  providerId: state.user.providerId,
  uid: state.user.uid
});

const mapDispatchToProps = dispatch => ({
  logout() {
    dispatch(actions.logout());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserOnly);