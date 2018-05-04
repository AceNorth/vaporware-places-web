const GET_PLACES_REQUEST = 'GET_PLACES_REQUEST';
const GET_PLACES_SUCCESS = 'GET_PLACES_SUCCESS';
const CREATE_PLACE_REQUEST = 'CREATE_PLACE_REQUEST';
const CREATE_PLACE_SUCCESS = 'CREATE_PLACE_SUCCESS';

const initialState = {
  places: [],
  isLoading: false,
};

export default function reducer(state = initialState, action = {}) {
  switch(action.type) {
    case GET_PLACES_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_PLACES_SUCCESS:
      return {
        ...state,
        places: action.data,
        isLoading: false,
      };
    case CREATE_PLACE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case CREATE_PLACE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        places: state.places.push(action.data),
      };
    default:
      return state;
      // eslint-disable-next-line
  };
};

export function getPlaces() {
  return dispatch => {
    dispatch(getPlacesRequest());

    return dispatch(getPlacesSuccess());
  };
};

function getPlacesRequest() {
  return {
    type: GET_PLACES_REQUEST,
  };
};

function getPlacesSuccess() {
  const places = [
    {
      id: Math.random(),
      name: "Demo's Pizza",
      address: "222 Glenwood Ave. #121, Raleigh, NC 27603",
      lat: "35.783625",
      lng: "-78.647145",
    },
    {
      id: Math.random(),
      name: "Second Empire",
      address: "330 Hillsborough St., Raleigh, NC 27603",
      lat: "35.780962",
      lng: "-78.644705",
    },
    {
      id: Math.random(),
      name: "Angus Barn",
      address: "9401 Glenwood Ave. Raleigh, NC 27617",
      lat: "35.899187",
      lng: "-78.763583",
    },
  ]
  return {
    type: GET_PLACES_SUCCESS,
    data: places,
  };
};

export function createPlace(place) {
  return dispatch => {
    dispatch(createPlaceRequest());

    return dispatch(createPlaceSuccess(place));
  };
};

function createPlaceRequest() {
  return {
    type: CREATE_PLACE_REQUEST,
  };
};

function createPlaceSuccess(place) {
  return {
    type: CREATE_PLACE_SUCCESS,
    data: place,
  };
};
