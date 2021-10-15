import * as React from 'react'
import { Row, Col, Card } from 'antd'
import quoteLeft from '../../resources/ia_100000022.png'
import quoteRight from '../../resources/ia_100000023.png'
import imgbox from '../../resources/ia_100000011.png'
import Fade from 'react-reveal/Fade'
const TabPaneTmpl = ({viewpoint, organ, title, desc, tags =[]}) => {
    return (
        <Row type='flex' justify='space-between' align='middle' className='features-body-tab-pane'>
            <Col xs={0} sm={0} md={2} lg={3} xl={4} xxl={4}></Col>
            <Col xs={22} sm={22} md={20} lg={18} xl={16} xxl={16} style={{margin: '0px auto'}}>
                <Row type='flex' justify='space-between' align='middle' style={{margin: '-12px -24px'}}>
                    <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12} className='features-body-tab-pane-left'>
                        <Fade bottom>
                            <div className='features-body-tab-pane-left-top'><img src={quoteLeft} alt=''/></div>
                            <div className='features-body-tab-pane-left-desc'>{viewpoint}</div>
                            <div className='features-body-tab-pane-left-bottom'>
                                <div>{organ}</div>
                                <img src={quoteRight} alt=''/>
                            </div>
                        </Fade>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12} className='features-body-tab-pane-right'>
                        <Fade bottom>
                            <Card className='tab-pane-right-card'>
                                <div className='tab-pane-right-card-name'>{title}</div>
                                <div className='tab-pane-right-card-imgbox'><img src={imgbox} alt='' /></div>
                                <div className='tab-pane-right-card-desc'>{desc}</div>
                                <div className='tab-pane-right-card-tagbox'>
                                    {
                                        tags.map(tag=><div key={tag}>{tag}</div>)
                                    }
                                </div>
                            </Card>
                        </Fade>
                    </Col>
                </Row>
            </Col>
            <Col xs={0} sm={0} md={2} lg={3} xl={4} xxl={4}></Col>
        </Row>
    )
}

export default TabPaneTmpl;