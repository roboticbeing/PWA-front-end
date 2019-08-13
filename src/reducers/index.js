import * as actionTypes from '../actions';

const initialState = {
    isAuthenticated: false,
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.LOGIN:
            return { ...state, isAuthenticated: true };
        case actionTypes.LOGOUT:
            return { ...state, isAuthenticated: false };
        default:
            return state;
    }
};

export default reducer;