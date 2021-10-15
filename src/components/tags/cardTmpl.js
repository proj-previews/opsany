import * as React from 'react'
import { Col } from 'antd'
import Fade from 'react-reveal/Fade'

const CardTmpl = ({imgSrc, imgAlt, title, subTitle}) => {
    return (
        <Col className='tags-card-body-col' xs={22} sm={12} md={12} lg={12} xl={6} xxl={6}>
        <Fade bottom>
        <div className='tags-card-body-col-img'>
            <img src={imgSrc} alt={imgAlt} style={{ width:'100%',maxWidth:'460px' }}/>
        </div>
        <div className='tags-card-body-col-text'>
            <div>{title}</div>
            <div>{subTitle}</div>
        </div>
        </Fade>
    </Col>      
    )
}

export default CardTmpl;