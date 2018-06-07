import { connect } from 'react-redux';
import App from '../components/App';
import * as actions from '../actions/user';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = dispatch => ({
  onAuthStateChanged() {
    dispatch(actions.onAuthStateChanged());
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));