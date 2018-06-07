import { connect } from 'react-redux';
import UserOnlyRoute from '../components/UserOnlyRoute';

const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(UserOnlyRoute);