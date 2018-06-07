import { connect } from 'react-redux';
import Top from '../components/Top';
import * as actions from '../actions/user';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = dispatch => ({
  login() {
    dispatch(actions.login());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Top);