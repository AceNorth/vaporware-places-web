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
        places: [...state.places, action.data],
      };
    default:
      return state;
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
    {id: 1, name: "DeMo's Pizza", address: ""},
  ]
  return {
    type: GET_PLACES_SUCCESS,
    data: places,
  };
};

export function createPlace() {
  return dispatch => {
    dispatch(createPlaceRequest());

    return dispatch(createPlaceSuccess());
  };
};

function createPlaceRequest() {
  return {
    type: CREATE_PLACE_REQUEST,
  };
};

function createPlaceSuccess() {
  const place = {
    name: "Armadillo Grill",
    address: "439 Glenwood Ave, Raleigh, NC 27603",
  };

  return {
    type: CREATE_PLACE_SUCCESS,
    data: place,
  };
};
