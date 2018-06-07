import { connect } from 'react-redux';
import SwitchRoute from '../components/SwitchRoute';

const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(SwitchRoute);