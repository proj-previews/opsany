import * as React from 'react'
import { Row, Col } from 'antd';
import TagCard from './cards';
import './index.less';
import TagContent from './content';
import Product from './product';
import ProductAdv from './productAdv';
const Tags = () => {
    return (
        <Row className='tags'>
            <Col xs={0} sm={0} md={2} lg={3} xl={4} xxl={4}></Col>
            <Col xs={24} sm={24} md={20} lg={18} xl={16} xxl={16}>
            <TagCard/>
            <TagContent/>
            <Product/>
            <ProductAdv/>
            </Col>
            <Col xs={0} sm={0} md={2} lg={3} xl={4} xxl={4}></Col>
        </Row>
    )
}

export default Tags;