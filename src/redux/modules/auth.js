const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
//const LOGIN_FAILURE = 'LOGIN_FAILURE';

const initialState = {
  user: {},
  isLoading: false,
};

export default function reducer(state = initialState, action = {}) {
  switch(action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.data,
      };
    default:
      return state;
  };
};

export function login() {
  return dispatch => {
    dispatch(loginRequest());


    return dispatch(loginSuccess());
  };

};

function loginRequest() {
  return {
    type: LOGIN_REQUEST,
  };
};

function loginSuccess() {
  const user = {
    username: 'johndoe',
  };

  return {
    type: LOGIN_SUCCESS,
    data: user,
  };
};
