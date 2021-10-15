import * as React from 'react'
import { Row, Card } from 'antd'
import { Tags } from '../../constant/home'
import CardTmpl from './cardTmpl'
const TagCard = () => {
    return (
        <Card className='tags-card'>
            <Row className='tags-card-body'>
                {
                    Tags.map(tag =><CardTmpl
                        key={tag.url}
                        imgSrc={tag.url}
                        imgAlt={tag.alt}
                        title={tag.title}
                        subTitle={tag.subTitle}
                         />)
                }
            </Row>
        </Card>
    )
}

export default TagCard;