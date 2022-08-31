import { AUTH_SUCCESS, AUTH_FAILURE, REGISTER_SUCCESS, REGISTER_FAILURE, USER_LOADED, UPDATE_USER, LOGOUT_ACTION } from './types';
import { setJWT, request } from '../utility/request';

export const loginAction = (type, data) => (dispatch) => {
    request(`/api/v1/auth`, {
        method: 'POST',
        body: JSON.stringify(data)
    }).then(str => {
        //get jwt from str
        let jwt = str.data
        setJWT(jwt);
        dispatch({
            type: AUTH_SUCCESS,
            payload: jwt
        })
        dispatch(loadUserAction());
    }).catch((error) => {
        // get and create an error        
        if(error.code === 401){
            error.message = "Incorrect Credentials";
        }
        dispatch({
            type: AUTH_FAILURE,
            payload: error
        })
    })
}

export const registerAction = (data) => (dispatch) => {
    request('/api/v1/auth/signup', {
        method: 'POST',
        body: JSON.stringify(data)
    }).then(str => {
        let jwt = str.data
        console.log(jwt);
        setJWT(jwt);
        dispatch({
            type: AUTH_SUCCESS,
            payload: jwt
        })
        dispatch(loadUserAction());
    }).catch((error) => {
        dispatch({
            type: REGISTER_FAILURE,
            payload: error
        })
    })
}

export const logoutAction = () => (dispatch) =>{
    dispatch({
        type: LOGOUT_ACTION
    })
}

export const loadUserAction = () => (dispatch) => {
    request("/api/v1/users/user", {
        method: 'GET',
    }).then(data => {
        //get the user data
        let user = data;
        dispatch({
            type: USER_LOADED,
            payload: user
        })
    }).catch(e => {
        //get error
        let error = '';
        dispatch({
            type: AUTH_FAILURE,
            payload: error
        })
    })
}

export const updatePicture = (obj)=>(dispatch) =>{
   /* request(`/Challengemee/users/${obj.matricule}/edit/profile-pic`, {
        headers:{
            'Content-Type': "multipart/form-data",
        },
        unencrypted: true,
        notencrypt: true,
        method: 'PATCH',
        body: obj.body
    }).then(str=>{
        console.log(str);
        let data  = JSON.stringify(str);
        dispatch({
            type: UPDATE_USER,
            payload: data
        })
    }).catch(e =>{
        
    } )*/
}
