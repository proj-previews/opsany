import * as React from 'react'
import { Row, Col } from 'antd'
import './index.less'
import { PartnersTitle  } from '../../constant/home'
import PartnersImg from '../../resources/home_33.756dddfa.png'
import Fade from 'react-reveal/Fade'
const Partners = () => {
    return (
        <Row type='flex' justify='space-between' align='middle' style={{background:'#fff'}}>
            <Col xs={0} sm={0} md={2} lg={3} xl={4} xxl={4}></Col>
            <Col xs={22} sm={22} md={20} lg={18} xl={16} xxl={16}>
                <div className='partners'>
                    <div className='partners-title'>
                        <div>{PartnersTitle}</div>
                    </div>
                    <Row type='flex' className='partners-imgbox'>
                        <Col className='partners-imgbox-inner'>
                            <Fade bottom>
                            <img src={PartnersImg} alt='partners' />
                            </Fade>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col xs={0} sm={0} md={2} lg={3} xl={4} xxl={4}></Col>
        </Row>
    )
}

export default Partners;