import * as React from 'react'
import { Row, Col } from 'antd';
import { BannerTitle, BannerDesc } from '../../constant/home';
import BannerLogo  from '../../resources/home_03.0d0b1e37.png';
import './index.less';

const Banner = () => {
    return (
        <Row className='banner'>
            <Col xs={0} sm={0} md={2} lg={3} xl={4} xxl={4}></Col>
            <Col xs={24} sm={24} md={20} lg={18} xl={16} xxl={16}>
                <Row className='banner-content'>
                    <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                        <div className='banner-content-title'>
                            <div>{BannerTitle}</div>
                            <div>{BannerDesc}</div>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                        <img  className='banner-content-img' src={BannerLogo} alt='banner content img'/>
                    </Col>
                </Row>
            </Col>
            <Col xs={0} sm={0} md={2} lg={3} xl={4} xxl={4}></Col>
        </Row>

    )
}

export default Banner;