import React from 'react'
import {Layout, Row, Col, Button, Divider } from 'antd'
import { NavLink } from 'react-router-dom'
import GithubCorners from './components/github-corners'
import './styles/common.less'
import './styles/container.less'

const {Header, Footer, Content} = Layout

export default class Container extends React.Component {
    render(){
        return (
            <Layout style={{minHeight:'100vh', backgroundColor: '#fff'}}>
                <Header className='header'>
                <GithubCorners 
                bgColor='#28a745'
                zIndex={99}
                target='__blank'
                href='https://github.com/researchlab/febp/tree/master/react-practice/21-opsany'
                />
                    <Row type='flex' justify='space-between'>
                        <Col xs={0} sm={0} md={2} lg={3} xl={4} xxl={4}></Col>
                        <Col xs={24} sm={24} md={20} lg={18} xl={16} xxl={16}>
                            <NavLink to='/'>
                            <div className='header-left'>
                                <span><strong style={{color:'red'}}><code>Fake</code></strong> OpsAny</span>
                                <Divider type='vertical' className='divider' />
                                <span className='header-left-description'>Make Ops Perfect</span>
                            </div>
                            </NavLink>
                            <div className='header-right'>
                                <NavLink to='/'><Button type='link'>首页</Button></NavLink>
                                <NavLink to='/download'><Button type='link'>下载</Button></NavLink>
                                <NavLink to='/login'><Button type='link'>演示</Button></NavLink>
                                <NavLink to='contactus'><Button type='link'>联系我们</Button></NavLink>
                            </div>
                        </Col>
                        <Col xs={0} sm={0} md={2} lg={3} xl={4} xxl={4}></Col>
                    </Row>
                </Header>
                <Content>
                    {this.props.children}
                </Content>
                <Footer className='footer'>
                    <Row>
                    <Col xs={0} sm={0} md={2} lg={3} xl={4} xxl={4}></Col>
                    <Col xs={24} sm={24} md={20} lg={18} xl={16} xxl={16}>
                        <div className='footer-content'>
                            <div className='footer-content-left'> 
                                <div className='footer-content-left-link'>
                                    <span className='footer-content-left-link-title'>友情链接</span>
                                    <NavLink to='#' className='footer-content-left-link-target'>OpsAny</NavLink>
                                    <NavLink to='#' className='footer-content-left-link-target'>DevOps学院</NavLink>
                                    <NavLink to='#' className='footer-content-left-link-target'>运维社区</NavLink>
                                </div>
                                <div className='footer-content-left-desc'>
                                    <span>OpsAny：Make Ops Perfect</span>
                                    <span>Copyright © 2021-2021 OpsAny. All Rights Reserved 豫ICP备 20216812号-1</span>
                                </div>
                            </div>
                            <div className='footer-content-right'>
                                <div className='footer-content-right-contact'>
                                    <span>联系方式</span>
                                    <span>邮箱: leehongitrd@163.com</span>
                                    <span>免责声明: 本站点仅用于技术学习和研究用途，站点中借用的素材及借鉴的设计样式, 如有侵权请联系本站删除</span>
                                </div>
                                <div className='footer-content-right-img'>
                                    <div className='footer-content-right-img-instance'>
                                        <img src='./imgs/wx.06835dbb.jpg' alt=''/>
                                        <span>扫码关注微信公众号</span>
                                    </div>
                                    <div className='footer-content-right-img-instance'>
                                        <img src='./imgs/newops.2453c131.jpg' alt=''/>
                                        <span>扫码关注新运维社区</span>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={0} sm={0} md={2} lg={3} xl={4} xxl={4}></Col>
                    </Row>
                </Footer>
            </Layout>
        )
    }
}
