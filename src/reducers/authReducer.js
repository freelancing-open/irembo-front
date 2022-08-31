 
import { AUTH_SUCCESS, AUTH_FAILURE, REGISTER_SUCCESS, REGISTER_FAILURE, USER_LOADED, UPDATE_USER, LOGOUT_ACTION } from '../actions/types';

let initialState = {
    token: null,
    isAuthenticated: false,
    user: null,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case AUTH_FAILURE:
        case REGISTER_FAILURE:
            return {
                ...state,
                user: null,
                isAuthenticated: false,
                error: {...action.payload, type: action.type}
            }
        case AUTH_SUCCESS:
        case REGISTER_SUCCESS:
                return {
                    ...state,
                    token: action.payload,
                    isAuthenticated: true,
                    error: null
            }
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
                error: null
            };
        case UPDATE_USER:
            let newData;
            if(action.payload){
                newData = action.payload
            }
            console.log({
                ...state,
                user:{
                    ...state.user,
                    ...newData
                },
            })
            return {
                ...state,
                user:{
                    ...state.user,
                    ...newData
                },
            }
        case LOGOUT_ACTION:
            return {
                token: null,
                isAuthenticated: false,
                user: null,
                error: null
            }
        default:
            return state;
    }
}