import { connect } from 'react-redux';
import GuestOnlyRoute from '../components/GuestOnlyRoute';

const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(GuestOnlyRoute);