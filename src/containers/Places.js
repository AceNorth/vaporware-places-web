import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as placesActions from '../redux/modules/places';
import Places from '../components/Places';

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    places: state.places.places,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators,
    placesActions,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Places);
