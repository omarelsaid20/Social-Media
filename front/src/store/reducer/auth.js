import * as actionTypes from '../action/actionTypes';

const initialState = {
    authErrors: [],
    loading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: 
        return {
            ...state,
            loading: true
        }
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                authData: action.authData,
                loading: false
            };
        case actionTypes.AUTH_FAIL:
            return {
                ...state,
                authErrors: action.error,
                loading: true
            }
        default:
            return state;
    }
}

export default reducer;