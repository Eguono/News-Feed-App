import React from 'react';

import Home from './Home';
import Nav from '../components/layout/Nav';
import Footer from '../components/layout/Footer';

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Home />
        <Footer />
      </div>
    );
  }
}
