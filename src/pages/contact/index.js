import * as React from 'react'
import { Row, Col, Card, Form, Input, Button } from 'antd'
import './index.less'
import {
    ContactTitle,
    ContactSubTitle,
    ContactBox,
    MessageBox,
} from '../../constant/contact'
import ContactImg from '../../resources/contactAbout.png'
import TitleImg from '../../resources/ia_100000011.png'
export default class Contact extends React.Component{
    render(){
        const { ContactBoxTitle, Boxs } = ContactBox
        const {MsgBoxTitle, SubmitBtnText, FormItems} = MessageBox
        const onFinish = (values) => {
            console.log('messageBox:', values)
        }
        const onFinishFailed = (errInfo) => {
            console.log('messageErrors:', errInfo)
        }
        return (
            <div className='contact'>
                <Row type='flex' justify='space-between' align='middle' className='contact-center'>
                    <Col xs={0} sm={0} md={2} lg={3} xl={4} xxl={4}></Col>
                    <Col xs={24} sm={24} md={20} lg={18} xl={16} xxl={16}>
                        <Row className='contact-center-banner'>
                            <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12} className='contact-center-banner-title'>
                                <div>{ContactTitle}</div>
                                <div>{ContactSubTitle}</div>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                                <img src={ContactImg} alt='' style={{width: '100%'}}/>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={0} sm={0} md={2} lg={3} xl={4} xxl={4}></Col>
                </Row>
                <Row type='flex' justify='space-between' align='middle' className='contact-about'>
                        <Col xs={0} sm={0} md={2} lg={3} xl={4} xxl={4}></Col>
                        <Col xs={22} sm={22} md={20} lg={18} xl={16} xxl={16} className='contact-about-inner'>
                            <Card className='contact-about-inner-card'>
                                <Row>
                                    <Col xs={22} sm={22} md={22} lg={12} xl={12} xxl={12} className='contact-about-inner-card-col'>
                                        <div className='col-title'>
                                            <img src={TitleImg} alt='' />
                                            <span>{ContactBoxTitle}</span>
                                        </div>
                                        {
                                            Boxs.map(box=>(
                                                <div key={box.title} className='col-infobox'>
                                                    <div className='col-infobox-img'><img src={box.url} alt='' /></div>
                                                    <div className='col-infobox-content'>
                                                        <div>{box.title}</div>
                                                        <div>{box.content}</div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </Col>
                                    <Col xs={22} sm={22} md={22} lg={12} xl={12} xxl={12} className='contact-about-inner-card-col'>
                                        <div className='col-title'>
                                            <img src={TitleImg} alt='' />
                                            <span>{MsgBoxTitle}</span>
                                        </div>
                                        <Form
                                        layout='vertical'
                                        onFinish={onFinish}
                                        onFinishFailed={onFinishFailed}
                                        >
                                            {
                                               FormItems.map(item=>(
                                                   <Form.Item
                                                   label={item.label}
                                                   name={item.name}
                                                   rules={item.rules}
                                                   >
                                                       {
                                                           item?.comp && item.comp === 'textarea' ? <Input.TextArea rows={3}/> : <Input />
                                                       }
                                                   </Form.Item>
                                               )) 
                                            }
                                            <Button type='primary' htmlType='submit'>{SubmitBtnText}</Button>
                                        </Form>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col xs={0} sm={0} md={2} lg={3} xl={4} xxl={4}></Col>
                </Row>
            </div>
        )
    }
}