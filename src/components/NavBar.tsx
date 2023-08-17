

import React from 'react'
import {Layout,Row,Menu} from 'antd'
import {useNavigate} from 'react-router-dom'
import { RouteNames } from '../router'
import {useTypedSelector} from '../hooks/useTypesSelector'
import { useDispatchHook } from '../hooks/useDispatchHook'

const NavBar = () => {
  const {isAuth,user  } = useTypedSelector(state => state.auth)

  const {logout} = useDispatchHook()

  const navigate = useNavigate()
  return (
    <div>
        <Layout.Header>
            <Row justify={'end'}>
              {
                isAuth ? 
                <>
                  <div style={{color:'white'}}>
                    {user.username}
                  </div>
                  <Menu  theme="dark" mode="horizontal" selectable={false}>
                    <Menu.Item 
                      key={RouteNames.event}
                      onClick={() => logout()}
                    >
                      Выйти
                    </Menu.Item>                
                  </Menu>
                </> :
                <Menu  theme="dark" mode="horizontal" selectable={false}>
                  <Menu.Item 
                    key={RouteNames.login}
                    onClick={() => navigate(RouteNames.login)}
                  >
                    Login
                  </Menu.Item>                
                </Menu>           

              }
                
            </Row>
        </Layout.Header>
      
    </div>
  )
}

export default NavBar
