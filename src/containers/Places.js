import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getPlaces, createPlace } from '../redux/modules/places';
import Places from '../components/Places';

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    places: state.places.places,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators({
      getPlaces,
      createPlace,
    }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Places);
