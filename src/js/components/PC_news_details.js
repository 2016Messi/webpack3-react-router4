import React from 'react';
import {Row, Col, BackTop} from 'antd';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';

export default class PCNewsDetails extends React.Component {
    constructor(){
        super();
        this.state = {
            newsItem : ''
        }
    }
    componentDidMount(){
        var myFetchOption = {
            method : "GET"
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.match.params.uniquekey,myFetchOption)
            .then(response => response.json())
            .then(json => {
                this.setState({newsItem: json});
                document.title = this.state.newsItem.title + " - React News | React 驱动的新闻平台";
            });
    };
    createMarkup() {
        return {__html: this.state.newsItem.pagecontent};
    };
    render(){
        return(
            <div>
                <PCHeader></PCHeader>
                <Row>
                    <Col span={2}></Col>
                    <Col span={14}>
                        <div className="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
                    </Col>
                    <Col span={6}></Col>
                    <Col span={2}></Col>
                </Row>
                <PCFooter></PCFooter>
            </div>
        )
    }
}