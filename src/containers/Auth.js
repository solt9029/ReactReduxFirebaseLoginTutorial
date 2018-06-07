import { connect } from 'react-redux';
import Auth from '../components/Auth';
import * as actions from '../actions/user';

const mapStateToProps = (state) => ({
  uid: state.user.uid
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);