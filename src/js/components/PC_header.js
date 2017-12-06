import React from 'react';
import { Row, Col } from 'antd';
import { Menu, Icon, Tabs, message, Form, Input, Button, Checkbox, Modal} from 'antd';

const FormItem = Form.Item;
export default class PCHeader extends React.Component {
    constructor(){
        super();
        this.state = {
            current:"top",
            modalVisible: false,
            action: 'login',
            hasLogined: false,
            userNickName: "",
            userId: 0
        }
    }
    handleClick (e){
        this.setState({
            current:e.key
        })
    };
    render(){
        // let {getFieldProps} = this.props.from;
        const userShow = this.state.hasLogined ?
                <Menu.Item key="logout" class="register">
                    <Button type="primary" htmlType="button">{this.state.userNickName}</Button>
                    &nbsp;&nbsp;
                    <Link target="_blank">
                        <Button type="dashed" htmlType="button">个人中心</Button>
                    </Link>
                    &nbsp;&nbsp;
                    <Button type="ghost" htmlType="button">退出</Button>
                </Menu.Item>
            :
                <Menu.Item key="register" className="register">
                    <Icon type="appstore"/>注册/登陆
                </Menu.Item>;
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
                            {userShow}
                            <Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisible} onOk={()=>this.setModalVisible(false)} onText="关闭" onCancel={()=>this.setModalVisible(false)}>
                                <Tabs>

                                </Tabs>
                            </Modal>
                        </Menu>
                    </Col>

                    <Col span={2}></Col>
                </Row>
            </header>
        )
    }
}

// export default PCHeader = Form.create({})(PCHeader);