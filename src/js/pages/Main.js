import React from 'react';

import Home from './Home';
import Nav from '../components/layout/Nav';

export default class Main extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <Home />
            </div>
        );
    }
}