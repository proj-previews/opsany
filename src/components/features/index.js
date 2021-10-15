import * as React from 'react'
import {Row, Tabs } from 'antd'
import './index.less'

import {
    FeaturesTitle,
    FeaturesSubTitle,
    CmdbP ,
    ControlP,
    JobP,
    MonitorP, 
    AdviewName,
    AdviewSay, 
    CmdbCardTitle,
    CmdbCardDesc,
    CmdbCardTags,
    JiuWuName,
    JiuWuSay,
    ControlCardTitle,
    ControlCardDesc,
    ControlCardTags,
    BondName,
    BondSay,
    JobCardTitle,
    JobCardDesc,
    JobCardTags,
    RetailName,
    RetailSay,
    MonitorCardTitle,
    MonitorCardDesc,
    MonitorCardTags,
} from '../../constant/home'
import TabPaneTmpl from './tabPaneTmpl';

const { TabPane } = Tabs;

const Features = () => {
    return (
        <div className='features'>
            <div className='features-title'>
                <div>{FeaturesTitle}</div>
                <div>{FeaturesSubTitle}</div>
            </div>
            <Row className='features-body'>
                <Tabs defaultActiveKey='1' centered style={{width:'100%', height: '100%'}}>
                    <TabPane tab={CmdbP} key='1' >
                        <TabPaneTmpl 
                        viewpoint={AdviewSay} 
                        organ={AdviewName}
                        title={CmdbCardTitle}
                        desc={CmdbCardDesc}
                        tags={CmdbCardTags}
                        />
                    </TabPane>
                    <TabPane tab={ControlP} key='2'>
                    <TabPaneTmpl 
                        viewpoint={JiuWuSay} 
                        organ={JiuWuName}
                        title={ControlCardTitle}
                        desc={ControlCardDesc}
                        tags={ControlCardTags}
                        />
                    </TabPane>
                    <TabPane tab={JobP} key='3'>
                    <TabPaneTmpl 
                        viewpoint={BondSay} 
                        organ={BondName}
                        title={JobCardTitle}
                        desc={JobCardDesc}
                        tags={JobCardTags}
                        />
                    </TabPane>
                    <TabPane tab={MonitorP} key='4'>
                    <TabPaneTmpl 
                        viewpoint={RetailSay} 
                        organ={RetailName}
                        title={MonitorCardTitle}
                        desc={MonitorCardDesc}
                        tags={MonitorCardTags}
                        />
                    </TabPane>
                </Tabs>
            </Row>
        </div>
    )
}

export default Features;