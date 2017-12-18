import React from 'react';

import {Menu, Icon, Tabs, message, Form, Input, Button, Checkbox, Modal} from 'antd';

const FormItem = Form.Item;
const MenuItem = Menu.Item;
const TabPane = Tabs.TabPane;
import {Router, Route, Link, browserHistory, HashRouter} from 'react-router-dom'

class MobileHeader extends React.Component {
    constructor() {
        super();
        this.state = {
            current: "top",
            modalVisible: false,
            action: 'login',
            hasLogined: false,
            userNickName: "",
            userId: 0
        }
    }

    setModalVisible(value) {
        this.setState({modalVisible: value});
    };

    componentWillMount() {
        if (localStorage.userid != '') {

            this.setState({hasLogined: true});
            this.setState({userNickName: localStorage.userNickName, userid: localStorage.userid});
        }
    };

    handleSubmit(e) {

        //页面开始想 API 进行数据交换
        e.preventDefault();
        var myFetchOptions = {
            method: 'GET'
        };
        var formData = this.props.form.getFieldsValue();
        // console.log(formData);

        fetch("http://newsapi.gugujiankong.com/Handler.ashx?" +
            "action=" + this.state.action +
            "&username=" + formData.userName +
            "&password=" + formData.password +
            "&r_userName=" + formData.r_userName +
            "&r_password=" + formData.r_password +
            "&r_confirmPassword=" + formData.r_confirmPassword,
            myFetchOptions)
            .then(response => response.json())
            .then(json => {
                this.setState({userNickName: json.NickUserName, userid: json.UserId});
                localStorage.userid = json.UserId;
                localStorage.userNickName = json.NickUserName;
            });
        if (this.state.action == "login") {
            this.setState({hasLogined: true});
        }
        message.success("请求成功！");
        this.setModalVisible(false);
    }

    login() {
        this.setModalVisible(true);
    };

    logout() {
        localStorage.userid = '';
        localStorage.userNickName = '';
        this.setState({hasLogined: false});
    };

    callback(key) {
        if (key == 1) {
            this.setState({
                action: 'login'
            })
        } else if (key == 2) {
            this.setState({
                action: 'register'
            })
        }
    }

    render() {
        let {getFieldProps} = this.props.form;
        const userShow = this.state.hasLogined ?
            <span>
                    <Icon type="logout" onClick={this.logout.bind(this)}/>
                    <Icon type="inbox"/>
                </span>

            :
            <Icon type="setting" onClick={this.login.bind(this)}/>
        return (
            <div id="mobileheader">
                <header>
                    <img src="/src/image/logo.png" alt="logo"/>
                    <span>Hot News</span>
                    {userShow}
                </header>
                <Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisible}
                       onOk={() => this.setModalVisible(false)} onText="关闭"
                       onCancel={() => this.setModalVisible(false)}>
                    <Tabs type="card" onChange={this.callback.bind(this)}>
                        <TabPane tab={"登陆"} key={"1"}>
                            <Form layout={"horizontal"} onSubmit={this.handleSubmit.bind(this)}>
                                <FormItem label="账户">
                                    <Input type="text" placeholder="请输入您的账号" {...getFieldProps("userName")} />
                                </FormItem>
                                <FormItem label={"密码"}>
                                    <Input type="password" placeholder="请输入您的密码" {...getFieldProps("password")} />
                                </FormItem>
                                <Button type="primary" htmlType="submit">登陆</Button>
                            </Form>
                        </TabPane>
                        <TabPane tab={"注册"} key={"2"}>
                            <Form layout={"horizontal"} onSubmit={this.handleSubmit.bind(this)}>
                                <FormItem label="账户">
                                    <Input type="text" placeholder="请输入您的账号" {...getFieldProps("r_userName")} />
                                </FormItem>
                                <FormItem label={"密码"}>
                                    <Input type="password" placeholder="请输入您的密码" {...getFieldProps("r_password")} />
                                </FormItem>
                                <FormItem label={"确认密码"}>
                                    <Input type="password"
                                           placeholder="请再次输入您的密码" {...getFieldProps("r_confirmPassword")} />
                                </FormItem>
                                <Button type="primary" htmlType="submit">注册</Button>
                            </Form>
                        </TabPane>
                    </Tabs>
                </Modal>
            </div>
        )
    }
}

export default MobileHeader = Form.create({})(MobileHeader);