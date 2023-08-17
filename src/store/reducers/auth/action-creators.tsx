
import { IUser } from "../../../models/IUser";
import { AuthActionEnum,AuthAction } from "./authType";
import { AppDispatch } from "../..";
import UseService from '../../../api/UseService'

export const AuthActionCreators = {
    setUser : (user : IUser) : AuthAction => ({type : AuthActionEnum.SET_USER, payload : user}),
    setIAuth : (isAuth : boolean) : AuthAction => ({type : AuthActionEnum.SET_AUTH, payload : isAuth}),
    setIsLoading : (isLoading : boolean) : AuthAction => ({type : AuthActionEnum.SET_LOADING, payload : isLoading}),
    setError : (error : string) : AuthAction => ({type : AuthActionEnum.SET_ERROR, payload : error}),
    login : (username : string, password : string) => async (dispatch : AppDispatch) => {
        try {            
            dispatch(AuthActionCreators.setIsLoading(true))
            setTimeout(async () => {
                //const response = await axios.get<IUser[]>('./users.json');
                const response = await UseService.getUsers()
                const mockUser = response.data.find(user => user.username === username && user.password === password)
    
                if(mockUser){
                    localStorage.setItem('isAuth','true')
                    localStorage.setItem('mockUser',mockUser.username)
                    dispatch(AuthActionCreators.setUser(mockUser))
                    dispatch(AuthActionCreators.setIAuth(true))                    
                }else{
                    dispatch(AuthActionCreators.setError('user or password is wrong'))                
                }

            },1000)

            dispatch(AuthActionCreators.setIsLoading(false))
            
        } catch (error) {
            dispatch(AuthActionCreators.setError('Error request...'))
        }

    },
    logout : () => async (dispatch :AppDispatch) => {          
        localStorage.removeItem('isAuth')
        localStorage.removeItem('mockUser')
        dispatch(AuthActionCreators.setUser({} as IUser))
        dispatch(AuthActionCreators.setIAuth(false))
    }
}

// export const ErrorActionCreator = (payload: any)  => ({type : AuthActionEnum.SET_ERROR, payload})
// export const LoadingActionCreator = () => ({type : AuthActionEnum.SET_LOADING})