//require('./bootstrap');

import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {AppProvider, Card, Page} from '@shopify/polaris';
import {Provider, TitleBar} from '@shopify/app-bridge-react';
//import Dashboard from './components/Dashboard';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default class App extends Component{

    render(){
        const config = {
            apiKey : document.getElementById("apiKey").value,
            shopOrigin : document.getElementById("shopOrigin").value,
            forceRedirect : true
        };

        return(
            <AppProvider>
                <Provider config={config}>
                <Router>

                <MainLayout/>

                </Router>
                </Provider>
            </AppProvider>
        );

    }
}

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}

/*<TitleBar title="Polaris Demo" />
                    <Page title="Polaris Demo Page">
                        <Card sectioned title="Hello World"></Card> 
                    </Page>*/