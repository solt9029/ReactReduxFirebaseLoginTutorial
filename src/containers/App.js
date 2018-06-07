import { connect } from 'react-redux';
import App from '../components/App';
import { onAuthStateChanged } from '../actions/user';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = dispatch => ({
  onAuthStateChanged() {
    dispatch(onAuthStateChanged());
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));