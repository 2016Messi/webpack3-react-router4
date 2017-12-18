import React from 'react';
import {Row, Col, BackTop} from 'antd';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';


export default class MobileNewsDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            newsItem: '',
            newsType:""
        }
    }

    componentDidMount() {
        var myFetchOption = {
            method: "GET"
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.match.params.uniquekey, myFetchOption)
            .then(response => response.json())
            .then(json => {
                this.setState({newsItem: json});
                document.title = this.state.newsItem.title+ + " - React News | React 驱动的新闻平台";
            });
    };


    createMarkup() {
        return {__html: this.state.newsItem.pagecontent};
    };

    render() {
        return (
            <div id="mobileDetailsContainer">
                <MobileHeader></MobileHeader>
                <div className="ucmobileList">
                    <Row>
                        <Col span={24} className="container">
                            <div className="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
                        </Col>
                    </Row>
                </div>

                <MobileFooter></MobileFooter>

            </div>
        )
    }
}