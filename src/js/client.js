import React from 'react';
import ReactDom from 'react-dom';

export default class Main extends React.Component{
    render(){
        return (
            <h1>Hello World!!!</h1>
        );
    }
}

const app = document.getElementById('app');
ReactDom.render(<Main/>, app)