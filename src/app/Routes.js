import React from "react";

import {
       BrowserRouter as Router,  
       Route, 
        Switch,
        } from "react-router-dom";
        
import {App} 
        from "./App";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import StateList from "./states/containers/StateList";
import StateView from "./states/containers/StateView";
import StateEdit from "./states/containers/StateEdit";
import NotFound from "./components/NotFound";

export default function Routes(props) {

    console.log('Routes')
    return (
        <Router>
            <App>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/states/view/:id" component={StateView} /> 
                    <Route path="/states/edit/:id" component={StateEdit} />               
                    <Route path="/states" component={StateList} />                                                      
                    <Route path="*" component={NotFound} />
                </Switch>  
            </App>
        </Router>
    )
}