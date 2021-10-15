import * as React from 'react'
import { Row, Col, Card } from 'antd'
import {
    ResourceTitle,
    ResourceDescA,
    ResourceDescB,
    ResourceDescC,
    StatusDesc,
    MetricDesc,
    ResourceDesc,
    EventDesc,
    RDesc,
    ModuleDesc,
    AppTitle,
    AppDescA,
    AppDescB,
    AppDescC,
    LogDesc,
    PipelineDesc,
    LinkDesc,
    GraphDesc,
    DeployDesc,
} from '../../constant/home'
import ResourceImg  from '../../resources/ia_100000011.png'
import ResourceCenterImg from '../../resources/ia_100000009.png'
import AppCenterImg from '../../resources/ia_100000010.png'
import Fade from 'react-reveal/Fade'
const TagContent = () => {
    return (
        <div className='tags-content'>
            <Row className='tags-content-body'>
                <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                    <Fade bottom>
                    <div className='tags-content-body-item'>
                        <div className='tags-content-body-item-title'>
                            {ResourceTitle}
                        </div>
                        <div className='tags-content-body-item-img'>
                            <img src={ResourceImg} alt='resource' />
                        </div>
                            <Card className='tags-content-body-item-card'>
                                <ul>
                                    <li>{ResourceDescA}</li>
                                    <li>{ResourceDescB}</li>
                                    <li>{ResourceDescC}</li>
                                </ul>
                                <div className='tags-content-body-item-card-btnbox'>
                                    <div>{StatusDesc}</div>
                                    <div>{MetricDesc}</div>
                                    <div>{ResourceDesc}</div>
                                    <div>{EventDesc}</div>
                                    <div>{RDesc}</div>
                                    <div>{ModuleDesc}</div>
                                </div>
                            </Card>
                    </div>
                    </Fade>
                </Col>
                <Col className='tags-content-body-imgbox' xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                    <Fade bottom>
                    <img src={ResourceCenterImg} alt='center of resource' style={{ width:'100%', maxWidth:'460px' }}/>
                    </Fade>
                </Col>
                <Col className='tags-content-body-imgbox' xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                    <Fade bottom>
                    <img src={AppCenterImg} alt='center of app' style={{ width:'100%', maxWidth:'460px' }}/>
                    </Fade>
                </Col>
                <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                    <Fade bottom>
                    <div className='tags-content-body-item'>
                        <div className='tags-content-body-item-title'>
                            {AppTitle}
                        </div>
                        <div className='tags-content-body-item-img'>
                            <img src={ResourceImg} alt='resource' />
                        </div>
                            <Card className='tags-content-body-item-card'>
                                <ul>
                                    <li>{AppDescA}</li>
                                    <li>{AppDescB}</li>
                                    <li>{AppDescC}</li>
                                </ul>
                                <div className='tags-content-body-item-card-btnbox'>
                                    <div>{LogDesc}</div>
                                    <div>{PipelineDesc}</div>
                                    <div>{ResourceDesc}</div>
                                    <div>{LinkDesc}</div>
                                    <div>{GraphDesc}</div>
                                    <div>{DeployDesc}</div>
                                </div>
                            </Card>
                    </div>
                    </Fade>
                </Col>
            </Row>
        </div>
    )
}

export default TagContent;