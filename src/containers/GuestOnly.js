import { connect } from 'react-redux';
import GuestOnly from '../components/GuestOnly';
import * as actions from '../actions/user';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = dispatch => ({
  login() {
    dispatch(actions.login());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(GuestOnly);