import { connect } from 'react-redux';
import PrivateRoute from '../components/PrivateRoute';
import * as actions from '../actions/user';

const mapStateToProps = (state) => ({
  uid: state.user.uid
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);