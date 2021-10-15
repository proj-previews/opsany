import * as React from 'react'
import { Row, Col } from 'antd'
import {
    ProductAdvTitle,
    ProductAdvSubTitle,
} from '../../constant/home'
import productAdvImg from '../../resources/ia_100000021.png'
import Fade from 'react-reveal/Fade'
const ProductAdv = () => {
    return (
        <div className='tags-productAdv'>
            <div className='tags-productAdv-title'>
                <div>{ProductAdvTitle}</div>
                <div>{ProductAdvSubTitle}</div>
            </div>
            <Row style={{ margin: '20px -12px -12px', height: '100%' }}>
                <Col style={{ padding: '12px', opacity: 1 }}>
                    <Fade bottom>
                    <img src={productAdvImg}  style={{ width:'100%', height: '100%' }} alt=''/>
                    </Fade>
                </Col>
            </Row>
        </div>
    )
}

export default ProductAdv;