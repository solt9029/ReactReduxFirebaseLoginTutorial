import { connect } from 'react-redux';
import GuestOnly from '../components/GuestOnly';
import { login } from '../actions/user';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = dispatch => ({
  login() {
    dispatch(login());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(GuestOnly);