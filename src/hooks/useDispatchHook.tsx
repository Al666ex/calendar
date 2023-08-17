import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
//import { AuthActionCreators } from "../store/reducers/auth/action-creators"
//import {AppDispatch} from '../store'
import {allActionCreators} from '../store/reducers/action-creators'

export const useDispatchHook = () => {
    //const dispatch = useDispatch<AppDispatch>()
    const dispatch = useDispatch()
    return bindActionCreators(allActionCreators,dispatch)
}