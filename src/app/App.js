import React from "react";
import PropTypes from 'prop-types';

import Header from "./components/Header";

export class App extends React.Component {
    
    render() {
        console.log("App render");

        return (
            <div>
                <h1> Xebia </h1>
                <Header/>

                {/* children contains routes path */}
                <div>
                    {this.props.children}
                </div>             
            </div>          
        )
        
    }
}