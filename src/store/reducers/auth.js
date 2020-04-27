import * as ActionTypes from '../actions';

const initialState = {
  isLoggedIn: false,
  currentUser: {}
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
    default:
      return { ...state };
  }
};

export default reducer;
