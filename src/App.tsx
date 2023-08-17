import React, { useEffect } from 'react'
import AppRouter from './components/AppRouter'
import 'antd'
import NavBar from './components/NavBar'
import { useTypedSelector } from './hooks/useTypesSelector'
import { useDispatchHook } from './hooks/useDispatchHook'
import { IUser } from './models/IUser'

const App:React.FC = () => {
  const {isAuth,user} = useTypedSelector(state => state.auth)
  const {setIAuth,setUser} = useDispatchHook()

  useEffect(() => {
    if(localStorage.getItem('mockUser') && localStorage.getItem('isAuth')){
      setIAuth(true)
      setUser({username : localStorage.getItem('mockUser' || '')} as IUser)
    }
  },[])

  return (
    <div>      
      <NavBar/>
      <AppRouter/>
    </div>
  )
}

export default App
