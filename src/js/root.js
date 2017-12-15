import React from 'react';
import ReactDOM from 'react-dom';
import MediaQuery from 'react-responsive';
import 'antd/dist/antd.css';
import PCIndex from './components/PC_index';
import MobileIndex from './components/mobile_index';
import PCNewsDetails from './components/PC_news_details';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class Root extends React.Component {
    render() {
        return (
            <div>
                <MediaQuery query='(min-device-width:1224px)'>
                    <BrowserRouter  >
                        <Switch>
                            <Route exact path="/" component={PCIndex}></Route>
                            <Route path="/details/:uniquekey" component={PCNewsDetails}></Route>
                        </Switch>
                    </BrowserRouter>
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