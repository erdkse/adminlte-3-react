import * as ActionTypes from '../actions';

const initialState = {
  isLoggedIn: false,
  currentUser: {
    email: 'mail@example.com',
    picture: null
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_USER:
      return {
        ...state,
        isLoggedIn: true
      };
    case ActionTypes.LOGOUT_USER:
      return {
        ...state,
        isLoggedIn: false
      };
    case ActionTypes.LOAD_USER:
      return {
        ...state,
        currentUser: action.currentUser
      };
    default:
      return { ...state };
  }
};

export default reducer;
