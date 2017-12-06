import React from 'react';
import { Row, Col } from 'antd';
import { Menu, Icon } from 'antd';
export default class PCHeader extends React.Component {
    constructor(){
        super();
        this.state = {
            current:"top"
        }
    }
    handleClick (e){
        this.setState({
            current:e.key
        })
    };
    render(){
        return (
            <header>
                <Row>
                    <Col span={2}></Col>
                    <Col span={4}>
                        <a href="#" className="logo">
                            <img src="./src/image/logo.png" alt="logo"/>
                            <span>Hot News</span>
                        </a>
                    </Col>
                    <Col span={16}>
                        <Menu mode="horizontal" selectedKeys={[this.state.current]} onClick={this.handleClick.bind(this)}>
                            <Menu.Item  key="top" >
                                <Icon type="appstore"/>头条
                            </Menu.Item>
                            <Menu.Item key="shehui">
                                <Icon type="appstore" />社会
                            </Menu.Item>
                            <Menu.Item key="guonei">
                                <Icon type="appstore" />国内
                            </Menu.Item>
                            <Menu.Item key="guoji">
                                <Icon type="appstore" />国际
                            </Menu.Item>
                            <Menu.Item key="tiyu">
                                <Icon type="appstore" />体育
                            </Menu.Item>
                            <Menu.Item key="junshi">
                                <Icon type="appstore" />军事
                            </Menu.Item>
                            <Menu.Item key="keji">
                                <Icon type="appstore" />科技
                            </Menu.Item>
                            <Menu.Item key="yule">
                                <Icon type="appstore" />娱乐
                            </Menu.Item>
                            <Menu.Item key="caijing">
                                <Icon type="appstore" />财经
                            </Menu.Item>
                        </Menu>
                    </Col>

                    <Col span={2}></Col>
                </Row>
            </header>
        )
    }
}