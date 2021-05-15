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
    if (action.type === ActionTypes.LOGIN_USER) {
        localStorage.setItem('token', action.token);
        return {
            ...state,
            isLoggedIn: true,
            token: action.token
        };
    }

    if (action.type === ActionTypes.LOGOUT_USER) {
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
    }
    if (action.type === ActionTypes.LOAD_USER) {
        return {
            ...state,
            currentUser: action.currentUser
        };
    }

    return {...state};
};

export default reducer;
