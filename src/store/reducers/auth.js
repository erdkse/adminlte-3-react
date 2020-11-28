import * as ActionTypes from '../actions';

const initialState = {
    isLoggedIn: !!localStorage.getItem('token'),
    token: localStorage.getItem('token'),
    currentUser: {
        email: 'mail@example.com',
        picture: null
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.LOGIN_USER:
            localStorage.setItem('token', action.token);
            return {
                ...state,
                isLoggedIn: true,
                token: action.token
            };
        case ActionTypes.LOGOUT_USER:
            localStorage.removeItem('token');
            return {
                ...state,
                isLoggedIn: false,
                token: null,
                currentUser: {
                    email: 'mail@example.com',
                    picture: null
                }
            };
        case ActionTypes.LOAD_USER:
            return {
                ...state,
                currentUser: action.currentUser
            };
        default:
            return {...state};
    }
};

export default reducer;
