import { connect } from 'react-redux';
import PrivateRoute from '../components/PrivateRoute';
import * as actions from '../actions/User';

const mapStateToProps = (state) => ({
  user: state.User.user
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);