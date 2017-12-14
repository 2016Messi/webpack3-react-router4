import React from 'react';
import {Card} from 'antd';
import {Router, Route, Link, BrowserRouter} from 'react-router-dom';
export default class PCNewsImgBlock extends React.Component{
    constructor(){
        super();
        this.state = {
            news : ""
        }
    }
    componentWillMount(){
        var myFetchOptions = {
            method : 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" +
            this.props.type + "&count=" +
            this.props.count, myFetchOptions).
        then(response => response.json()).
        then(json =>{
                this.setState({news: json})
            }
        );
    }
    changeOnMouseEnter(e) {
        var x="hover"+e;
        this.refs[x].style.color="red";
    }
    changeOnMouseOut(e){
        var x="hover"+e;
        this.refs[x].style.color="black";
    }
    render(){
        const styleImage = {
            display: "block",
            width: this.props.imageWidth,
            height: "90px"
        };
        const styleH3 = {
            width: this.props.imageWidth,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis"
        };
        const styleH3H = {
            width: this.props.imageWidth,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            color:"red"
        };
        const styleP = {
            width: this.props.imageWidth,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
        };
        const news = this.state.news;
        const newsList = news.length ?
            news.map((newsItem,index)=>{
                return(
                    <div key={index} className={"imageblock"}  onMouseEnter={this.changeOnMouseEnter.bind(this,index)} onMouseLeave={this.changeOnMouseOut.bind(this,index)}>
                        <BrowserRouter>
                            <Link to={`details/${newsItem.uniquekey}`} target="_blank">

                                <div className="custom-image">
                                    <img style={styleImage} src={newsItem.thumbnail_pic_s} alt=""/>
                                </div>
                                <div className="custom-card">
                                    <h3 ref={"hover"+index} style={styleH3}>{newsItem.title}</h3>
                                    <p style={styleP}>{newsItem.author_name}</p>
                                </div>
                            </Link>
                        </BrowserRouter>
                    </div>
                    )
                    })
            :
            "nothing";

        return(
            <div className="topNewsImgListBox">
                <Card title={this.props.cartTitle} bordered={true} style={{width: this.props.width}}>
                    <div className="topNewsImgList">
                        {newsList}
                    </div>
                </Card>
            </div>
        )
    }
}