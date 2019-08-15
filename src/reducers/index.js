import * as actionTypes from '../actions';

const initialState = {
    feed: null,
    feedTimestamp: null,
    isAuthenticated: false
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.GET_FEED:
            return { ...state, feed: action.data };
        case actionTypes.GET_FEED_TIMESTAMP:
            return { ...state, feedTimestamp: action.timestamp };
        case actionTypes.LOGIN:
            return { ...state, isAuthenticated: true };
        case actionTypes.LOGOUT:
            return { ...state, isAuthenticated: false };
        default:
            return state;
    }
};

export default reducer;