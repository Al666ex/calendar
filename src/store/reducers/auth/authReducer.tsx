import React from 'react'
import {IAuth,AuthAction,AuthActionEnum} from './authType'
import {IUser} from '../../../models/IUser'

const intitState:IAuth = {
    isAuth : false,
    error : '',
    isLoading : false,
    user : {} as IUser

}

export default function authReducer(state = intitState, action : AuthAction):IAuth {

    switch (action.type) {
        case AuthActionEnum.SET_AUTH :
            return {...state, isAuth : action.payload, isLoading : false}        
            
        case AuthActionEnum.SET_ERROR : 
            return {...state, error : action.payload, isLoading : false}

        case AuthActionEnum.SET_LOADING : 
            return {...state, isLoading : action.payload }

        case AuthActionEnum.SET_USER :
            return {...state, user : action.payload}
        default:
            return state;
    }      

}
