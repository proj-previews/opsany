import  * as React from 'react'
import { useState, useEffect } from 'react'
import {Form, Input, Button, Checkbox} from 'antd'
import { NavLink } from 'react-router-dom'
import './index.less'
import LogoImg from '../../resources/login-header.png'
import TitleImg from '../../resources/login-title.png'
import LoginImg from '../../resources/login-img.png'
import {
    HelpText,
    FooterText,
    LoginTitle,
    UserNameText,
    PwdText,
    SubmitText,
    RememberText,
    ForgetPwd,
} from '../../constant/login'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import GithubCorners from '../../components/github-corners'
const Login = () => {
        const [form] = Form.useForm()
        const onFinish = (values) => {
            console.log('Login:', values)
        }
        const [, forceUpdate] = useState({}) // To disable submit button at the beginning
        useEffect(()=>{
            forceUpdate({})
        }, [])
        return (
            <div className='page-content'>
                <GithubCorners 
                fixed
                bottom
                bgColor='#28a745'
                zIndex={99}
                target='__blank'
                href='https://github.com/researchlab/febp/tree/master/react-practice/21-opsany'
                />
                <div className='header'>
                    <NavLink to='/'>
                    
                    <div className='logo'>
                    <span><strong style={{color:'red', fontSize: '28px'}}><code>Fake</code></strong> </span>
                        <img src={LogoImg} alt='' /></div>
                    </NavLink>
                    <div className='menu'>
                        {HelpText}
                    </div>
                </div>
                <div className='title'><img src={TitleImg} alt='' style={{width: '540px'}}/></div>
                <div className='imgbox'><img src={LoginImg} alt='' /></div>
                <div className='login-form'>
                    <div className='login-form-title'>{LoginTitle}</div>
                    <div className='login-form-detail'>
                        <Form
                        form={form}
                        onFinish={onFinish}
                        initialValues={{remember: true}}
                        className='login-form-detail-content'
                        >
                            <Form.Item
                                name='username'
                                rules={[
                                    {
                                        required: true,
                                        message: {UserNameText}
                                    }
                                ]}
                            >
                                <Input 
                                prefix={<UserOutlined style={{color:'red'}}/>} 
                                placeholder={UserNameText}
                                className='login-form-detail-content-item'
                                 />
                            </Form.Item>
                            <Form.Item
                                name='pwd'
                                rules={[
                                    {
                                    required: true,
                                    message: {PwdText}
                                    }
                                ]}
                            >
                                <Input 
                                prefix={<LockOutlined style={{ color: 'red' }}/>}
                                type='password'
                                placeholder={PwdText}
                                className='login-form-detail-content-item'
                                />
                            </Form.Item>
                            <Form.Item
                                name='remember'
                                valuePropName='checked'
                                noStyle
                            >
                                <Checkbox  className='login-form-detail-content-remember'>{RememberText}</Checkbox>
                            </Form.Item>
                            <div className='login-forgot'>{ForgetPwd}</div>
                            <Form.Item 
                            shouldUpdate
                            style={{marginTop:'40px'}}
                            >
                                {
                                    ()=>(
                                        <Button 
                                        type='primary' 
                                        htmlType='submit'
                                        className='login-form-detail-content-button'
                                        disabled={
                                            !form.isFieldsTouched(true) ||
                                            !!form.getFieldsError().filter(({errors})=>errors.length).length
                                        }
                                        >{SubmitText}</Button>
                                    )
                                }
                            </Form.Item>
                        </Form>
                    </div>
                </div>
                <div className='footer'>{FooterText}</div>
            </div>
        )
}

export default  Login;