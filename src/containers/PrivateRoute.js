import { connect } from 'react-redux';
import PrivateRoute from '../components/PrivateRoute';
import * as actions from '../actions/User';

const mapStateToProps = (state) => ({
  uid: state.User.uid
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);