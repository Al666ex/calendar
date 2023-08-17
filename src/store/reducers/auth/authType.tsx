import { IUser } from "../../../models/IUser";

export interface IAuth{
    isAuth : boolean;
    user : IUser;
    isLoading : boolean;
    error : string
}

export enum AuthActionEnum{
    SET_AUTH = 'SET_AUTH',
    SET_USER = 'SET_USER',
    SET_LOADING = 'SET_LOADING',
    SET_ERROR = 'SET_ERROR'
}

interface AuthSetAction{
    type : AuthActionEnum.SET_AUTH;
    payload : boolean
}

interface SetErrorAction{
    type : AuthActionEnum.SET_ERROR;
    payload : string 
}

interface SetUSerAction{
    type : AuthActionEnum.SET_USER;
    payload : IUser
}

interface setLoadingAction{
    type : AuthActionEnum.SET_LOADING;
    payload : boolean
}

export type AuthAction = AuthSetAction | SetErrorAction | SetUSerAction | setLoadingAction