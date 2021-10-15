import * as React from 'react'
import { Row, Col, Card, Form, Input, Button, Select } from 'antd'
import './index.less'

import {
    DownloadTitle,
    DownloadSubTitle,
    TrialForm,
    InstallTexts,
} from '../../constant/download'
import DownloadRightImg from '../../resources/downloadright.png'
export default class Download extends React.Component{
    
    render(){
        const { titleText, submitText, items } = TrialForm
        const { installTitle, steps } = InstallTexts
        const onFinish = (values) => {
            console.log('success:',values)
        }
        const onFinishFailed = (errorInfo)=>{
            console.log('Failed:',errorInfo)
        }
        const formItemLayout = {
            labelCol: {
              xs: { span: 2 },
              sm: { span: 4 },
            },
            wrapperCol: {
              xs: { span: 22 },
              sm: { span: 19 },
            },
          };
        return (
            <div className='content'>
                <Row type='flex' justify='space-between' className='content-center'>
                    <Col xs={0} sm={0} md={0} lg={2} xl={2.5} xxl={4}></Col>
                    <Col xs={24} sm={24} md={24} lg={20} xl={19} xxl={16}>
                        <Row type='flex' align='middle' className='content-center-banner'>
                            <Col className='content-center-banner-title' xs={24} sm={24} md={24} lg={14} xl={14} xxl={14}>
                                <div>{DownloadTitle}</div>
                                <div>{DownloadSubTitle}</div>
                            </Col>
                            <Col xs={14} sm={14} md={14} lg={10} xl={10} xxl={10} style={{textAlign: 'center'}}>
                                <img src={DownloadRightImg} alt='' style={{width: '60%'}}/>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={0} sm={0} md={0} lg={2} xl={2.5} xxl={4}></Col>
                </Row>
                <Row type='flex' justify='space-between'>
                    <Col xs={0} sm={0} md={0} lg={2} xl={2.5} xxl={4}></Col>
                    <Col xs={24} sm={24} md={24} lg={20} xl={19} xxl={16} className='content-about'>
                        <Card style={{width:'100%', background:'none', border: 'none'}}>
                            <Row type='flex'>
                                <Col className='content-about-col' xs={24} sm={24} md={24} lg={24} xl={12} xxl={12}>
                                    <div className='form-box'>
                                        <h3 className='form-title'>{titleText}</h3>
                                        <Form
                                        onFinish={onFinish}
                                        onFinishFailed={onFinishFailed}
                                        {...formItemLayout}
                                        >
                                        {
                                            items.map((item, idx)=>(
                                                <Form.Item
                                                key={idx}
                                                label={item.label}
                                                name={item.name}
                                                rules={item.rules}
                                                >
                                                 {
                                                     
                                                     item?.comp && item?.comp === 'select' ? (
                                                         <Select
                                                         placeholder={item.placeHolder}
                                                         >
                                                             {
                                                                 item.options.map(option=>(
                                                                     <Select.Option key={option} value={option}>{option}</Select.Option>
                                                                 ))
                                                             }
                                                         </Select>
                                                     ): (
                                                         item?.name === 'iphone' ? (
                                                            <Input  
                                                            addonAfter={<Button className='iphone-button'>{item.addonButtonText}</Button>}
                                                            placeholder={item.placeHolder}/>
                                                         ) : (
                                                            <Input placeholder={item.placeHolder}/>
                                                         )
                                                     )
                                                 }
                                                </Form.Item>
                                            ))
                                        }
                                        <Button type='primary' className='submit-button' htmlType='submit'>{submitText}</Button>
                                        </Form>
                                        
                                    </div>
                                </Col>
                                <Col className='content-about-col' xs={24} sm={24} md={24} lg={24} xl={12} xxl={12}>
                                    <div className='install'>
                                        <h3 className='install-title'>{installTitle}</h3>
                                        {
                                            steps.map((step, idx)=>(
                                                <div className={step?.lastStep ? 'install-step install-last-step': 'install-step' } key={step.title}>
                                                    <div className='install-step-left'>{idx+1}</div>
                                                    <div className='install-step-right'>
                                                        <h3 className='step-title'>{step.title}</h3>
                                                        <p className='step-content'>{step.content}</p>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col xs={0} sm={0} md={0} lg={2} xl={2.5} xxl={4}></Col>
                </Row>
            </div>
        )
    }
}