import React from 'react';

export default class MobileHeader extends React.Component {
    render(){
        return (
            <div id="mobileheader">
                <header>
                    <img src="./src/image/logo.png" alt="logo"/>

                    <span>Hot News</span>
                </header>
            </div>
        )
    }
}