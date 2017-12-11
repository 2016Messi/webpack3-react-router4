import React from 'react';
import {Row, Col} from 'antd';
import {Tabs, Carousel} from 'antd';
const TabPane = Tabs.TabPane;

export default class PCNewContainer extends React.Component{
    render(){
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            autoplay: true
        };
        return(
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} className="container">
                        <div className="leftContainer">
                            <div className="carousel">
                                <Carousel autoplay {...settings}>
                                    <div><img src="./src/image/carousel_1.jpg"/></div>
                                    <div><img src="./src/image/carousel_2.jpg"/></div>
                                    <div><img src="./src/image/carousel_3.jpg"/></div>
                                    <div><img src="./src/image/carousel_4.jpg"/></div>
                                </Carousel>
                            </div>
                        </div>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        )
    }
}