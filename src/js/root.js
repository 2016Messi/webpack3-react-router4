import React from 'react';
import ReactDOM from 'react-dom';
import MediaQuery from 'react-responsive';
import 'antd/dist/antd.css';
import PCIndex from './components/PC_index'
import MobileIndex from './components/mobile_index';
import {HashRouter, Route} from 'react-router-dom';

class Root extends React.Component {
    render() {
        return (
            <div>
                <MediaQuery query='(min-device-width:1224px)'>
                    <PCIndex/>
                </MediaQuery>
                <MediaQuery query='(max-device-width:1224px)'>
                    <MobileIndex/>
                </MediaQuery>
            </div>
        );
    };
};

ReactDOM.render(<Root/>, document.getElementById("mainContainer")
);