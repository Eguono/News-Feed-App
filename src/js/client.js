import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route } from 'react-router'

class Main extends React.Component {
    render() {
        return (
            <h1>Hello World!!!</h1>
        );
    }
}

class Headlines extends React.Component {
    render(){
        return (
            <h1>Hello my Name</h1>
        )
    }
}

const app = document.getElementById('app');
ReactDom.render(<Router>
    <Route path="/" component={Main} />
</Router>
    , app)