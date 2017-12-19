import React from 'react';

import {Menu, Col, Tabs, Row, Form, Input, Button, Card, Modal} from 'antd';

const {TextArea} = Input;
const FormItem = Form.Item;
const MenuItem = Menu.Item;
const TabPane = Tabs.TabPane;
import {Router, Route, Link, browserHistory, HashRouter} from 'react-router-dom'

class CommonComments extends React.Component {
    constructor() {
        super();
        this.state = {
            comments: ''
        }
    }

    componentDidMount() {
        var myFetchOptions = {
            method: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=" +
            this.props.uniquekey, myFetchOptions)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                this.setState({comments: json});
            });
    };

    handleSubmit(e) {
        e.preventDefault();
        var myFetchOptions = {
            method: 'GET'
        };
        var formdata = this.props.form.getFieldsValue();
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&" +
            "userid=" + localStorage.userid +
            "&uniquekey=" + this.props.uniquekey +
            "&comment=" + formdata.remark, myFetchOptions)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                console.log(1);
                this.componentDidMount();
            })
    }

    render() {
        let {getFieldProps} = this.props.form;
        const {comments} = this.state;
        const commentsList = comments.length ?
            comments.map((comment, index) => (
                <Card key={index} title={comment.UserName} extra={< a href="#"> 发布于 {comment.datetime} </a>}>
                    <p>{comment.Comments}</p>
                </Card>
            ))
            :
            "没有加载到任何评论"
        ;
        return (
            <div className="comment">
                <Row>
                    <Col span={24}>
                        {commentsList}
                        <Form onSubmit={this.handleSubmit.bind(this)}>
                            <FormItem label={"您的评论"}>
                                <TextArea type="textarea" placeholder={"请输入评论内容"}
                                          {...getFieldProps('remark', {initialValue: ''})}/>
                                <Button type={"primary"} htmlType={"submit"}>提交评论</Button>
                            </FormItem>
                        </Form>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default CommonComments = Form.create({})(CommonComments);