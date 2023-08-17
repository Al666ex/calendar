

import React,{useState} from 'react'
import {Button, Form,Input} from 'antd'
import {rules} from '../utils/rules'
import {useDispatchHook} from '../hooks/useDispatchHook'
import {useTypedSelector} from '../hooks/useTypesSelector'
import { IAuth } from '../store/reducers/auth/authType'

type FieldType = {
    username?: string;
    password?: string;    
  };

const LoginForm:React.FC = () => { 

  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const {login} = useDispatchHook()
  const {isLoading, error} = useTypedSelector<IAuth>(state =>state.auth)
    
  const submit = () => {    
   login(username,password)   
  }
  return (   

    <Form className='inner' onFinish={submit}>

      {error && <h1 >Something wrong</h1>}

        <Form.Item<FieldType>
            label="Username"
            name="username"
            rules={[rules.required('Please input your username!')]}
          >
          <Input 
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </Form.Item>

        <Form.Item<FieldType>
            label="Password"
            name="password"            
            rules={[rules.required('Please input your password!')]}
          >
          <Input.Password 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>

        <Form.Item>
            <Button type="primary" htmlType='submit' loading={isLoading}>Primary Button</Button>
        </Form.Item>
      
    </Form>
    
  )
}

export default LoginForm
