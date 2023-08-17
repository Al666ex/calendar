
import React from 'react'
import {Routes, Route, Navigate } from 'react-router-dom'
import {publicRoutes, privateRoutes, RouteNames} from '../router'
import Event from '../pages/Event'
import Login from '../pages/Login'
import {useTypedSelector} from '../hooks/useTypesSelector'

const AppRouter = () => {
    const {isAuth} = useTypedSelector(state => state.auth)

  return (
    <>
        {
            isAuth ?
            <Routes>
                {
                    privateRoutes.map(route => <Route key={route.path} path={route.path} element={<route.element />} />)                                        
                }
                <Route path="*" element={<Event />} />
            </Routes> :
            <Routes>
                {
                    publicRoutes.map(route => <Route key={route.path} path={route.path} element={<route.element />} />)
                }  
                <Route path="*" element={<Login />} />              
 
            </Routes>
            
        }
      
    </>
  )
}

export default AppRouter
