import * as React from 'react'
import {Row, Col, Form, Input, Button, message } from 'antd'
import './index.less'
import {
    ContactTitle,
    ContactNumber,
    ContactMail,
    ContactButton,
    ContactMsg,
    ContactNumberMsg,
    ContactEmailMsg,
} from '../../constant/home'

const Contact = () => {
    const onSuccess = (values) => {
        console.log('form.values:',values)
        message.success(`${ContactMsg}`)
    }
    return (
        <div className='contact'>
            <Row type='flex' align='middle' justify='space-between' className='contact-body'>
                <Col xs={0} sm={0} md={2} lg={3} xl={4} xxl={4} />
                <Col xs={22} sm={22} md={20} lg={18} xl={16} xxl={16} style={{margin: '0px auto'}}>
                    <div className='contact-body-title'>{ContactTitle}</div>
                    <Row className='contact-body-form'>
                        <Form 
                        layout='horizontal' 
                        className='contact-body-form-inner'
                        onFinish={onSuccess}
                        >
                            <Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8} className='contact-form-item'>
                               
                                    <Form.Item 
                                    name='number'
                                    rules={[
                                        {
                                            required:true,
                                            message:`${ContactNumber}`,
                                        },
                                        {
                                            pattern: /^1[3|4|5|7|8][0-9]\d{8}$/,
                                            message: `${ContactNumberMsg}`,
                                        }
                                    ]}
                                    >
                                        <span><Input placeholder={ContactNumber} /></span>
                                    </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8} className='contact-form-item'>
                                <Form.Item
                                name='email'
                                rules={[
                                    {
                                        required:true,
                                        message:`${ContactMail}`,
                                    },
                                    {
                                        pattern: /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/,
                                        message: `${ContactEmailMsg}`,
                                    }  
                                ]}
                                >
                                    <Input placeholder={ContactMail} />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8} className='contact-form-item contact-form-button'>
                                <Form.Item>
                                    <Button type='primary' htmlType='submit'>{ContactButton}</Button>
                                </Form.Item>
                            </Col>
                        </Form>
                    </Row>
                </Col>
                <Col xs={0} sm={0} md={2} lg={3} xl={4} xxl={4} />
            </Row>
        </div>
    )
}

export default Contact;