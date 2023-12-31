import React from 'react'
import { Layout, Row,Card } from 'antd'
import LoginForm from '../components/LoginForm'

const Login:React.FC = () => {
  return (
    <Layout className='login_layout'>
      <Row justify='center' align='middle' className='h1'>
        <Card>
          <LoginForm />
        </Card>        
      </Row>      
    </Layout>
  )
}

export default Login
