import React from 'react';

import {Row,Col,Tabs } from 'antd';
const TabPane = Tabs.TabPane;
import PCHeader from './PC_header';
import PCFooter from './PC_footer';
export default class PCUserCenter extends React.Component{
    render(){
        return(
            <div>
                <PCHeader></PCHeader>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20}>
                        <Tabs>
                            <TabPane tab={"我的收藏列表"} key={"1"}></TabPane>
                            <TabPane tab={"我的评论列表"} key={"2"}></TabPane>
                            <TabPane tab={"头像设置"} key={"3"}></TabPane>
                        </Tabs>
                    </Col>
                    <Col span={2}></Col>
                </Row>
                <PCFooter></PCFooter>
            </div>
        )
    }
}