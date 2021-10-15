import * as React from 'react'
import {Row, Col} from 'antd'
import {
    ProductTitle,
    ProductSubTitle,
    ProductHotTitle,
    ProductHotDesc,
    ProductBoxs,
} from '../../constant/home'
import Fade from 'react-reveal/Fade'
const Product = () => {
    const { DetailDesc, Boxs } = ProductBoxs
    return (
        <div className='tags-product'>
            <div className='tags-product-title'>
                <div>{ProductTitle}</div>
                <div>{ProductSubTitle}</div>
            </div>
            <Row className='tags-product-content'>
                <Col sm={24} md={24} lg={12} xl={6} xxl={6}>
                    <Fade bottom>
                    <div className='tags-product-content-descbox'>
                        <div className='tags-product-content-descbox-title'>{ProductHotTitle}</div>
                        <div className='tags-product-content-descbox-desc'>{ProductHotDesc}</div>
                    </div>
                    </Fade>
                </Col>
                <Col xs={24} sm={24} md={24} lg={12} xl={18} xxl={18}>
                    <Row className='tags-product-content-listbox'>
                        {
                            Boxs.map(box =>(
                                <Col xs={24} sm={24} md={12} lg={12} xl={8} xxl={8} key={box.title}>
                                    <Fade bottom>
                                        <div className='tags-product-content-listbox-inner'>
                                            <div className='tags-product-content-listbox-inner-title'>
                                                <img src={box.url} alt={box.alt}/>
                                                <div>{box.title}</div>
                                            </div>
                                            <div className='tags-product-content-listbox-inner-desc'>
                                                {box.desc}
                                            </div>
                                            <div className='tags-product-content-listbox-inner-visible'>{DetailDesc}</div>
                                        </div>    
                                    </Fade>
                                </Col>      
                            ))
                        }              
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Product