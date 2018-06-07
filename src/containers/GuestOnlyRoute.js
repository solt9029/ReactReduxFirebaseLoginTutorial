import { connect } from 'react-redux';
import GuestOnlyRoute from '../components/GuestOnlyRoute';
import * as actions from '../actions/user';

const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(GuestOnlyRoute);