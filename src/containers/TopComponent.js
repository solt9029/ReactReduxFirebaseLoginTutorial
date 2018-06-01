import { connect } from 'react-redux';
import TopComponent from '../components/TopComponent';
import * as actions from '../actions/User';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = dispatch => ({
  login() {
    dispatch(actions.login());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TopComponent);