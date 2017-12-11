import React from 'react';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import { Tabs, Radio} from 'antd';
const TabPane = Tabs.TabPane;
export default class MobileIndex extends React.Component{
    render(){
        return (
            <div>
                <MobileHeader></MobileHeader>
                <Tabs>
                    <TabPane tab="头条" key={"1"} >
                        头条
                    </TabPane>
                    <TabPane tab="社会" key={"2"} >
                        社会
                    </TabPane>
                    <TabPane tab="国内" key={"3"} >
                        国内
                    </TabPane>
                    <TabPane tab="国际" key={"4"} >
                        国际
                    </TabPane>
                    <TabPane tab="体育" key={"5"} >
                        体育
                    </TabPane>
                    <TabPane tab="军事" key={"6"} >
                        军事
                    </TabPane>
                    <TabPane tab="科技" key={"7"} >
                        科技
                    </TabPane>
                </Tabs>
                <MobileFooter></MobileFooter>
            </div>
        )
    }
}