import React from 'react';

import Nav from '../components/layout/Nav.jsx';

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <h1> Hello World! </h1>
      </div>
    );
  }
}
