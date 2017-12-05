import React  from 'react';
import ReactDOM from 'react-dom';
import MediaQuery from 'react-responsive';
import 'antd/dist/antd.css';
import PCIndex from './components/PC_index'
import {HashRouter,Route} from 'react-router-dom';

 export default class Root extends React.Component{
    render(){
        return(
            <div>
                <MediaQuery query='{min-device-width:1224px}'>
                    <PCIndex />
                </MediaQuery>
                <MediaQuery query='{max-device-width:1224px}'>
                    <PCIndex />
                </MediaQuery>
            </div>
        );
    };
};

ReactDOM.render(<Root/>    , document.getElementById("mainContainer")
);